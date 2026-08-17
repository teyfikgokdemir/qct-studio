import { test, expect } from '@playwright/test';
import fs from 'node:fs';

const languages = ['en','sq','mk','sr'] as const;
const studies = ['ctseg','phiaderm','misima'] as const;
const route = (lang: typeof languages[number], study: typeof studies[number]) => `${lang === 'en' ? '' : `/${lang}`}/work/${study}/`;

for (const lang of languages) {
  for (const study of studies) {
    test(`${lang}/${study}: metadata, evidence schema and layout`, async ({ page }) => {
      const response = await page.goto(`http://127.0.0.1:4321${route(lang, study)}`, { waitUntil: 'networkidle' });
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(study === 'ctseg' ? 5 : 0);
      await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(2);
      const robots = page.locator('meta[name="robots"]');
      if (study === 'ctseg') await expect(robots).toHaveAttribute('content', /^index, follow/);
      else await expect(robots).toHaveAttribute('content', /noindex/);
      const overflow = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
      expect(overflow.scroll).toBeLessThanOrEqual(overflow.width + 1);
    });
  }
}

test('legacy Artman routes have Cloudflare permanent redirects', async () => {
  const rules = fs.readFileSync('/home/ubuntu/qct-studio-v2/public/_redirects', 'utf8');
  for (const lang of languages) {
    const prefix = lang === 'en' ? '' : `/${lang}`;
    expect(rules).toContain(`${prefix}/work/artman/ ${prefix}/work/ctseg/ 301`);
  }
});

test('desktop and mobile evidence-case visual audit', async ({ browser }) => {
  fs.mkdirSync('/home/ubuntu/qct-studio-v2/test-results/cases', { recursive: true });
  for (const config of [
    { path: '/work/ctseg/', name: 'ctseg-desktop.png', width: 1440, height: 1000 },
    { path: '/sq/work/phiaderm/', name: 'phiaderm-mobile.png', width: 390, height: 844 },
  ]) {
    const context = await browser.newContext({ viewport: { width: config.width, height: config.height } });
    const page = await context.newPage();
    await page.goto(`http://127.0.0.1:4321${config.path}`, { waitUntil: 'networkidle' });
    const reveals = page.locator('[data-reveal]');
    for (let index = 0; index < await reveals.count(); index += 1) {
      await reveals.nth(index).scrollIntoViewIfNeeded();
      await page.waitForTimeout(30);
    }
    await page.screenshot({ path: `/home/ubuntu/qct-studio-v2/test-results/cases/${config.name}`, fullPage: true });
    await context.close();
  }
});
