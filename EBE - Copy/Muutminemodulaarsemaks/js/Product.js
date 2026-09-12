export class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  describe() {
    return `${this.name}, ${this.price}€, ${this.category}`;
  }

  static discountedPrice(price, discount) {
    return (price * (1 - discount / 100)).toFixed(2);
  }
}
