// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://qctstudio.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/sr/'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', sq: 'sq-AL', mk: 'mk-MK' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sq', 'mk', 'sr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
