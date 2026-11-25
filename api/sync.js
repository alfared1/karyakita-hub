const { neon } = require('@neondatabase/serverless');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_bQdFl06uxoGT@ep-weathered-wave-a1cvijle-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

function toEpochMs(val) {
  if (!val) return 0;
  if (typeof val === 'number') return val;
  const parsed = Date.parse(val);
  return Number.isNaN(parsed) ? 0 : parsed;
}

/**
 * Timestamp-aware array merger:
 * - Preserves items from DB & incoming without resurrecting stale overwrites when _updatedAt differs.
 * - Preserves incoming unshift ordering (newest first) followed by DB-only items.
 */
function mergeListByKey(dbList, incomingList, keyFn = (item) => item?.id, maxItems = null) {
  const dbMap = new Map();
  const dbOrder = [];
  if (Array.isArray(dbList)) {
    dbList.forEach(item => {
      const k = keyFn(item);
      if (k) {
        dbMap.set(k, item);
        dbOrder.push(k);
      }
    });
  }

  const finalMap = new Map();
  const orderedKeys = [];
  const seen = new Set();

  if (Array.isArray(incomingList)) {
    incomingList.forEach(item => {
      const k = keyFn(item);
      if (!k) return;
      const dbItem = dbMap.get(k);
      let merged = item;
      if (dbItem) {
        const dbTs = toEpochMs(dbItem._updatedAt);
        const inTs = toEpochMs(item._updatedAt);
        // If DB has a strictly newer timestamp on this record, let DB win; otherwise incoming updates it
        if (dbTs > 0 && inTs > 0 && dbTs > inTs) {
          merged = { ...item, ...dbItem };
        } else {
          merged = { ...dbItem, ...item };
        }
      }
      finalMap.set(k, merged);
      if (!seen.has(k)) {
        seen.add(k);
        orderedKeys.push(k);
      }
    });
  }

  dbOrder.forEach(k => {
    if (!seen.has(k)) {
      seen.add(k);
      orderedKeys.push(k);
      finalMap.set(k, dbMap.get(k));
    }
  });

  const result = orderedKeys.map(k => finalMap.get(k));
  return maxItems ? result.slice(0, maxItems) : result;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const sql = neon(DATABASE_URL);

    // Ensure table exists
    await sql`
      CREATE TABLE IF NOT EXISTS studio_state (
        key VARCHAR(64) PRIMARY KEY,
        state JSONB NOT NULL,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `;

    if (req.method === 'GET') {
      const rows = await sql`
        SELECT state, updated_at FROM studio_state WHERE key = 'main_state' LIMIT 1;
      `;
      if (rows && rows.length > 0) {
        return res.status(200).json({ success: true, data: rows[0].state, updatedAt: rows[0].updated_at });
      } else {
        return res.status(200).json({ success: true, data: null });
      }
    }

    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch (e) {
          // ignore
        }
      }

      if (!body || typeof body !== 'object') {
        return res.status(400).json({ success: false, error: 'Empty payload' });
      }

      const syncMeta = body._syncMeta && typeof body._syncMeta === 'object' ? body._syncMeta : null;
      const dirtySet = syncMeta && Array.isArray(syncMeta.dirtyKeys) && syncMeta.dirtyKeys.length > 0
        ? new Set(syncMeta.dirtyKeys)
        : null;
      const actorUserId = syncMeta?.actorUserId || null;
      const shouldProcessKey = (key) => !dirtySet || dirtySet.has('*') || dirtySet.has(key);

      // Fetch existing state to prevent overwriting other users' concurrent submissions
      const existingRows = await sql`SELECT state FROM studio_state WHERE key = 'main_state' LIMIT 1;`;
      const incoming = { ...body };
      delete incoming._syncMeta;

      let finalState;

      if (existingRows && existingRows.length > 0 && existingRows[0].state) {
        const db = existingRows[0].state;
        finalState = { ...db };

        // Preserve static units catalog cleanly
        if (incoming.units && !db.units) {
          finalState.units = incoming.units;
        }

        // 1. Users merge (timestamp-guarded & actor-scoped when dirtySet is used)
        if (db.users && incoming.users) {
          if (shouldProcessKey('users') || shouldProcessKey('users_admin')) {
            const mergedUsers = { ...db.users };
            const isAdminBulk = shouldProcessKey('users_admin') || !dirtySet;
            Object.keys(incoming.users).forEach(uid => {
              const dbU = db.users[uid];
              const inU = incoming.users[uid];
              if (!inU) return;
              if (!dbU) {
                mergedUsers[uid] = inU;
                return;
              }

              const dbVer = Math.max(toEpochMs(dbU.passwordChangedAt), toEpochMs(dbU._updatedAt));
              const inVer = Math.max(toEpochMs(inU.passwordChangedAt), toEpochMs(inU._updatedAt));

              // If scoped to an actor and not an admin password/credential action, only allow actor's own profile or explicitly newer timestamps
              if (!isAdminBulk && actorUserId && uid !== actorUserId && inVer <= dbVer) {
                return;
              }

              if (inVer >= dbVer) {
                mergedUsers[uid] = { ...dbU, ...inU };
              } else {
                // Keep newer DB password/state, don't let stale tab revert a password change
                mergedUsers[uid] = { ...inU, ...dbU };
              }
            });
            finalState.users = mergedUsers;
          } else {
            finalState.users = db.users;
          }
        } else if (incoming.users && !db.users) {
          finalState.users = incoming.users;
        }

        // 2. Collection merges (only mutate collections marked dirty, or merge all on full sync)
        if (shouldProcessKey('checkins')) {
          finalState.checkins = mergeListByKey(
            db.checkins,
            incoming.checkins,
            c => (c && c.userId) ? `${c.userId}_sprint_${c.sprintNumber || 1}` : null
          );
        }

        if (shouldProcessKey('syuraMinutes')) {
          finalState.syuraMinutes = mergeListByKey(db.syuraMinutes, incoming.syuraMinutes);
        }

        if (shouldProcessKey('tasks')) {
          finalState.tasks = mergeListByKey(db.tasks, incoming.tasks);
        }

        if (shouldProcessKey('projects')) {
          finalState.projects = mergeListByKey(db.projects, incoming.projects);
        }

        if (shouldProcessKey('crmLeads')) {
          finalState.crmLeads = mergeListByKey(db.crmLeads, incoming.crmLeads);
        }

        if (shouldProcessKey('cashflow')) {
          finalState.cashflow = mergeListByKey(db.cashflow, incoming.cashflow);
        }

        if (shouldProcessKey('academyBatches')) {
          finalState.academyBatches = mergeListByKey(db.academyBatches, incoming.academyBatches);
        }

        if (shouldProcessKey('affiliateContents')) {
          finalState.affiliateContents = mergeListByKey(db.affiliateContents, incoming.affiliateContents);
        }

        if (shouldProcessKey('affiliateCommissions')) {
          finalState.affiliateCommissions = mergeListByKey(db.affiliateCommissions, incoming.affiliateCommissions);
        }

        if (shouldProcessKey('revisionTriage')) {
          finalState.revisionTriage = mergeListByKey(db.revisionTriage, incoming.revisionTriage);
        }

        if (shouldProcessKey('archives')) {
          finalState.archives = mergeListByKey(db.archives, incoming.archives);
        }

        if (shouldProcessKey('botLogs')) {
          finalState.botLogs = mergeListByKey(
            db.botLogs,
            incoming.botLogs,
            b => b?.id || (b ? `${b.time}_${b.type}` : null),
            50
          );
        }

        // Always merge auditLogs (every domain mutation appends an audit record)
        finalState.auditLogs = mergeListByKey(
          db.auditLogs,
          incoming.auditLogs,
          a => a?.id || (a ? `${a.timestamp}_${a.action}` : null),
          200
        );

        // 3. Settings & botConfig deep merge
        if (shouldProcessKey('settings') && incoming.settings) {
          finalState.settings = {
            ...(db.settings || {}),
            ...incoming.settings,
            botConfig: {
              ...((db.settings && db.settings.botConfig) || {}),
              ...((incoming.settings && incoming.settings.botConfig) || {})
            }
          };
        }

        // 4. Syirkah Period & Approvals merge
        if (shouldProcessKey('syirkahPeriod') && incoming.syirkahPeriod) {
          const dbP = db.syirkahPeriod || { status: 'DRAFT', reviewEndsAt: null, approvals: {} };
          const inP = incoming.syirkahPeriod;
          const isNewReviewReset = inP.status === 'REVIEW_48H' && dbP.status !== 'REVIEW_48H' && toEpochMs(inP._updatedAt) >= toEpochMs(dbP._updatedAt);

          if (isNewReviewReset) {
            finalState.syirkahPeriod = inP;
          } else {
            const mergedApprovals = { ...(dbP.approvals || {}) };
            Object.entries(inP.approvals || {}).forEach(([uid, appr]) => {
              const prevAppr = mergedApprovals[uid];
              if (!prevAppr || toEpochMs(appr?.timestamp) >= toEpochMs(prevAppr?.timestamp)) {
                mergedApprovals[uid] = appr;
              }
            });
            finalState.syirkahPeriod = {
              ...dbP,
              ...inP,
              approvals: mergedApprovals
            };
          }
        }

        // 5. Gemini AI Chat Sessions (per-user namespace so deletions/clears work cleanly per co-founder)
        if (shouldProcessKey('geminiChatSessions') && incoming.geminiChatSessions) {
          const dbChats = db.geminiChatSessions || {};
          const mergedChats = { ...dbChats };
          if (actorUserId && Array.isArray(incoming.geminiChatSessions[actorUserId])) {
            mergedChats[actorUserId] = incoming.geminiChatSessions[actorUserId].slice(0, 30);
          } else if (!dirtySet) {
            Object.keys(incoming.geminiChatSessions).forEach(uid => {
              const inList = incoming.geminiChatSessions[uid];
              const dbList = dbChats[uid];
              if (Array.isArray(inList) && inList.length > 0) {
                mergedChats[uid] = mergeListByKey(dbList, inList, s => s?.id, 30);
              }
            });
          }
          finalState.geminiChatSessions = mergedChats;
        }

        if (shouldProcessKey('geminiModel') && incoming.geminiModel) {
          finalState.geminiModel = incoming.geminiModel;
        }

        // 6. Current sprint (allow advance)
        finalState.currentSprint = Math.max(db.currentSprint || 1, incoming.currentSprint || 1);
      } else {
        finalState = { ...incoming };
      }

      // Never persist client-specific ephemeral session cookies or personal local API keys into shared DB state
      finalState.authSession = { isAuthenticated: false, userId: null };
      finalState.activeUserId = 'alfatih';

      const jsonString = JSON.stringify(finalState);

      // Upsert into studio_state
      await sql`
        INSERT INTO studio_state (key, state, updated_at)
        VALUES ('main_state', ${jsonString}::jsonb, NOW())
        ON CONFLICT (key) DO UPDATE
        SET state = EXCLUDED.state, updated_at = NOW();
      `;

      return res.status(200).json({ success: true, message: 'Studio state synchronized to cloud', data: finalState });
    }

    res.status(405).json({ success: false, error: 'Method not allowed' });
  } catch (error) {
    console.error('Sync API Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};
