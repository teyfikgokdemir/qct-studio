import fs from 'node:fs';
import path from 'node:path';

const sourceRoot = 'src';
const locales = ['sq', 'mk', 'sr'];
const usedKeys = new Set();

const allowedUnchanged = new Set([
  'QCT Studio',
  'WhatsApp Commerce',
  'Meta Ads',
  'SEO',
  'GEO',
  'TikTok',
  'LinkedIn',
  'Instagram',
  'Facebook',
  'Google Ads',
  'Core Web Vitals',
  '&copy; 2026 QCT Studio',
  'info@qctstudio.com',
  'careers@qctstudio.com',
  'support@qctstudio.com',
  'qctstudio.com',
]);

function decodeString(value) {
  return value
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
      String.fromCharCode(Number.parseInt(hex, 16)))
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      walk(file);
      continue;
    }

    if (!entry.name.endsWith('.astro')) continue;

    const source = fs.readFileSync(file, 'utf8');
    const pattern = /\bt\(\s*(['"])((?:\\.|(?!\1)[\s\S])*?)\1\s*\)/g;

    for (const match of source.matchAll(pattern)) {
      usedKeys.add(decodeString(match[2]));
    }
  }
}

walk(sourceRoot);

const english = JSON.parse(fs.readFileSync('src/i18n/en.json', 'utf8'));
let failed = false;

for (const locale of locales) {
  const dictionary = JSON.parse(
    fs.readFileSync(`src/i18n/${locale}.json`, 'utf8'),
  );
  const missing = [];
  const unchanged = [];

  for (const key of [...usedKeys].sort()) {
    if (!(key in dictionary)) {
      missing.push(key);
      continue;
    }

    const englishValue = english[key] ?? key;
    const wordCount = englishValue.trim().split(/\s+/).length;

    if (
      dictionary[key] === englishValue &&
      wordCount >= 3 &&
      !allowedUnchanged.has(key)
    ) {
      unchanged.push(key);
    }
  }

  console.log(
    `${locale.toUpperCase()}: ${usedKeys.size} used, ` +
    `${missing.length} missing, ${unchanged.length} unchanged English`,
  );

  if (missing.length) {
    failed = true;
    console.error(`\n[${locale}] Missing translation keys:`);
    console.error(missing.join('\n'));
  }

  if (unchanged.length) {
    failed = true;
    console.error(`\n[${locale}] Unchanged English values:`);
    console.error(unchanged.join('\n'));
  }
}


for (const locale of ['ro', 'bg']) {
  const dictionary = JSON.parse(
    fs.readFileSync(`src/i18n/${locale}.json`, 'utf8'),
  );
  const missing = [];
  const unchanged = [];

  for (const key of [...usedKeys].sort()) {
    if (!(key in dictionary)) {
      missing.push(key);
      continue;
    }

    const englishValue = english[key] ?? key;
    const wordCount = englishValue.trim().split(/\s+/).length;
    if (
      dictionary[key] === englishValue &&
      wordCount >= 3 &&
      !allowedUnchanged.has(key)
    ) {
      unchanged.push(key);
    }
  }

  console.log(
    `${locale.toUpperCase()} content coverage: ${usedKeys.size} used, ` +
    `${missing.length} missing, ${unchanged.length} unchanged English`,
  );
  if (missing.length) {
    failed = true;
    console.error(`\n[${locale}] Missing used translation keys:`);
    console.error(missing.join('\n'));
  }
  if (unchanged.length) {
    failed = true;
    console.error(`\n[${locale}] Unchanged English values:`);
    console.error(unchanged.join('\n'));
  }
}


const extendedSharedKeys = [
  'Home','Services','Services overview','Website Design','E-commerce','WhatsApp Commerce',
  'SEO & Performance','Dynamic SEO','Meta Ads Landing Pages','AI Automation','About','Careers',
  'Contact','Menu','Open menu','Close menu','Primary menu','Company','Privacy Policy',
  'Cookie Policy','Terms & Conditions','Skip to content','Social links',
  'Websites, e-commerce and digital systems for businesses across the Balkans.'
];

for (const locale of ['ro', 'bg']) {
  const dictionary = JSON.parse(fs.readFileSync(`src/i18n/${locale}.json`, 'utf8'));
  const missing = extendedSharedKeys.filter((key) => !(key in dictionary));
  const unchanged = extendedSharedKeys.filter((key) =>
    key in dictionary &&
    dictionary[key] === (english[key] ?? key) &&
    !['E-commerce','WhatsApp Commerce','AI Automation','Dynamic SEO','Contact'].includes(key)
  );
  console.log(`${locale.toUpperCase()} shared UI: ${missing.length} missing, ${unchanged.length} unchanged English`);
  if (missing.length || unchanged.length) {
    failed = true;
    if (missing.length) console.error(`[${locale}] Missing shared keys:\n${missing.join('\n')}`);
    if (unchanged.length) console.error(`[${locale}] Unchanged shared UI:\n${unchanged.join('\n')}`);
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log('Translation audit passed.');
}
