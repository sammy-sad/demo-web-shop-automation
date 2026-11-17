class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.countryDropdown = page.locator('#BillingNewAddress_CountryId');
    this.cityBox = page.locator('#BillingNewAddress_City');
    this.addressBox = page.locator('#BillingNewAddress_Address1');
    this.zipBox = page.locator('#BillingNewAddress_ZipPostalCode');
    this.phoneBox = page.locator('#BillingNewAddress_PhoneNumber');
    this.billingContinueButton = page.locator('.new-address-next-step-button');
  }

  async fillBilling(city, address, zip, phone) {
    await this.countryDropdown.selectOption('United States');
    await this.cityBox.fill(city);
    await this.addressBox.fill(address);
    await this.zipBox.fill(zip);
    await this.phoneBox.fill(phone);
    await this.billingContinueButton.click();
  }
}

module.exports = { CheckoutPage };