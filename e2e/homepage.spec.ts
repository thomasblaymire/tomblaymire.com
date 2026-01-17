import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Tom Blaymire/);
  });

  test('should display hero section', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
  });

  test('should display recent articles', async ({ page }) => {
    await expect(page.getByRole('article').first()).toBeVisible();
  });

  test('should display work section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Work' })).toBeVisible();
  });

  test('should display subscribe form', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Stay Up To Date' })).toBeVisible();
    await expect(page.getByPlaceholder('Email address')).toBeVisible();
  });

  test('should display footer', async ({ page }) => {
    await expect(page.getByText(/© Tom Blaymire/)).toBeVisible();
  });

  test('should navigate to about page', async ({ page }) => {
    await page.locator('header').getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
  });

  test('should navigate to articles page', async ({ page }) => {
    await page.locator('header').getByRole('link', { name: 'Articles' }).click();
    await expect(page).toHaveURL('/articles');
  });

  test('should navigate to projects page', async ({ page }) => {
    await page.locator('header').getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL('/projects');
  });

  test('should have theme toggle button', async ({ page }) => {
    await expect(page.getByRole('button').first()).toBeVisible();
  });

  test('should have main landmark', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible();
  });
});
