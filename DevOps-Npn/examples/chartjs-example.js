
try {
  const fs = require('fs');
  const path = require('path');
  let version;
  try {
    const pkg = require('chart.js/package.json');
    version = pkg.version;
  } catch (e) {
    // fallback: read package.json from node_modules directly (works around package exports)
    const p = path.resolve(__dirname, '..', 'node_modules', 'chart.js', 'package.json');
    const raw = fs.readFileSync(p, 'utf8');
    version = JSON.parse(raw).version;
  }
  console.log('chart.js version:', version);
  console.log('chart.js is ESM; avoid importing runtime in CommonJS example.');
} catch (e) {
  console.error('chart.js example error:', e.message);
  process.exitCode = 1;
}
