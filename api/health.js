const { neon } = require('@neondatabase/serverless');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_bQdFl06uxoGT@ep-weathered-wave-a1cvijle-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const startedAt = Date.now();
  try {
    const sql = neon(DATABASE_URL);
    const dbCheck = await sql`
      SELECT NOW() AS db_now,
      (SELECT updated_at FROM studio_state WHERE key = 'main_state' LIMIT 1) AS state_updated_at;
    `;
    const latencyMs = Date.now() - startedAt;

    return res.status(200).json({
      success: true,
      status: 'HEALTHY',
      database: {
        connected: true,
        latencyMs,
        serverTime: dbCheck?.[0]?.db_now || null,
        lastSyncAt: dbCheck?.[0]?.state_updated_at || null
      },
      vercel: {
        region: process.env.VERCEL_REGION || 'local',
        env: process.env.VERCEL_ENV || 'development',
        envConfigured: {
          DATABASE_URL: Boolean(process.env.DATABASE_URL),
          TELEGRAM_BOT_TOKEN: Boolean(process.env.TELEGRAM_BOT_TOKEN),
          WA_CLOUD_TOKEN: Boolean(process.env.WA_CLOUD_TOKEN),
          GEMINI_API_KEY: Boolean(process.env.GEMINI_API_KEY)
        }
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      status: 'DEGRADED',
      error: error.message,
      latencyMs: Date.now() - startedAt
    });
  }
};
