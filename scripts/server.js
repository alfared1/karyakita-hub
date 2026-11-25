const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
};

function dispatchApiHandler(req, res, apiName) {
  const apiPath = path.join(PUBLIC_DIR, 'api', `${apiName}.js`);
  if (!fs.existsSync(apiPath)) {
    res.writeHead(404, { 'Content-Type': 'application/json; charset=UTF-8' });
    res.end(JSON.stringify({ success: false, error: `Endpoint /api/${apiName} tidak ditemukan.` }));
    return;
  }

  let bodyRaw = '';
  req.on('data', chunk => { bodyRaw += chunk; });
  req.on('end', async () => {
    try {
      req.body = bodyRaw ? JSON.parse(bodyRaw) : {};
    } catch (e) {
      req.body = bodyRaw || {};
    }

    // Wrap Node http.ServerResponse with Express/Vercel-compatible helpers
    const vercelRes = {
      _status: 200,
      setHeader: (k, v) => res.setHeader(k, v),
      status: (code) => { vercelRes._status = code; return vercelRes; },
      json: (obj) => {
        if (!res.headersSent) res.writeHead(vercelRes._status, { 'Content-Type': 'application/json; charset=UTF-8' });
        res.end(JSON.stringify(obj));
      },
      end: (chunk) => {
        if (!res.headersSent) res.writeHead(vercelRes._status);
        res.end(chunk);
      }
    };

    try {
      const handler = require(apiPath);
      await handler(req, vercelRes);
    } catch (err) {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json; charset=UTF-8' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    }
  });
}

function handleRequest(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const host = req.headers.host || 'localhost:3000';
  const parsedUrl = new URL(req.url, `http://${host}`);
  const pathname = parsedUrl.pathname;

  if (pathname.startsWith('/api/')) {
    const apiName = pathname.replace(/^\/api\//, '').replace(/\/$/, '').split('/')[0];
    if (/^[a-z0-9_-]+$/i.test(apiName)) {
      dispatchApiHandler(req, res, apiName);
      return;
    }
  }

  let filePath = path.join(PUBLIC_DIR, pathname);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      if (!path.extname(pathname) || !fs.existsSync(filePath)) {
        filePath = path.join(PUBLIC_DIR, 'index.html');
      }
    }

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('404 Not Found — KaryaKita Hub');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
}

const server = http.createServer(handleRequest);

if (require.main === module) {
  server.listen(PORT, () => {
    console.log('================================================================');
    console.log('  KARYAKITA HUB — Internal Venture Studio Operating System');
    console.log('  Organisasi: KaryaKita AI & Venture Studio (STMIK Tazkia)');
    console.log('----------------------------------------------------------------');
    console.log(`  Server aktif di: http://localhost:${PORT}`);
    console.log('  Tekan Ctrl+C untuk menghentikan server.');
    console.log('================================================================');
  });
}

module.exports = handleRequest;
