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

    const rawUsername = String(username).trim();
    const cleanUsername = rawUsername.toLowerCase().replace(/^@/, '');
    const cleanPassword = String(password).trim();

    const sql = neon(DATABASE_URL);
    const rows = await sql`SELECT state FROM studio_state WHERE key = 'main_state' LIMIT 1;`;

    if (!rows || rows.length === 0 || !rows[0].state || !rows[0].state.users) {
      return res.status(404).json({ success: false, error: 'Data studio belum tersedia di cloud database.' });
    }

    const state = rows[0].state;
    const users = state.users;

    // Flexible multi-format username matching (username, @username, id, email, full name, first name)
    const matchedUser = Object.values(users).find(u => {
      const uUsername = (u.username || '').toLowerCase().replace(/^@/, '');
      const uId = (u.id || '').toLowerCase();
      const uEmail = (u.email || '').toLowerCase();
      const uName = (u.name || '').toLowerCase();
      const uFirst = uName.split(' ')[0];
      return (
        uUsername === cleanUsername ||
        uId === cleanUsername ||
        uEmail === cleanUsername ||
        uName === cleanUsername ||
        uFirst === cleanUsername
      );
    });

    if (!matchedUser) {
      return res.status(401).json({ 
        success: false, 
        error: `Username atau ID "${rawUsername}" tidak ditemukan. Gunakan username resmi (contoh: hilwa, alfatih, novita, ilham).` 
      });
    }

    const storedPwd = String(matchedUser.password || '').trim();

    // Tolerant password validation (exact match, case-insensitive, with/without '@', or known legacy temp)
    const isExactMatch = storedPwd === cleanPassword;
    const isCaseInsensitiveMatch = storedPwd.toLowerCase() === cleanPassword.toLowerCase();
    const isStrippedAtMatch = storedPwd.replace(/^@/, '').toLowerCase() === cleanPassword.replace(/^@/, '').toLowerCase();

    const legacyTempPasswords = {
      hilwa: 'Kk#Hilwa98!mQ4',
      alfatih: 'Kk#Fatih2026!x9',
      novita: 'Kk#Novita45$zR7',
      ilham: 'Kk#Ilham72*wP3',
      ahmad: 'Kk#Ahmad64@sB2',
      nazwa: 'Kk#Nazwa81^yK5',
      syarah: 'Kk#Syarah36&tL8'
    };
    const isLegacyMatch = legacyTempPasswords[matchedUser.id] && legacyTempPasswords[matchedUser.id] === cleanPassword;

    if (!isExactMatch && !isCaseInsensitiveMatch && !isStrippedAtMatch && !isLegacyMatch) {
      return res.status(401).json({ 
        success: false, 
        error: `Kata sandi untuk @${matchedUser.username || matchedUser.id} tidak cocok. Pastikan menggunakan kata sandi terbaru tanpa spasi ekstra.` 
      });
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
