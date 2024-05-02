const fs = require('fs');

const manifestPath = './build/asset-manifest.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Modify paths in the manifest
Object.keys(manifest).forEach(key => {
  manifest[key] = manifest[key].replace('/portfolio_web/', '/');
});

// Write the modified manifest back to the file
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log('Manifest updated successfully!');