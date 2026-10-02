import { readFileSync } from 'node:fs';
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const redirectSources = new Set(
  readFileSync(new URL('./public/_redirects', import.meta.url), 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => line.split(/\s+/))
    .filter((parts) => ['301', '308'].includes(parts[2]))
    .map((parts) => parts[0].endsWith('/') ? parts[0] : parts[0] + '/'),
);

const excludedIndexPaths = [
  /\/(?:sq\/|mk\/|sr\/|ro\/|bg\/)?work\/(?:misima|phiaderm)\/$/,
  /\/(?:ro\/|bg\/)?work\/artman\/$/,
];

// https://astro.build/config
export default defineConfig({
  site: 'https://qctstudio.com',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const normalized = pathname.endsWith('/') ? pathname : pathname + '/';
        return !redirectSources.has(normalized) && !excludedIndexPaths.some((pattern) => pattern.test(normalized));
      },
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', sq: 'sq-AL', mk: 'mk-MK', sr: 'sr-RS', ro: 'ro-RO', bg: 'bg-BG' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sq', 'mk', 'sr', 'ro', 'bg'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
