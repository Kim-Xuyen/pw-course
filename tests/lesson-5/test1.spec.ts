import { test } from '@playwright/test';

test('Register form - điền thông tin và click register', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByText('Bài học 1: Register Page').click();

    await page.getByLabel('Username').fill('xx_test');
    await page.getByLabel('Email').fill('xx@example.com');
    await page.getByLabel('FeMale').check();
    await page.getByLabel('Reading').check();
    await page.getByLabel('Traveling').check();
    await page.getByLabel('Cooking').check();
    await page.getByLabel('Interests').selectOption(['Technology', 'Science', 'Art', 'Music', 'Sports']);
    await page.getByLabel('Country').selectOption({ label: 'Canada' });
    await page.getByLabel('Date of Birth').fill('1999-01-01');
    const filePath = './tests/lesson-5/aula_swing_effect.jpg';
    await page.getByLabel('Profile Picture').setInputFiles(filePath);
    await page.getByLabel('Biography').fill('This is a test bio.');
    await page.getByLabel('Rate Us:').fill('7');
    await page.locator('#favcolor').click();
    await page.getByLabel('Subscribe').check();
    await page.locator('label.switch').click();
    await page.locator('#starRating').click();
    await page.getByRole('button', { name: 'Register' }).click();
});
