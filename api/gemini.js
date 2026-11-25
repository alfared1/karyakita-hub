module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const serverKey = process.env.GEMINI_API_KEY || '';
  if (!serverKey || serverKey.trim().length < 10) {
    return res.status(503).json({ success: false, error: 'GEMINI_API_KEY belum dikonfigurasi di Vercel Environment Variables.' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try { body = JSON.parse(body); } catch (e) {}
    }

    const { prompt, model = 'gemini-flash-lite-latest' } = body || {};
    if (!prompt) {
      return res.status(400).json({ success: false, error: 'Prompt wajib diisi.' });
    }

    const safeModel = /^[a-z0-9._-]+$/i.test(model) ? model : 'gemini-flash-lite-latest';
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${safeModel}:generateContent?key=${encodeURIComponent(serverKey.trim())}`;

    const apiRes = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': serverKey.trim()
      },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: String(prompt) }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
      })
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text().catch(() => '');
      return res.status(apiRes.status).json({ success: false, error: `Gemini API HTTP ${apiRes.status}`, detail: errText.slice(0, 200) });
    }

    const data = await apiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      return res.status(502).json({ success: false, error: 'Respon kosong dari Gemini API.' });
    }

    return res.status(200).json({ success: true, text, model: safeModel });
  } catch (error) {
    console.error('Gemini Proxy Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
