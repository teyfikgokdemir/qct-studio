import { test, expect } from '@playwright/test';

const base = 'http://127.0.0.1:4321/';

test('V2 homepage: market-led routes, metadata and natural wheel scroll', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));
  const response = await page.goto(base, { waitUntil: 'networkidle' });
  expect(response?.status()).toBe(200);
  await expect(page.locator('h1')).toHaveCount(1);
  for (const href of ['/markets/albania/','/markets/north-macedonia/','/markets/kosovo/','/markets/serbia/','/regional-growth-diagnostic/']) {
    expect(await page.locator(`a[href="${href}"]`).count()).toBeGreaterThanOrEqual(1);
  }
  const bodyText = (await page.locator('body').innerText()).toLowerCase();
  expect(bodyText).not.toMatch(/90[ -](day|days|gün|dit|дена|dana)/);
  const snap = await page.locator('html').evaluate((node) => getComputedStyle(node).scrollSnapType);
  expect(['y', 'y proximity']).toContain(snap);
  const before = await page.evaluate(() => window.scrollY);
  await page.mouse.wheel(0, 720);
  await page.waitForTimeout(650);
  const after = await page.evaluate(() => window.scrollY);
  expect(after).toBeGreaterThan(before + 100);
  expect(errors).toEqual([]);
});

test('V2 homepage: mobile navigation and natural responsive flow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: 'networkidle' });
  const overflow = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
  expect(overflow.content).toBeLessThanOrEqual(overflow.viewport + 1);
  const snap = await page.locator('html').evaluate((node) => getComputedStyle(node).scrollSnapType);
  expect(['none', '']).toContain(snap);
  const menu = page.locator('[data-v2-menu]');
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('[data-v2-nav]')).toHaveClass(/is-open/);
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
});
