const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');


test('new user can register', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const email = `shopper${Date.now()}@example.com`;
  await page.goto('https://demowebshop.tricentis.com/register');
  await registerPage.register('Sam', 'Khan', email, 'Test@1234');
  await expect(page.getByText('Your registration completed')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.goto('https://demowebshop.tricentis.com/books');
  await page.getByRole('link', { name: 'Computing and Internet', exact: true }).click();
  await productPage.addToCart();
  await expect(page.getByText('The product has been added to your shopping cart')).toBeVisible();
  await page.goto('https://demowebshop.tricentis.com/cart');
  await expect(cartPage.productName).toHaveText('Computing and Internet');
  await expect(cartPage.quantityBox).toHaveValue('1');
});