import test from "node:test";
import assert from "node:assert/strict";
import { Product } from "../Muutminemodulaarsemaks/js/Product.js";

test("Product.describe tagastab toote kirjelduse", () => {
  const product = new Product(1, "Haamer", 12.5, "Käsitööriistad");

  assert.equal(product.describe(), "Haamer, 12.5€, Käsitööriistad");
});

test("Product.discountedPrice arvutab allahindlusega hinna", () => {
  assert.equal(Product.discountedPrice(100, 20), "80.00");
});

test("Product.discountedPrice ümardab tulemuse kahe komakohani", () => {
  assert.equal(Product.discountedPrice(49.99, 15), "42.49");
});
