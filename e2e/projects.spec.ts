import { expect, test } from '@playwright/test';

test.describe('Projects Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveURL('/projects');
  });

  test('should display projects list', async ({ page }) => {
    await expect(page.locator('ul').first()).toBeVisible();
  });

  test('should display project items', async ({ page }) => {
    await expect(page.locator('li').first()).toBeVisible();
  });

  test('should display project images', async ({ page }) => {
    await expect(page.getByRole('img').first()).toBeVisible();
  });

  test('should navigate to project detail', async ({ page }) => {
    await page.locator('a[href^="/projects/"]').first().click();
    await expect(page).toHaveURL(/\/projects\/.+/);
  });
});
