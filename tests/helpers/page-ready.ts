import type { Page, Response } from '@playwright/test';

export async function gotoPageReady(page: Page, url: string): Promise<Response | null> {
  const response = await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
  return response;
}
