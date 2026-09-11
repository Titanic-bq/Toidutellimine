export function displayCartView(cart, customer) {
  const app = document.querySelector("#app");
  app.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "Ostukorv";
  app.appendChild(title);

  const VAT = 0.24;

  for (let i = 0; i < cart.products.length; i++) {
    const item = cart.products[i];

    const row = document.createElement("div");
    row.className = "cart-item";

    const name = document.createElement("span");
    name.textContent = item.product.name;

    const quantity = document.createElement("span");
    quantity.textContent = ` Kogus: ${item.quantity} `;

    const minus = document.createElement("button");
    minus.textContent = "-";

    minus.addEventListener("click", () => {
      cart.updateProductQuantity(i, -1);
      displayCartView(cart, customer);
    });

    const plus = document.createElement("button");
    plus.textContent = "+";

    plus.addEventListener("click", () => {
      cart.updateProductQuantity(i, 1);
      displayCartView(cart, customer);
    });

    const remove = document.createElement("button");
    remove.textContent = "Eemalda";

    remove.addEventListener("click", () => {
      cart.removeProduct(i);
      displayCartView(cart, customer);
    });

    const price = document.createElement("span");

    const total = item.product.price * item.quantity;
    const vat = total * VAT;
    const finalPrice = total + vat;

    price.textContent =
      ` Hind KM-ta: ${total.toFixed(2)} €` +
      ` | KM: ${vat.toFixed(2)} €` +
      ` | Kokku: ${finalPrice.toFixed(2)} €`;

    row.append(name, minus, quantity, plus, price, remove);

    app.appendChild(row);
  }

  const total = cart.calculateTotal();
  const vat = total * VAT;
  const finalTotal = total + vat;

  const summary = document.createElement("h3");

  summary.textContent =
    `Kokku KM-ta: ${total.toFixed(2)} € | ` +
    `KM: ${vat.toFixed(2)} € | ` +
    `Lõpphind: ${finalTotal.toFixed(2)} €`;

  app.appendChild(summary);

  const buyButton = document.createElement("button");
  buyButton.textContent = "Osta";

  buyButton.addEventListener("click", () => {
    if (cart.products.length === 0) return;

    customer.placeOrder(cart);
    cart.clear();

    alert("Tellimus on kinnitatud!");
    displayCartView(cart, customer);
  });

  const clearButton = document.createElement("button");
  clearButton.textContent = "Tühista ostukorv";

  clearButton.addEventListener("click", () => {
    cart.clear();
    displayCartView(cart, customer);
  });

  app.append(buyButton, clearButton);
}
