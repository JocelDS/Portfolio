const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'sections', 'Projects.jsx'), 'utf8');
const regex = /"(\/projects\/[^\"]+)"/g;
const matches = [...content.matchAll(regex)].map(m => m[1]);
const missing = [];
for (const p of matches) {
  const rel = p.replace(/^\/projects\//, '');
  // If the path contains URL-encoded characters, decode them for filesystem checks
  const decodedRel = decodeURIComponent(rel);
  const full = path.join(__dirname, '..', 'public', 'projects', rel);
  const dir = path.dirname(full);
  const file = path.basename(full);
  const decodedFull = path.join(__dirname, '..', 'public', 'projects', decodedRel);
  const decodedDir = path.dirname(decodedFull);
  const decodedFile = path.basename(decodedFull);
  if (!fs.existsSync(dir)) {
    // try decoded path
    if (fs.existsSync(decodedDir)) {
      // directory exists when decoded, proceed with decoded checks
    } else {
      missing.push({ requested: full, reason: 'dir missing' });
      continue;
    }
  }
  const realFiles = fs.readdirSync(dir);
  let found = realFiles.find(f => f === file);
  if (!found && decodedFile) {
    // check decoded filename in the directory
    found = realFiles.find(f => f === decodedFile);
  }
  if (!found) {
    const ci = realFiles.find(f => f.toLowerCase() === file.toLowerCase()) || realFiles.find(f => f.toLowerCase() === (decodedFile && decodedFile.toLowerCase()));
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
