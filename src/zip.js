const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const outputZipFile = path.resolve(__dirname, '.output.zip');

const output = fs.createWriteStream(outputZipFile);
const archive = archiver('zip', {
  zlib: { level: 9 },
});

output.on('close', () => {
  console.log(`Created file: ${outputZipFile}`);
  console.log(`File size: ${archive.pointer()} bytes`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

const outputDir = path.resolve(__dirname, '.output');

archive.directory(outputDir, path.basename(outputDir));
archive.finalize();
