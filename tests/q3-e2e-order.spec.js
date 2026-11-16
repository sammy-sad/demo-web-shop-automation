const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');

test('user can search for a product', async ({ page }) => {
  const searchPage = new SearchPage(page);
  await page.goto('https://demowebshop.tricentis.com/');
  await searchPage.search('Computing');
  await expect(page.getByRole('link', { name: 'Computing and Internet', exact: true })).toBeVisible();
});