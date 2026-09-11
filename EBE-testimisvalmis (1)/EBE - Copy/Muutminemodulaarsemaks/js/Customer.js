import { Order } from "./Order.js";

export class Customer {
  constructor(name, id = 1) {
    this.name = name;
    this.id = id;
    this.orderHistory = [];
    this.favorites = [];
  }
  async loadFavorites() {
    const response = await fetch(`/api/customers/${this.id}/favorites`);

    this.favorites = await response.json();
  }
  placeOrder(cart) {
    this.orderHistory.push(new Order(cart));
  }

  async toggleFavorite(product) {
    const isFavorite = this.favorites.some((item) => item.id === product.id);

    if (isFavorite) {
      await fetch(`/api/customers/${this.id}/favorites/${product.id}`, {
        method: "DELETE",
      });

      this.favorites = this.favorites.filter((item) => item.id !== product.id);
    } else {
      await fetch(`/api/customers/${this.id}/favorites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      this.favorites.push(product);
    }
  }

  isFavorite(product) {
    return this.favorites.some((item) => item.id === product.id);
  }

  printOrderHistory() {
    console.log("Kliendi nimi:", this.name);

    for (const order of this.orderHistory) {
      console.log("Kuupäev:", order.orderDate.toLocaleString());

      console.log("Kogusumma:", order.cart.calculateTotal().toFixed(2) + " €");
    }
  }
}
