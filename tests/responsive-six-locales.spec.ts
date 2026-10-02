import { test, expect } from '@playwright/test';

const locales = ['en','sq','mk','sr','ro','bg'] as const;
const localPath = (lang: typeof locales[number], path = '/') => `${lang === 'en' ? '' : '/' + lang}${path}`;

for (const lang of locales) {
  test(`${lang}: homepage desktop/mobile responsive QA`, async ({ browser }) => {
    for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();
      const errors: string[] = [];
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
      page.on('pageerror', (e) => errors.push(e.message));

      const response = await page.goto(`http://127.0.0.1:4321${localPath(lang)}`, { waitUntil: 'networkidle' });
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toBeVisible();

      const overflow = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
      }));
      expect(overflow.content).toBeLessThanOrEqual(overflow.viewport + 1);

      const clipped = await page.locator('h1').evaluate((el) => ({
        sw: el.scrollWidth, cw: el.clientWidth, sh: el.scrollHeight, ch: el.clientHeight,
      }));
      expect(clipped.sw).toBeLessThanOrEqual(clipped.cw + 2);
      expect(clipped.sh).toBeLessThanOrEqual(clipped.ch + 2);

      const heroPrimary = page.locator('[data-cta-location="hero"]').first();
      await expect(heroPrimary).toBeVisible();

      if (viewport.width <= 390) {
        const menu = page.locator('[data-v2-menu]');
        await expect(menu).toBeVisible();
        await menu.click();
        await expect(menu).toHaveAttribute('aria-expanded', 'true');
        await page.keyboard.press('Escape');
        await expect(menu).toHaveAttribute('aria-expanded', 'false');
      }

      expect(errors).toEqual([]);
      await context.close();
    }
  });

  for (const route of ['/about/','/services/','/work/','/pricing/','/insights/','/regional-growth-diagnostic/']) {
    test(`${lang} ${route}: critical responsive route QA`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      const response = await page.goto(`http://127.0.0.1:4321${localPath(lang, route)}`, { waitUntil: 'networkidle' });
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('h1')).toBeVisible();
      const overflow = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
      }));
      expect(overflow.content).toBeLessThanOrEqual(overflow.viewport + 1);
    });
  }
}
