const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
};

const server = http.createServer((req, res) => {
  // CORS & basic headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Parse URL
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = parsedUrl.pathname;

  // Route fallback: if requesting any route without extension, serve index.html (SPA)
  let filePath = path.join(PUBLIC_DIR, pathname);
  
  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If it has no file extension or not found, serve index.html (SPA routing)
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
});

server.listen(PORT, () => {
  console.log('================================================================');
  console.log('  KARYAKITA HUB — Internal Venture Studio Operating System');
  console.log('  Organisasi: KaryaKita AI & Venture Studio (STMIK Tazkia)');
  console.log('----------------------------------------------------------------');
  console.log(`  Server aktif di: http://localhost:${PORT}`);
  console.log('  Tekan Ctrl+C untuk menghentikan server.');
  console.log('================================================================');
});
