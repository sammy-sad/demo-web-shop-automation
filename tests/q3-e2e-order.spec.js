const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');

test('user can search for a product', async ({ page }) => {
  const searchPage = new SearchPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  await page.goto('https://demowebshop.tricentis.com/');
  await searchPage.search('Computing');
  await expect(page.getByRole('link', { name: 'Computing and Internet', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Computing and Internet', exact: true }).click();
  await productPage.quantityBox.fill('3');
  await productPage.addToCart();
  await expect(page.getByText('The product has been added to your shopping cart')).toBeVisible();
  await page.goto('https://demowebshop.tricentis.com/cart');
  await cartPage.proceedToCheckout();
});