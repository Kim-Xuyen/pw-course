import { test } from '@playwright/test';

test('Thêm sản phẩm vào giỏ hàng theo số lượng yêu cầu', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByText('Bài học 2: Product page').click();

  const addProduct = async (index: number, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      await page.locator(`//button[@data-product-id="${index}"]`).click();
    }
  };

  await addProduct(1, 2); 
  await addProduct(2, 3);
  await addProduct(3, 1); 
});