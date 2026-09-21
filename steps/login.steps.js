const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");

Given("estoy en la página de login", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When(
  "ingreso las credenciales {string} y {string}",
  async function (username, password) {
    await this.loginPage.login(username, password);
  }
);

Then("debería ver la página de productos", async function () {
  this.inventoryPage = new InventoryPage(this.page);
  const title = await this.inventoryPage.getTitle();
  expect(title).toBe("Products");
});

Then(
  "debería ver el mensaje de error {string}",
  async function (expectedMessage) {
    const errorMessage = await this.loginPage.getErrorMessage();
    expect(errorMessage).toBe(expectedMessage);
  }
);
