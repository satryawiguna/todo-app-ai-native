import { test, expect } from '@playwright/test';

test.describe('Todo App E2E', () => {
  test('should display empty state', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page.locator('text=Belum ada todo')).toBeVisible();
  });

  test('should navigate to create page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('text=+ Buat Baru');
    await expect(page).toHaveURL('/todos/create');
    await expect(page.locator('text=Buat Todo Baru')).toBeVisible();
  });

  test('create → view → edit → delete flow', async ({ page }) => {
    // Create
    await page.goto('http://localhost:3000/todos/create');
    await page.fill('input[placeholder*="harus dikerjakan"]', 'Beli susu');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/');

    // View detail
    await page.click('text=Beli susu');
    await expect(page.locator('text=Beli susu')).toBeVisible();
  });
});
