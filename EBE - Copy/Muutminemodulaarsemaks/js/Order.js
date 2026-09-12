export class Order {
  constructor(cart) {
    this.orderDate = new Date();
    this.cart = cart;
  }

  printOrder() {
    console.log("Tellimuse kuupäev:", this.orderDate.toLocaleString());

    for (const item of this.cart.products) {
      console.log(
        `${item.product.name} x ${item.quantity} - ` +
          `${(item.product.price * item.quantity).toFixed(2)} €`,
      );
    }

    console.log("Kogusumma:", this.cart.calculateTotal().toFixed(2) + " €");
  }
}
