class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = ".cart_item";
    this.checkoutButton = "#checkout";
  }

  async getItemCount() {
    await this.page.waitForSelector(this.cartItems, { timeout: 5000 });
    return await this.page.locator(this.cartItems).count();
  }

  async getItemNames() {
    return await this.page.locator(".cart_item .inventory_item_name").allTextContents();
  }

  async checkout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = CartPage;
