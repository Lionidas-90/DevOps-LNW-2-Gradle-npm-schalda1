#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

if (process.argv.length < 3) {
  console.error('Usage: node scripts/run-quiet.js <script-to-run.js> [args...]');
  process.exit(1);
}

const script = path.resolve(process.cwd(), process.argv[2]);
const args = process.argv.slice(3);

const child = spawn(process.execPath, [script, ...args], {
  stdio: ['ignore', 'ignore', 'ignore'],
  windowsHide: true
});

child.on('close', (code) => {
  process.exit(code);
});
