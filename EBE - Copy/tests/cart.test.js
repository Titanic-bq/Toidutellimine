import test, { beforeEach } from "node:test";
import assert from "node:assert/strict";
import { Cart } from "../Muutminemodulaarsemaks/js/Cart.js";

function createLocalStorageMock() {
  const storage = new Map();

  return {
    getItem(key) {
      return storage.has(key) ? storage.get(key) : null;
    },
    setItem(key, value) {
      storage.set(key, String(value));
    },
    removeItem(key) {
      storage.delete(key);
    },
    clear() {
      storage.clear();
    },
  };
}

globalThis.localStorage = createLocalStorageMock();

const hammer = { id: 1, name: "Haamer", price: 10 };
const drill = { id: 2, name: "Trexell", price: 25 };

beforeEach(() => {
  localStorage.clear();
});

test("Cart.addProduct lisab uue toote ja koguse", () => {
  const cart = new Cart();

  cart.addProduct(hammer, 2);

  assert.equal(cart.products.length, 1);
  assert.equal(cart.products[0].quantity, 2);
  assert.equal(cart.totalItems, 2);
});

test("Cart.addProduct suurendab olemasoleva toote kogust", () => {
  const cart = new Cart();

  cart.addProduct(hammer, 1);
  cart.addProduct(hammer, 3);

  assert.equal(cart.products.length, 1);
  assert.equal(cart.products[0].quantity, 4);
});

test("Cart.calculateTotal arvutab ostukorvi kogusumma", () => {
  const cart = new Cart();

  cart.addProduct(hammer, 2);
  cart.addProduct(drill, 1);

  assert.equal(cart.calculateTotal(), 45);
});

test("Cart.updateProductQuantity eemaldab toote, kui kogus jõuab nulli", () => {
  const cart = new Cart();

  cart.addProduct(hammer, 1);
  cart.updateProductQuantity(0, -1);

  assert.equal(cart.products.length, 0);
  assert.equal(cart.totalItems, 0);
});

test("Cart.clear tühjendab ostukorvi", () => {
  const cart = new Cart();

  cart.addProduct(hammer, 2);
  cart.clear();

  assert.equal(cart.products.length, 0);
  assert.equal(cart.calculateTotal(), 0);
});
