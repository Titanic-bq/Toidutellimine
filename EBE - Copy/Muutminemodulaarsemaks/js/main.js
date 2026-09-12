import { Product } from "./Product.js";
import { Cart } from "./Cart.js";
import { Customer } from "./Customer.js";
import { navigate, setupRouter, handleRoute } from "./router.js";

const cart = new Cart();
const customer = new Customer("Alice");

export function updateHeader() {
  document.querySelector("#cart-count").textContent = cart.totalItems;
}
export async function initApp() {
  try {
    const sessionResponse = await fetch("/api/session");
    const sessionData = await sessionResponse.json();

    customer.id = sessionData.customerId;

    const response = await fetch("/api/products");
    const data = await response.json();

    const products = data.map(
      (product) =>
        new Product(product.id, product.name, product.price, product.category),
    );

    await customer.loadFavorites();

    setupRouter({
      products,
      cart,
      customer,
      updateHeader,
    });

    updateHeader();
    handleRoute();
  } catch (error) {
    console.error("Andmete laadimine ebaõnnestus:", error);
  }
}

window.addEventListener("hashchange", handleRoute);

document.querySelector("#logo").addEventListener("click", initApp);

document.querySelector("#cart-link").addEventListener("click", () => {
  navigate("cart");
});

document.querySelector("#favorites-link").addEventListener("click", () => {
  navigate("favorites");
});

initApp();
