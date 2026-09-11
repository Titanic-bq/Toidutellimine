import express from "express";
import session from "express-session";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = 3000;
const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const frontendRoot = path.join(projectRoot, "Muutminemodulaarsemaks");
const productsPath = path.join(projectRoot, "products.json");
const favoritesPath = path.join(projectRoot, "favorites.json");

app.use(express.json());
app.use(
  session({
    secret: "taonar-development-secret",
    resave: false,
    saveUninitialized: true,
  }),
);

app.get("/api/session", (req, res) => {
  if (!req.session.customerId) {
    req.session.customerId = 1;
  }

  res.json({ customerId: req.session.customerId });
});

app.get("/api/products", (_req, res) => {
  res.json(JSON.parse(fs.readFileSync(productsPath, "utf8")));
});

app.get("/api/customers/:customerId/favorites", (req, res) => {
  const favorites = JSON.parse(fs.readFileSync(favoritesPath, "utf8"));
  res.json(favorites[req.params.customerId] ?? []);
});

app.post("/api/customers/:customerId/favorites", (req, res) => {
  const favorites = JSON.parse(fs.readFileSync(favoritesPath, "utf8"));
  const customerFavorites = favorites[req.params.customerId] ?? [];

  if (!customerFavorites.some((product) => product.id === req.body.id)) {
    customerFavorites.push(req.body);
  }

  favorites[req.params.customerId] = customerFavorites;
  fs.writeFileSync(favoritesPath, JSON.stringify(favorites, null, 2) + "\n");
  res.status(201).json(req.body);
});

app.delete("/api/customers/:customerId/favorites/:productId", (req, res) => {
  const favorites = JSON.parse(fs.readFileSync(favoritesPath, "utf8"));
  const customerFavorites = favorites[req.params.customerId] ?? [];
  favorites[req.params.customerId] = customerFavorites.filter(
    (product) => product.id !== Number(req.params.productId),
  );

  fs.writeFileSync(favoritesPath, JSON.stringify(favorites, null, 2) + "\n");
  res.sendStatus(204);
});

app.use(express.static(frontendRoot));

app.listen(port, () => {
  console.log(`Taonar runs at http://localhost:${port}`);
});
