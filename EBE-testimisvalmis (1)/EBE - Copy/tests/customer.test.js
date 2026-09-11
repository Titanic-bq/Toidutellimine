import test from "node:test";
import assert from "node:assert/strict";
import { Customer } from "../Muutminemodulaarsemaks/js/Customer.js";

test("Customer.isFavorite leiab lemmiktoote", () => {
  const customer = new Customer("Alice");
  const product = { id: 7, name: "Kruvikeeraja", price: 8 };

  customer.favorites.push(product);

  assert.equal(customer.isFavorite(product), true);
});

test("Customer.isFavorite tagastab false, kui toode pole lemmik", () => {
  const customer = new Customer("Alice");
  const product = { id: 7, name: "Kruvikeeraja", price: 8 };

  assert.equal(customer.isFavorite(product), false);
});

test("Customer.placeOrder lisab tellimuse tellimuste ajalukku", () => {
  const customer = new Customer("Alice");
  const cart = {
    products: [],
    calculateTotal() {
      return 0;
    },
  };

  customer.placeOrder(cart);

  assert.equal(customer.orderHistory.length, 1);
  assert.equal(customer.orderHistory[0].cart, cart);
});
