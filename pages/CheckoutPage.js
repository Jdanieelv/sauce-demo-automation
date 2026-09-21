class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = "#first-name";
    this.lastNameInput = "#last-name";
    this.postalCodeInput = "#postal-code";
    this.continueButton = "#continue";
    this.finishButton = "#finish";
    this.completeHeader = ".complete-header";
  }

  async fillForm(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
  }

  async continueCheckout() {
    await this.page.click(this.continueButton);
  }

  async finish() {
    await this.page.click(this.finishButton);
  }

  async getConfirmationMessage() {
    return await this.page.textContent(this.completeHeader);
  }
}

module.exports = CheckoutPage;
