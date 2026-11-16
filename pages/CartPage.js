class CartPage {
  constructor(page) {
    this.page = page;

    this.productName = page.locator('.cart .product a.product-name');
    this.quantityBox = page.locator('.cart .qty-input');
    this.termsCheckbox = page.locator('#termsofservice');
    this.checkoutButton = page.locator('#checkout');
  }
  async proceedToCheckout() {
    await this.termsCheckbox.check();
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };