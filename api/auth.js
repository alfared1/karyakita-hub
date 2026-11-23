const { neon } = require('@neondatabase/serverless');

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_bQdFl06uxoGT@ep-weathered-wave-a1cvijle-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        // ignore
      }
    }

    const { username, password } = body || {};
    if (!username || !password) {
      return res.status(400).json({ success: false, error: 'Username dan kata sandi wajib diisi.' });
    }

    const cleanUsername = username.trim().toLowerCase();
    const cleanPassword = password.trim();

    const sql = neon(DATABASE_URL);
    const rows = await sql`SELECT state FROM studio_state WHERE key = 'main_state' LIMIT 1;`;

    if (!rows || rows.length === 0 || !rows[0].state || !rows[0].state.users) {
      return res.status(404).json({ success: false, error: 'Data studio belum tersedia di cloud database.' });
    }

    const state = rows[0].state;
    const users = state.users;

    const matchedUser = Object.values(users).find(u =>
      (u.username && u.username.toLowerCase() === cleanUsername) ||
      (u.id && u.id.toLowerCase() === cleanUsername) ||
      (u.email && u.email.toLowerCase() === cleanUsername)
    );

    if (!matchedUser) {
      return res.status(401).json({ success: false, error: 'Username atau ID Co-Founder tidak ditemukan.' });
    }

    if (matchedUser.password.trim() !== cleanPassword) {
      return res.status(401).json({ success: false, error: 'Kata sandi tidak cocok. Pastikan menggunakan kata sandi terbaru yang telah diubah.' });
    }

    // Record login audit log in cloud
    const newLog = {
      id: 'aud-' + Date.now(),
      actorName: matchedUser.name + ' (' + (matchedUser.roleLabel || matchedUser.role) + ')',
      action: 'AUTH_LOGIN_SUCCESS',
      entity: `Login: ${matchedUser.name}`,
      details: `Co-Founder ${matchedUser.name} (${matchedUser.roleLabel}) berhasil masuk melalui Cloud Auth.`,
      timestamp: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' }) + ' WIB'
    };

    if (!state.auditLogs) state.auditLogs = [];
    state.auditLogs.unshift(newLog);

    await sql`
      UPDATE studio_state 
      SET state = ${JSON.stringify(state)}::jsonb, updated_at = NOW() 
      WHERE key = 'main_state';
    `;

    return res.status(200).json({
      success: true,
      user: matchedUser,
      fullState: state,
      message: `Alhamdulillah! Selamat datang, ${matchedUser.name}.`
    });
  } catch (error) {
    console.error('Auth API Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
