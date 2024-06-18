#!/usr/bin/env node

const fs = require('fs');
const os = require('os');

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

if (!packageJson.version) {
  console.error('No version found in package.json. Exiting.');
  process.exit(1);
}

const bumpType = process.argv[2] || 'PATCH';

// Check if the provided argument is a valid version string
const versionRegex = /^\d+\.\d+\.\d+$/;
if (versionRegex.test(bumpType)) {
  packageJson.version = bumpType;
  console.log(`Version set to ${bumpType}`);
} else {
  let [major, minor, patch] = packageJson.version.split('.');

  switch (bumpType.toUpperCase()) {
    case 'MINOR':
      minor = parseInt(minor) + 1;
      patch = 0;
      break;
    case 'MAJOR':
      major = parseInt(major) + 1;
      minor = 0;
      patch = 0;
      break;
    case 'PATCH':
      patch = parseInt(patch) + 1;
      break;
    default:
      console.error('Invalid bump type or version. Please use MAJOR, MINOR, PATCH, or provide a valid version x.x.x.');
      process.exit(1);
  }

  packageJson.version = `${major}.${minor}.${patch}`;
  console.log(`Version bumped to ${packageJson.version}`);
}

fs.writeFileSync('package.json', `${JSON.stringify(packageJson, null, 2)}${os.EOL}`, 'utf8');
