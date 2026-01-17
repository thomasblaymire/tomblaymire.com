import { expect, test } from '@playwright/test';

test.describe('Articles Page', () => {
  test('should display list of articles', async ({ page }) => {
    await page.goto('/articles');
    await expect(page.getByRole('article').first()).toBeVisible();
  });

  test('should display page heading', async ({ page }) => {
    await page.goto('/articles');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('should navigate to article when clicked', async ({ page }) => {
    await page.goto('/articles');
    await page.getByRole('article').first().getByRole('link').first().click();
    await expect(page).toHaveURL(/\/articles\/.+/);
  });
});

test.describe('Article Detail Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/articles/practical-typescript-patterns');
  });

  test('should display article title', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('should display article content', async ({ page }) => {
    await expect(page.locator('p').first()).toBeVisible();
  });

  test('should display article date', async ({ page }) => {
    await expect(page.locator('time')).toBeVisible();
  });

  test('should have syntax highlighted code blocks', async ({ page }) => {
    await expect(page.locator('pre.shiki').first()).toBeVisible();
  });

  test('should scroll to top on navigation', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.getByRole('article').first().getByRole('link').first().click();
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBe(0);
  });
});
