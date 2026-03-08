try {
  const pkg = require('dayjs/package.json');
  const dayjs = require('dayjs');
  console.log('dayjs version:', pkg.version);
  console.log('dayjs now (ISO):', dayjs().toISOString());
} catch (e) {
  console.error('dayjs example error:', e.message);
  process.exitCode = 1;
}
