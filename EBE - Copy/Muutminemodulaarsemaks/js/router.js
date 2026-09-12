import { displayFavoritesView } from "../views/favoritesView.js";
import { displayProductDetailView } from "../views/productDetailView.js";
import { displayCartView } from "../views/cartView.js";
import { displayAllProductsView } from "../views/allProductView.js";

let appData = {};

export function setupRouter(data) {
  appData = data;
}

export const navigate = (view, param) => {
  if (view === "allProducts") {
    location.hash = "#products";
  } else if (view === "productDetail") {
    location.hash = `#product/${param.id}`;
  } else if (view === "cart") {
    location.hash = "#cart";
  } else if (view === "favorites") {
    location.hash = "#favorites";
  }
};

export function handleRoute() {
  const hash = location.hash;

  if (hash === "#products" || hash === "") {
    displayAllProductsView(
      appData.products,
      appData.cart,
      appData.customer,
      appData.updateHeader,
    );
    return;
  }

  if (hash === "#cart") {
    displayCartView(appData.cart, appData.customer);
    return;
  }

  if (hash === "#favorites") {
    displayFavoritesView(appData.customer.favorites, appData.cart);
    return;
  }

  if (hash.startsWith("#product/")) {
    const productId = Number(hash.split("/")[1]);
    const product = appData.products.find((item) => item.id === productId);

    if (product) {
      displayProductDetailView(product, appData.cart);
    }
  }
}
