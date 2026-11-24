const { neon } = require('@neondatabase/serverless');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_bQdFl06uxoGT@ep-weathered-wave-a1cvijle-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

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

      if (!body) {
        return res.status(400).json({ success: false, error: 'Empty payload' });
      }

      // Fetch existing state to prevent overwriting other users' concurrent submissions
      const existingRows = await sql`SELECT state FROM studio_state WHERE key = 'main_state' LIMIT 1;`;
      let finalState = { ...body };

      if (existingRows && existingRows.length > 0 && existingRows[0].state) {
        const db = existingRows[0].state;

        // 1. Users merge
        if (db.users && finalState.users) {
          const mergedUsers = { ...db.users };
          Object.keys(finalState.users).forEach(uid => {
            mergedUsers[uid] = { ...mergedUsers[uid], ...finalState.users[uid] };
          });
          finalState.users = mergedUsers;
        } else if (db.users) {
          finalState.users = db.users;
        }

        // 2. Checkins merge (by userId + sprintNumber) - Ensures no co-founder checkin is lost!
        if (Array.isArray(db.checkins) && db.checkins.length > 0) {
          const checkinMap = new Map();
          db.checkins.forEach(c => {
            if (c && c.userId) checkinMap.set(`${c.userId}_sprint_${c.sprintNumber || 1}`, c);
          });
          if (Array.isArray(finalState.checkins)) {
            finalState.checkins.forEach(c => {
              if (c && c.userId) checkinMap.set(`${c.userId}_sprint_${c.sprintNumber || 1}`, c);
            });
          }
          finalState.checkins = Array.from(checkinMap.values());
        }

        // 3. SyuraMinutes merge (by id)
        if (Array.isArray(db.syuraMinutes) && db.syuraMinutes.length > 0) {
          const syuraMap = new Map();
          db.syuraMinutes.forEach(m => { if (m && m.id) syuraMap.set(m.id, m); });
          if (Array.isArray(finalState.syuraMinutes)) {
            finalState.syuraMinutes.forEach(m => { if (m && m.id) syuraMap.set(m.id, m); });
          }
          finalState.syuraMinutes = Array.from(syuraMap.values());
        }

        // 4. Tasks merge (by id)
        if (Array.isArray(db.tasks) && db.tasks.length > 0) {
          const taskMap = new Map();
          db.tasks.forEach(t => { if (t && t.id) taskMap.set(t.id, t); });
          if (Array.isArray(finalState.tasks)) {
            finalState.tasks.forEach(t => { if (t && t.id) taskMap.set(t.id, t); });
          }
          finalState.tasks = Array.from(taskMap.values());
        }

        // 5. Projects merge (by id)
        if (Array.isArray(db.projects) && db.projects.length > 0) {
          const projectMap = new Map();
          db.projects.forEach(p => { if (p && p.id) projectMap.set(p.id, p); });
          if (Array.isArray(finalState.projects)) {
            finalState.projects.forEach(p => { if (p && p.id) projectMap.set(p.id, p); });
          }
          finalState.projects = Array.from(projectMap.values());
        }

        // 6. CRM leads merge (by id)
        if (Array.isArray(db.crmLeads) && db.crmLeads.length > 0) {
          const crmMap = new Map();
          db.crmLeads.forEach(l => { if (l && l.id) crmMap.set(l.id, l); });
          if (Array.isArray(finalState.crmLeads)) {
            finalState.crmLeads.forEach(l => { if (l && l.id) crmMap.set(l.id, l); });
          }
          finalState.crmLeads = Array.from(crmMap.values());
        }

        // 7. Cashflow merge (by id)
        if (Array.isArray(db.cashflow) && db.cashflow.length > 0) {
          const cashMap = new Map();
          db.cashflow.forEach(c => { if (c && c.id) cashMap.set(c.id, c); });
          if (Array.isArray(finalState.cashflow)) {
            finalState.cashflow.forEach(c => { if (c && c.id) cashMap.set(c.id, c); });
          }
          finalState.cashflow = Array.from(cashMap.values());
        }

        // 8. Other modules: preserve db values if incoming is empty
        ['academyBatches', 'affiliateContents', 'affiliateCommissions', 'revisionTriage', 'archives', 'auditLogs'].forEach(key => {
          if (Array.isArray(db[key]) && db[key].length > 0 && (!Array.isArray(finalState[key]) || finalState[key].length === 0)) {
            finalState[key] = db[key];
          }
        });

        if (db.settings && finalState.settings) {
          finalState.settings = { ...db.settings, ...finalState.settings };
        } else if (db.settings) {
          finalState.settings = db.settings;
        }

        if (db.syirkahPeriod && (!finalState.syirkahPeriod || finalState.syirkahPeriod.status === 'DRAFT')) {
          finalState.syirkahPeriod = db.syirkahPeriod;
        }
      }

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
