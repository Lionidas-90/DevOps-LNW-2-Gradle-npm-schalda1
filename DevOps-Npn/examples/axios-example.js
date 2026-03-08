try {
  const pkg = require('axios/package.json');
  console.log('axios version:', pkg.version);
  console.log('axios available:', typeof require('axios').get === 'function');
} catch (e) {
  console.error('axios example error:', e.message);
  process.exitCode = 1;
}
