import { test } from '@playwright/test';

test('Todo: thêm 100 item và xoá item số lẻ', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByText('Bài học 3: Todo page').click();

  for (let i = 1; i <= 100; i++) {
    await page.getByPlaceholder('Enter a new task').fill(`Todo ${i}`);
    await page.locator("#add-task").click();
  }

  page.on('dialog', async (dialog) => {
    await dialog.accept();
  });

  for (let i = 1; i <= 100; i += 2) {
    await page.locator(`//button[@id="todo-${i}-delete"]`).click();
  }
});
