export class Cart {
  constructor() {
    this.products = [];

    const savedCart = localStorage.getItem("taonar-cart");

    if (savedCart) {
      this.products = JSON.parse(savedCart);
    }
  }

  save() {
    localStorage.setItem("taonar-cart", JSON.stringify(this.products));
  }

  addProduct(product, quantity = 1) {
    const item = this.products.find((item) => item.product.id === product.id);

    if (item) {
      item.quantity += quantity;
    } else {
      this.products.push({ product, quantity });
    }

    this.save();
  }

  updateProductQuantity(index, delta) {
    if (!this.products[index]) return;

    this.products[index].quantity += delta;

    if (this.products[index].quantity <= 0) {
      this.removeProduct(index);
      return;
    }

    this.save();
  }

  removeProduct(index) {
    this.products.splice(index, 1);
    this.save();
  }

  calculateTotal() {
    return this.products.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
  }

  get totalItems() {
    return this.products.reduce((sum, item) => sum + item.quantity, 0);
  }

  clear() {
    this.products = [];
    this.save();
  }
}
