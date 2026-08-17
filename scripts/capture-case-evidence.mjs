import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';

const cases = [
  { slug: 'ctseg', url: 'https://ctseg.com.tr/en/' },
  { slug: 'phiaderm', url: 'https://www.phiaderm.com.tr/' },
  { slug: 'misima', url: 'https://www.misima.com.tr/' },
];

await fs.mkdir('public/images/cases', { recursive: true });
const browser = await chromium.launch({ headless: true });
for (const item of cases) {
  const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
  await page.goto(item.url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.screenshot({ path: `public/images/cases/${item.slug}-live.png`, fullPage: false });
  await page.close();
}
await browser.close();
