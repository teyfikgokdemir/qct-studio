import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const SITE = 'https://qctstudio.com';
const expectedHreflangs = ['en', 'sq', 'mk', 'sr', 'x-default'];
const htmlFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith('.html')) htmlFiles.push(file);
  }
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']+)["']`, 'i'))?.[1] ?? null;
}

function expectedUrl(file) {
  const relative = path.relative(DIST, file).split(path.sep).join('/');
  if (relative === 'index.html') return `${SITE}/`;
  if (relative === '404.html') return `${SITE}/404/`;
  if (relative.endsWith('/index.html')) {
    return `${SITE}/${relative.slice(0, -'index.html'.length)}`;
  }
  return `${SITE}/${relative}`;
}

walk(DIST);

const errors = [];
let indexable = 0;
let noindex = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const canonicalTags = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi) ?? [];
  const alternateTags = html.match(/<link\s+[^>]*rel=["']alternate["'][^>]*hreflang=["'][^"']+["'][^>]*>/gi) ?? [];
  const robotsTags = html.match(/<meta\s+[^>]*name=["']robots["'][^>]*>/gi) ?? [];
  const robots = robotsTags.map((tag) => attribute(tag, 'content') ?? '').join(',').toLowerCase();
  const isNoindex = robots.includes('noindex');
  const expectedCanonical = expectedUrl(file);

  if (canonicalTags.length !== 1) {
    errors.push(`${file}: expected one canonical tag, found ${canonicalTags.length}.`);
  } else {
    const canonical = attribute(canonicalTags[0], 'href');
    if (canonical !== expectedCanonical) {
      errors.push(`${file}: canonical ${canonical} does not match ${expectedCanonical}.`);
    }
    if (/\/(sq|mk|sr)\/\1(?:\/|$)/.test(canonical ?? '')) {
      errors.push(`${file}: canonical contains a repeated locale segment: ${canonical}.`);
    }
  }

  const hreflangs = alternateTags.map((tag) => attribute(tag, 'hreflang')).filter(Boolean).sort();

  if (isNoindex) {
    noindex += 1;
    if (alternateTags.length !== 0) {
      errors.push(`${file}: noindex page must not emit hreflang alternates.`);
    }
  } else {
    indexable += 1;
    if (JSON.stringify(hreflangs) !== JSON.stringify([...expectedHreflangs].sort())) {
      errors.push(`${file}: expected hreflang set ${expectedHreflangs.join(', ')}, found ${hreflangs.join(', ')}.`);
    }

    for (const tag of alternateTags) {
      const href = attribute(tag, 'href') ?? '';
      if (/\/(sq|mk|sr)\/\1(?:\/|$)/.test(href)) {
        errors.push(`${file}: hreflang contains a repeated locale segment: ${href}.`);
      }
    }
  }
}

console.log(`HTML SEO audit: ${htmlFiles.length} files, ${indexable} indexable, ${noindex} noindex.`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Canonical, hreflang and noindex audit passed.');
}
