import { readFile, writeFile } from 'node:fs/promises';

const auditPath = new URL('../scripts/audit-built-html.mjs', import.meta.url);
let source = await readFile(auditPath, 'utf8');

const obsoleteCrossBrandRule = `  if (/qctcommerce\\.com/i.test(html)) {\n    errors.push(\`${file}: must not contain a qctcommerce.com reference in Phase 9A.\`);\n  }\n\n`;
if (source.includes(obsoleteCrossBrandRule)) {
  source = source.replace(obsoleteCrossBrandRule, '');
}

const obsoleteForbiddenFields = `for (const forbiddenField of ['sameAs', 'address', 'alumniOf', 'award', 'hasCredential'])`;
const currentForbiddenFields = `for (const forbiddenField of ['address', 'alumniOf', 'award', 'hasCredential'])`;
if (source.includes(obsoleteForbiddenFields)) {
  source = source.replace(obsoleteForbiddenFields, currentForbiddenFields);
}

if (/must not contain a qctcommerce\.com reference in Phase 9A/.test(source)) {
  throw new Error('Obsolete Phase 9A cross-brand rule remains in HTML audit.');
}
if (source.includes(`['sameAs', 'address', 'alumniOf', 'award', 'hasCredential']`)) {
  throw new Error('Obsolete sameAs prohibition remains in HTML audit.');
}

await writeFile(auditPath, source, 'utf8');
console.log('Aligned HTML audit with the verified QCT ecosystem and founder identity.');
