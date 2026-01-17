import { expect, test } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveURL('/about');
  });

  test('should display heading', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('should display profile image', async ({ page }) => {
    await expect(page.getByRole('img').first()).toBeVisible();
  });

  test('should display about content', async ({ page }) => {
    await expect(page.locator('p').first()).toBeVisible();
  });

  test('should display social links', async ({ page }) => {
    const links = page.locator('a[target="_blank"]');
    await expect(links.first()).toBeVisible();
  });

  test('should navigate back to homepage via logo', async ({ page }) => {
    await page.locator('header').getByRole('link').first().click();
    await expect(page).toHaveURL('/');
  });
});
