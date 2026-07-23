import { readFile, writeFile } from 'node:fs/promises';

const layoutPath = new URL('../src/layouts/BaseLayout.astro', import.meta.url);
let source = await readFile(layoutPath, 'utf8');

if (source.includes("foundingDate: '2024'")) {
  source = source.replace("foundingDate: '2024'", "foundingDate: '2025'");
} else if (!source.includes("foundingDate: '2025'")) {
  throw new Error('QCT Studio foundingDate is neither 2024 nor 2025. Refusing an unsafe patch.');
}

const founderNeedle = `knowsLanguage: ['Turkish', 'English'],`;
const founderReplacement = `sameAs: ['https://teyfikgokdemir.com/', 'https://www.linkedin.com/in/teyfik-g%C3%B6kdemir-0b1a9758'],\n\tknowsLanguage: ['Turkish', 'English'],`;
if (source.includes(founderNeedle) && !source.includes("sameAs: ['https://teyfikgokdemir.com/")) {
  source = source.replace(founderNeedle, founderReplacement);
}

await writeFile(layoutPath, source, 'utf8');

const consentPath = new URL('../src/components/CookieConsent.astro', import.meta.url);
let consent = await readFile(consentPath, 'utf8');
const replacements = new Map([
  ["accept: 'Accept analytics'", "accept: 'Accept'"],
  ["accept: 'Prano analitikën'", "accept: 'Prano'"],
  ["accept: 'Прифати аналитика'", "accept: 'Прифати'"],
  ["accept: 'Prihvati analitiku'", "accept: 'Prihvati'"],
]);
for (const [from, to] of replacements) consent = consent.replace(from, to);
await writeFile(consentPath, consent, 'utf8');

console.log('Applied QCT Studio schema, founder identity and consent-label fixes.');
