// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sq', 'mk', 'sr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
