try {
  const pkg = require('animejs/package.json');
  console.log('animejs version:', pkg.version);
  console.log('animejs module available:', typeof require('animejs') === 'function' || typeof require('animejs') === 'object');
} catch (e) {
  console.error('animejs example error:', e.message);
  process.exitCode = 1;
}
