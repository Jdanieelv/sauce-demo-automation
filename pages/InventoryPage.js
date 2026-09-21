class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = ".title";
    this.inventoryItems = ".inventory_item";
    this.cartBadge = ".shopping_cart_badge";
    this.cartLink = ".shopping_cart_link";
  }

  async getTitle() {
    return await this.page.textContent(this.title);
  }

  async addProductToCartByIndex(index) {
    const buttons = this.page.locator(".inventory_item .btn_inventory");
    await buttons.nth(index).click();
  }

  async getCartCount() {
    const badge = this.page.locator(this.cartBadge);
    if (await badge.isVisible()) {
      return await badge.textContent();
    }
    return "0";
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = InventoryPage;
