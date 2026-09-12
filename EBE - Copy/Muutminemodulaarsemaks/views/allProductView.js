import { navigate } from "../js/router.js";

export function displayAllProductsView(products, cart, customer, updateHeader) {
  const app = document.querySelector("#app");
  app.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Tööriistad";
  app.appendChild(title);

  for (const product of products) {
    const card = document.createElement("div");
    card.className = "product-card";

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `${product.price.toFixed(2)} €`;

    const cartButton = document.createElement("button");
    cartButton.textContent = "Lisa ostukorvi";

    cartButton.addEventListener("click", (event) => {
      event.stopPropagation();
      cart.addProduct(product);
      updateHeader();
    });

    const favoriteButton = document.createElement("button");

    const updateFavoriteButton = () => {
      favoriteButton.textContent = customer.isFavorite(product)
        ? "♥ Eemalda lemmikutest"
        : "♡ Lisa lemmikutesse";
    };

    updateFavoriteButton();

    favoriteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      customer.toggleFavorite(product);
      updateFavoriteButton();
    });

    card.addEventListener("click", () => {
      navigate("productDetail", product);
    });

    card.append(name, price, cartButton, favoriteButton);

    app.appendChild(card);
  }
}
