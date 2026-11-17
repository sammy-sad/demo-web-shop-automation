class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.countryDropdown = page.locator('#BillingNewAddress_CountryId');
    this.cityBox = page.locator('#BillingNewAddress_City');
    this.addressBox = page.locator('#BillingNewAddress_Address1');
    this.zipBox = page.locator('#BillingNewAddress_ZipPostalCode');
    this.phoneBox = page.locator('#BillingNewAddress_PhoneNumber');
    this.billingContinueButton = page.locator('input[onclick="Billing.save()"]');
    this.shippingContinueButton = page.locator('input[onclick="Shipping.save()"]');
    this.shippingMethodContinueButton = page.locator('input[onclick="ShippingMethod.save()"]');
    this.paymentMethodContinueButton = page.locator('input[onclick="PaymentMethod.save()"]');
    this.paymentInfoContinueButton = page.locator('input[onclick="PaymentInfo.save()"]');
  }

  async fillBilling(city, address, zip, phone) {
    await this.countryDropdown.selectOption('United States');
    await this.cityBox.fill(city);
    await this.addressBox.fill(address);
    await this.zipBox.fill(zip);
    await this.phoneBox.fill(phone);
    await this.billingContinueButton.click();
  }

  async continueShipping() {
    await this.shippingContinueButton.click();
  }

  async continueShippingMethod() {
    await this.shippingMethodContinueButton.click();
  }

  async continuePaymentMethod() {
    await this.paymentMethodContinueButton.click();
  }

  async continuePaymentInfo() {
    await this.paymentInfoContinueButton.click();
  }
}

module.exports = { CheckoutPage };