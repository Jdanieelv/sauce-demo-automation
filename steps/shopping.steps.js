const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");
const InventoryPage = require("../pages/InventoryPage");
const CartPage = require("../pages/CartPage");
const CheckoutPage = require("../pages/CheckoutPage");

Given(
  "estoy logueado como {string} con clave {string}",
  async function (username, password) {
    this.loginPage = new LoginPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);

    await this.loginPage.navigate();
    await this.loginPage.login(username, password);
  }
);

When("agrego el primer producto al carrito", async function () {
  await this.inventoryPage.addProductToCartByIndex(0);
});

When("voy al carrito de compras", async function () {
  await this.inventoryPage.goToCart();
});

When("procedo al checkout", async function () {
  await this.cartPage.checkout();
});

When(
  "completo el formulario con nombre {string} apellido {string} y código postal {string}",
  async function (firstName, lastName, postalCode) {
    await this.checkoutPage.fillForm(firstName, lastName, postalCode);
    await this.checkoutPage.continueCheckout();
  }
);

When("confirmo la compra", async function () {
  await this.checkoutPage.finish();
});

Then(
  "el contador del carrito debería mostrar {string}",
  async function (expectedCount) {
    const count = await this.inventoryPage.getCartCount();
    expect(count).toBe(expectedCount);
  }
);

Then(
  "debería ver {int} producto(s) en el carrito",
  async function (expectedCount) {
    const count = await this.cartPage.getItemCount();
    expect(count).toBe(expectedCount);
  }
);

Then(
  "debería ver el mensaje de confirmación {string}",
  async function (expectedMessage) {
    const message = await this.checkoutPage.getConfirmationMessage();
    expect(message).toBe(expectedMessage);
  }
);
