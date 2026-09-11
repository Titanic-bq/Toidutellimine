export function displayFavoritesView(favorites, cart) {
  const app = document.querySelector("#app");
  app.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Lemmikud";
  app.appendChild(title);

  for (const product of favorites) {
    const item = document.createElement("div");

    const name = document.createElement("p");
    name.textContent = `${product.name} - ${product.price.toFixed(2)} €`;

    const button = document.createElement("button");
    button.textContent = "Lisa ostukorvi";

    button.addEventListener("click", () => {
      cart.addProduct(product);
    });

    item.append(name, button);
    app.appendChild(item);
  }
}
