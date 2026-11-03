const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function log(msg) {
  try {
    fs.appendFileSync(path.join(__dirname, 'debug.log'), `[${new Date().toISOString()}] ${msg}\n`);
  } catch(e){}
}

process.on('exit', (code) => {
  log(`PROCESS EXIT WITH CODE: ${code}`);
});

process.on('uncaughtException', (err) => {
  log(`UNCAUGHT EXCEPTION: ${err.stack || err}`);
});

process.on('unhandledRejection', (err) => {
  log(`UNHANDLED REJECTION: ${err}`);
});

log('Starting server...');
const PORT = 5173;
const DIST = path.join(__dirname, 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  let file = path.join(DIST, reqPath === '/' ? 'index.html' : reqPath);
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    file = path.join(DIST, 'index.html');
  }
  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, {
    'Content-Type': MIME[ext] || 'application/octet-stream',
    'Access-Control-Allow-Origin': '*'
  });
  fs.createReadStream(file).pipe(res);
});

server.listen(PORT, '127.0.0.1', () => {
  log(`Listening on 127.0.0.1:${PORT}`);
  // Keep process alive explicitly
  setInterval(() => {
    // heartbeat
  }, 10000);
});
