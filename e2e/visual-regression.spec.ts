import { expect, test } from '@playwright/test';

const pages = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'articles', path: '/articles' },
  { name: 'articles-detail', path: '/articles/git-commands-for-developers' },
  { name: 'projects', path: '/projects' },
  { name: 'projects-detail', path: '/projects/newday' },
  { name: 'uses', path: '/uses' },
];

for (const { name, path } of pages) {
  test(`${name} - visual snapshot`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' });

    // Wait for fonts and images to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot(`${name}.png`, {
      maxDiffPixelRatio: 0.01,
    });
  });
}
