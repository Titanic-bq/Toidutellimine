export function displayProductDetailView(product, cart) {
  const app = document.querySelector("#app");
  app.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `Hind: ${product.price.toFixed(2)} €`;

  const category = document.createElement("p");
  category.textContent = `Kategooria: ${product.category}`;

  const description = document.createElement("p");
  description.textContent = product.describe();

  const button = document.createElement("button");
  button.textContent = "Lisa ostukorvi";

  button.addEventListener("click", () => {
    cart.addProduct(product);
  });

  app.append(title, description, price, category, button);
}
