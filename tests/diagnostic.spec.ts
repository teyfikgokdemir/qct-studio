import { test, expect } from '@playwright/test';
import fs from 'node:fs';

const routes = ['/regional-growth-diagnostic/', '/sq/regional-growth-diagnostic/', '/mk/regional-growth-diagnostic/', '/sr/regional-growth-diagnostic/'];

for (const route of routes) {
  test(`${route}: metadata and layout`, async ({ page }) => {
    const response = await page.goto(`http://127.0.0.1:4321${route}`, { waitUntil: 'networkidle' });
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(5);
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(3);
    const overflow = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
    expect(overflow.scroll).toBeLessThanOrEqual(overflow.width + 1);
  });
}

test('multi-step diagnostic validates and sends CRM-ready payload', async ({ page }) => {
  let submitted: Record<string, unknown> | undefined;
  await page.route('**/api/diagnostic', async (route) => {
    submitted = route.request().postDataJSON();
    await route.fulfill({ status: 201, contentType: 'application/json', body: JSON.stringify({ ok: true, id: 'test-lead' }) });
  });

  await page.goto('http://127.0.0.1:4321/regional-growth-diagnostic/?utm_source=meta&utm_medium=paid-social&utm_campaign=balkan-growth', { waitUntil: 'networkidle' });
  await page.locator('[data-diagnostic-next]').click();
  await expect(page.locator('[data-diagnostic-panel="0"]')).toBeVisible();
  await expect(page.locator('[data-diagnostic-message]')).not.toBeEmpty();

  await page.locator('[name="first_name"]').fill('Test Founder');
  await page.locator('[name="work_email"]').fill('founder@example.com');
  await page.locator('[name="company"]').fill('Example Company');
  await page.locator('[name="country"]').selectOption('AL');
  await page.locator('[name="sector"]').selectOption('b2b');
  await page.locator('[data-diagnostic-next]').click();
  await expect(page.locator('[data-diagnostic-panel="1"]')).toBeVisible();

  await page.locator('[name="digital_stage"][value="brochure"]').check({ force: true });
  await page.locator('[name="leaks"][value="conversion"]').check({ force: true });
  await page.locator('[name="leaks"][value="measurement"]').check({ force: true });
  await page.locator('[data-diagnostic-next]').click();
  await expect(page.locator('[data-diagnostic-panel="2"]')).toBeVisible();

  await page.locator('[name="primary_goal"][value="export-demand"]').check({ force: true });
  await page.locator('[name="monthly_qualified_volume"]').fill('10-15 estimate');
  await page.locator('[name="context"]').fill('The current website receives enquiries, but source attribution and follow-up ownership are unclear.');
  await page.locator('[name="consent"]').check();
  await page.locator('[data-diagnostic-submit]').click();

  await expect(page.locator('[data-diagnostic-success]')).toBeVisible();
  expect(submitted).toMatchObject({
    first_name: 'Test Founder', work_email: 'founder@example.com', company: 'Example Company',
    country: 'AL', sector: 'b2b', digital_stage: 'brochure', primary_goal: 'export-demand',
    leaks: ['conversion', 'measurement'], locale: 'en', utm_source: 'meta', utm_medium: 'paid-social', utm_campaign: 'balkan-growth', consent: 'yes',
  });
});

test('mobile visual audit and navigation', async ({ browser }) => {
  fs.mkdirSync('/home/ubuntu/qct-studio-v2/test-results/diagnostic', { recursive: true });
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4321/sq/regional-growth-diagnostic/', { waitUntil: 'networkidle' });
  await page.locator('[data-v2-menu]').click();
  await expect(page.locator('[data-v2-nav]')).toHaveClass(/is-open/);
  await page.locator('[data-v2-nav] a').first().click();
  await expect(page.locator('[data-v2-menu]')).toHaveAttribute('aria-expanded', 'false');
  const reveals = page.locator('[data-reveal]');
  for (let index = 0; index < await reveals.count(); index += 1) {
    await reveals.nth(index).scrollIntoViewIfNeeded();
    await page.waitForTimeout(35);
  }
  await page.screenshot({ path: '/home/ubuntu/qct-studio-v2/test-results/diagnostic/sq-mobile.png', fullPage: true });
  await context.close();
});
