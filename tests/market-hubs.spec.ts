import { test, expect } from '@playwright/test';
import fs from 'node:fs';

const languages = ['en', 'sq', 'mk', 'sr'] as const;
const markets = ['albania', 'north-macedonia', 'kosovo', 'serbia'] as const;
const route = (lang: typeof languages[number], market: typeof markets[number]) =>
  `${lang === 'en' ? '' : `/${lang}`}/markets/${market}/`;

async function revealWholePage(page: import('@playwright/test').Page) {
  const targets = page.locator('[data-reveal]');
  for (let index = 0; index < await targets.count(); index += 1) {
    await targets.nth(index).scrollIntoViewIfNeeded();
    await page.waitForTimeout(35);
  }
  await page.waitForTimeout(250);
}

for (const language of languages) {
  for (const market of markets) {
    test(`${language} ${market}: metadata, schema and layout`, async ({ page }) => {
      const response = await page.goto(`http://127.0.0.1:4321${route(language, market)}`, { waitUntil: 'networkidle' });
      expect(response?.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(5);
      await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(3);

      const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
      for (const schema of schemas) expect(() => JSON.parse(schema)).not.toThrow();

      const overflow = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
      }));
      expect(overflow.content).toBeLessThanOrEqual(overflow.viewport + 1);

      const text = await page.locator('body').innerText();
      expect(text).not.toMatch(/90\s*(day|days|ditë|дена|dana)/i);
      expect(text).not.toMatch(/guaranteed\s+(ranking|revenue|sales)/i);

      const expectedHref = route(language, market);
      await expect(page.locator(`.v2-languages a[aria-current="page"]`)).toHaveAttribute('href', expectedHref);
    });
  }
}

test('desktop visual audit', async ({ browser }) => {
  fs.mkdirSync('/home/ubuntu/qct-studio-v2/test-results/market-hubs', { recursive: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  for (const market of ['albania', 'north-macedonia'] as const) {
    await page.goto(`http://127.0.0.1:4321/markets/${market}/`, { waitUntil: 'networkidle' });
    await revealWholePage(page);
    await page.screenshot({ path: `/home/ubuntu/qct-studio-v2/test-results/market-hubs/${market}-desktop.png`, fullPage: true });
  }
  await context.close();
});

test('mobile navigation, FAQ and visual audit', async ({ browser }) => {
  fs.mkdirSync('/home/ubuntu/qct-studio-v2/test-results/market-hubs', { recursive: true });
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  for (const market of ['kosovo', 'serbia'] as const) {
    await page.goto(`http://127.0.0.1:4321/sr/markets/${market}/`, { waitUntil: 'networkidle' });
    const menu = page.locator('[data-v2-menu]');
    await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('[data-v2-nav]')).toHaveClass(/is-open/);
    await page.locator('[data-v2-nav] a').first().click();
    await expect(menu).toHaveAttribute('aria-expanded', 'false');

    const firstFaq = page.locator('.mh-faq-list details').first();
    await firstFaq.locator('summary').click();
    await expect(firstFaq).toHaveAttribute('open', '');

    await revealWholePage(page);
    await page.screenshot({ path: `/home/ubuntu/qct-studio-v2/test-results/market-hubs/${market}-mobile.png`, fullPage: true });
  }
  await context.close();
});
