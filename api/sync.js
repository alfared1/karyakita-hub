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

      const jsonString = JSON.stringify(body);

      // Upsert into studio_state
      await sql`
        INSERT INTO studio_state (key, state, updated_at)
        VALUES ('main_state', ${jsonString}::jsonb, NOW())
        ON CONFLICT (key) DO UPDATE
        SET state = EXCLUDED.state, updated_at = NOW();
      `;

      return res.status(200).json({ success: true, message: 'Studio state synchronized to cloud' });
    }

    res.status(405).json({ success: false, error: 'Method not allowed' });
  } catch (error) {
    console.error('Sync API Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
};
