const fs = require('fs');
const path = require('path');

const pkgPath = path.resolve(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const scripts = pkg.scripts || {};
const args = process.argv.slice(2);
const namesOnly = args.includes('--names') || args.includes('-n');

if (namesOnly) {
  Object.keys(scripts).forEach((name) => console.log(name));
  process.exit(0);
}

console.log('Available scripts (short):');
Object.keys(scripts).forEach((name) => {
  const cmd = scripts[name].replace(/\s+/g, ' ').trim();
  const short = cmd.length > 60 ? cmd.slice(0, 57) + '...' : cmd;
  console.log(`- ${name}: ${short}`);
});
