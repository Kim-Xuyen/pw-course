import { test } from '@playwright/test';

test('Tạo 10 note và tìm kiếm theo tiêu đề bài báo', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByText('Bài học 4: Personal notes').click();

  for (let i = 1; i <= 10; i++) {
    await page.getByLabel('Title').fill(`Khoa học ${i}`);
    await page.getByLabel('Content').fill(`Đây là phần mô tả ngắn ${i}\nBài báo: https://vnexpress.net/khoa-hoc`);
    await page.getByRole('button', { name: 'Add' }).click();
  }

  await page.getByPlaceholder('Search notes...').fill('Khoa học 5');
});