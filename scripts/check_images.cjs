const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'sections', 'Projects.jsx'), 'utf8');
const regex = /"(\/projects\/[^\"]+)"/g;
const matches = [...content.matchAll(regex)].map(m => m[1]);
const missing = [];
for (const p of matches) {
  const rel = p.replace(/^\/projects\//, '');
  const full = path.join(__dirname, '..', 'public', 'projects', rel);
  const dir = path.dirname(full);
  const file = path.basename(full);
  if (!fs.existsSync(dir)) {
    missing.push({ requested: full, reason: 'dir missing' });
    continue;
  }
  const realFiles = fs.readdirSync(dir);
  const found = realFiles.find(f => f === file);
  if (!found) {
    const ci = realFiles.find(f => f.toLowerCase() === file.toLowerCase());
    missing.push({ requested: full, reason: ci ? `case mismatch (actual: ${ci})` : 'file missing' });
  }
}
if (missing.length) {
  console.log('RESULT: MISSING OR MISMATCH FOUND');
  missing.forEach(m => console.log(m.requested, '->', m.reason));
  process.exitCode = 1;
} else {
  console.log('RESULT: all image paths exist with exact case');
}
