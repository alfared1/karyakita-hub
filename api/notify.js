const { neon } = require('@neondatabase/serverless');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_bQdFl06uxoGT@ep-weathered-wave-a1cvijle-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

function getJakartaHour() {
  const nowStr = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta', hour12: false, hour: '2-digit' });
  const parsed = parseInt(nowStr, 10);
  return Number.isNaN(parsed) ? 12 : parsed;
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) {}
    }
    const { type = 'Pesan Bot Studio', message = 'Notifikasi sistem KaryaKita Hub', actorName = 'Sistem KaryaKita', forceSend = false } = body || {};

    const sql = neon(DATABASE_URL);
    await sql`
      CREATE TABLE IF NOT EXISTS studio_state (
        key VARCHAR(64) PRIMARY KEY,
        state JSONB NOT NULL,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `;

    const rows = await sql`SELECT state FROM studio_state WHERE key = 'main_state' LIMIT 1;`;
    const state = (rows && rows[0] && rows[0].state) ? rows[0].state : {};
    const botConfig = (state.settings && state.settings.botConfig) || {};

    // Respect Quiet Hours (22.00 - 06.00 WIB) unless explicitly forced by manual test button
    const wibHour = getJakartaHour();
    const quietHoursEnabled = botConfig.quietHours2206 !== false;
    if (quietHoursEnabled && !forceSend && (wibHour >= 22 || wibHour < 6)) {
      const heldLog = {
        id: 'botlog-' + Date.now(),
        time: new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' }) + ' WIB',
        channel: 'Quiet Hours Guard (22.00-06.00 WIB)',
        type,
        status: 'Ditunda (Mode Hening Malam)'
      };
      state.botLogs = [heldLog, ...(state.botLogs || [])].slice(0, 50);
      await sql`
        INSERT INTO studio_state (key, state, updated_at)
        VALUES ('main_state', ${JSON.stringify(state)}::jsonb, NOW())
        ON CONFLICT (key) DO UPDATE SET state = EXCLUDED.state, updated_at = NOW();
      `;
      return res.status(200).json({ success: true, delivered: false, reason: 'QUIET_HOURS', log: heldLog, botLogs: state.botLogs });
    }

    const tgToken = process.env.TELEGRAM_BOT_TOKEN || botConfig.telegramBotToken || '';
    const tgChatId = process.env.TELEGRAM_CHAT_ID || botConfig.telegramChatId || '';
    const webhookUrl = botConfig.webhookUrl || '';
    const waToken = process.env.WA_CLOUD_TOKEN || '';
    const waPhoneId = process.env.WA_PHONE_NUMBER_ID || '';
    const waGroup = process.env.WA_TARGET_GROUP_ID || '';

    let channel = 'KaryaKita Cloud Logger';
    let statusText = 'Tersimpan di Cloud (Simulasi — Token WA/Telegram Belum Diatur)';
    let deliveredExternally = false;

    const fullText = `[KaryaKita Hub]\n${type}\n${message}\n— ${actorName}`;

    // 1. Try Telegram Bot API if configured
    if (tgToken && tgChatId) {
      try {
        const tgRes = await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: tgChatId, text: fullText })
        });
        channel = 'Telegram Bot API';
        if (tgRes.ok) {
          statusText = 'Terkirim Live ke Telegram';
          deliveredExternally = true;
        } else {
          statusText = `Gagal Telegram (HTTP ${tgRes.status})`;
        }
      } catch (e) {
        channel = 'Telegram Bot API';
        statusText = `Error Telegram: ${e.message}`;
      }
    } else if (webhookUrl && /^https?:\/\//i.test(webhookUrl)) {
      // 2. Try Custom Webhook (Discord / Slack / WhatsApp Gateway like Fonnte / n8n / Make)
      try {
        const whRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: fullText,
            content: fullText,
            message: fullText,
            type,
            actorName,
            timestamp: new Date().toISOString()
          })
        });
        channel = 'Custom Webhook Gateway';
        if (whRes.ok) {
          statusText = 'Terkirim Live ke Webhook';
          deliveredExternally = true;
        } else {
          statusText = `Gagal Webhook (HTTP ${whRes.status})`;
        }
      } catch (e) {
        channel = 'Custom Webhook Gateway';
        statusText = `Error Webhook: ${e.message}`;
      }
    } else if (waToken && waPhoneId && waGroup) {
      // 3. Try WhatsApp Cloud API if configured in Vercel env
      try {
        const waRes = await fetch(`https://graph.facebook.com/v19.0/${waPhoneId}/messages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${waToken}`
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: waGroup,
            type: 'text',
            text: { body: fullText }
          })
        });
        channel = 'WhatsApp Cloud API';
        if (waRes.ok) {
          statusText = 'Terkirim Live ke WhatsApp';
          deliveredExternally = true;
        } else {
          statusText = `Gagal WhatsApp Cloud (HTTP ${waRes.status})`;
        }
      } catch (e) {
        channel = 'WhatsApp Cloud API';
        statusText = `Error WhatsApp: ${e.message}`;
      }
    }

    const newLog = {
      id: 'botlog-' + Date.now(),
      time: new Date().toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' }) + ' WIB',
      channel,
      type,
      status: statusText
    };

    state.botLogs = [newLog, ...(state.botLogs || [])].slice(0, 50);
    state.auditLogs = [
      {
        id: 'aud-' + Date.now(),
        actorName,
        action: 'BOT_NOTIFICATION_DISPATCHED',
        entity: channel,
        details: `${type} -> ${statusText}`,
        timestamp: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }) + ' WIB'
      },
      ...(state.auditLogs || [])
    ].slice(0, 200);

    await sql`
      INSERT INTO studio_state (key, state, updated_at)
      VALUES ('main_state', ${JSON.stringify(state)}::jsonb, NOW())
      ON CONFLICT (key) DO UPDATE SET state = EXCLUDED.state, updated_at = NOW();
    `;

    return res.status(200).json({
      success: true,
      delivered: deliveredExternally,
      log: newLog,
      botLogs: state.botLogs,
      auditLogs: state.auditLogs
    });
  } catch (error) {
    console.error('Notify API Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
