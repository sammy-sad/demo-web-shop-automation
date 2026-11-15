// pages/RegisterPage.js
class RegisterPage {
  constructor(page) {
    this.page = page;

    this.maleRadio = page.locator('#gender-male');
    this.firstNameField = page.locator('#FirstName');
    this.lastNameField = page.locator('#LastName');
    this.emailField = page.locator('#Email');
    this.passwordField = page.locator('#Password');
    this.confirmPasswordField = page.locator('#ConfirmPassword');
    this.submitButton = page.locator('#register-button');
  }

  async register(firstName, lastName, email, password) {
    await this.maleRadio.check();
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.confirmPasswordField.fill(password);
    await this.submitButton.click();
  }
}

module.exports = { RegisterPage };