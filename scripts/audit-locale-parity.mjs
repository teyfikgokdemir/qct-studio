import fs from 'node:fs';
import path from 'node:path';

const pageRoot = 'src/pages';
const localized = ['sq', 'mk', 'sr', 'ro', 'bg'];
const required = ['en', ...localized];
const errors = [];

function collect(dir, prefix = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.join(prefix, entry.name).split(path.sep).join('/');
    if (entry.isDirectory()) out.push(...collect(full, rel));
    else if (entry.name.endsWith('.astro')) out.push(rel);
  }
  return out.sort();
}

const routeSets = Object.fromEntries(localized.map((lang) => {
  const dir = path.join(pageRoot, lang);
  return [lang, collect(dir)];
}));

const baseline = routeSets.sq;
for (const lang of localized.slice(1)) {
  const routes = routeSets[lang];
  const missing = baseline.filter((route) => !routes.includes(route));
  const extra = routes.filter((route) => !baseline.includes(route));
  if (missing.length || extra.length) {
    errors.push(`${lang.toUpperCase()} route parity differs from SQ. Missing: ${missing.join(', ') || 'none'}; extra: ${extra.join(', ') || 'none'}.`);
  }
}

const deprecatedComponents = ['LocalizedHome.astro', 'LocalizedCorePage.astro', 'LocalizedWork.astro'];
for (const lang of localized) {
  const dir = path.join(pageRoot, lang);
  for (const route of collect(dir)) {
    const source = fs.readFileSync(path.join(dir, route), 'utf8');
    for (const component of deprecatedComponents) {
      if (source.includes(component.replace('.astro', '')) || source.includes(component)) {
        errors.push(`${lang}/${route} still references deprecated ${component}.`);
      }
    }
  }
}

const filesToCheck = [
  'src/data/marketHubs.ts',
  'src/data/diagnosticCopy.ts',
  'src/data/insights.ts',
  'src/data/caseStudies.ts',
  'src/i18n/seo.ts',
];
for (const file of filesToCheck) {
  const source = fs.readFileSync(file, 'utf8');
  for (const lang of required) {
    const patterns = [new RegExp(`\\b${lang}\\s*:`), new RegExp(`['"]${lang}['"]`)];
    if (!patterns.some((pattern) => pattern.test(source))) {
      errors.push(`${file} does not expose locale ${lang}.`);
    }
  }
}

const baseLayout = fs.readFileSync('src/layouts/BaseLayout.astro', 'utf8');
for (const lang of required) {
  if (!baseLayout.includes(`'${lang}'`)) errors.push(`BaseLayout locale set is missing ${lang}.`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Locale parity audit passed: ${localized.map((lang) => `${lang.toUpperCase()} ${routeSets[lang].length} routes`).join(', ')}.`);
}
