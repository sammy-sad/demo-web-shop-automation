class ProductPage {
  constructor(page) {
    this.page = page;

    this.quantityBox = page.locator('.qty-input');
    this.addToCartButton = page.locator('.add-to-cart-button');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = { ProductPage };