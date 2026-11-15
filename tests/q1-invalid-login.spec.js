const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('shows error for invalid login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://demowebshop.tricentis.com/login');
  await loginPage.login('fakeuser@example.com', 'WrongPassword123');
  await expect(
    page.getByText('Login was unsuccessful. Please correct the errors and try again.')
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log out' })).not.toBeVisible();
});