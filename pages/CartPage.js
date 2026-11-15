class CartPage {
  constructor(page) {
    this.page = page;

    this.productName = page.locator('.cart .product a.product-name');
    this.quantityBox = page.locator('.cart .qty-input');
  }
}

module.exports = { CartPage };