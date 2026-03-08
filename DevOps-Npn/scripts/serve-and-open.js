#!/usr/bin/env node
const _getPort = require('get-port');
const getPort = _getPort.default || _getPort;
const { spawn } = require('child_process');
const _open = require('open');
const open = _open.default || _open;
const path = require('path');

(async () => {
  try {
    const preferred = 8080;
    let port;
    try {
      port = await getPort({ port: preferred });
    } catch (e) {
      port = await getPort();
    }

    // Start http-server via npx so it's available without global install
    const server = spawn('npx', ['http-server', 'demos', '-p', String(port), '-c-1'], {
      stdio: 'inherit',
      shell: true
    });

    server.on('error', (err) => {
      console.error('Failed to start server:', err);
      process.exit(1);
    });

    // Give server a moment to start, then open browser
    const page = process.argv[2] || 'chart-demo.html';
    const url = `http://localhost:${port}/${page}`;
    // slight delay to allow http-server to bind
    setTimeout(() => {
      open(url).catch((e) => console.error('Failed to open browser:', e));
      console.log('Serving demos at', url);
    }, 800);

    // Keep this process alive while server runs
    process.on('SIGINT', () => {
      server.kill();
      process.exit();
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
