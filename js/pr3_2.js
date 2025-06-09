"use strict";

// Клас для товару
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  info() {
    return `${this.name} - ${this.price} грн`;
  }
}

// Клас для замовлення
class Order {
  constructor(customer) {
    this.customer = customer;
    this.items = [];
  }

  addProduct(product) {
    this.items.push(product);
  }

  total() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getSummary() {
    const itemList = this.items.map(p => p.info()).join('\n');
    return `Замовник: ${this.customer}\nТовари:\n${itemList}\nЗагальна сума: ${this.total()} грн`;
  }
}

document.getElementById("startOrder").addEventListener("click", () => {
  const customer = prompt("Введіть ім’я замовника:");
  if (!customer) return;

  const order = new Order(customer);
  let adding = true;

  while (adding) {
    const name = prompt("Назва товару:");
    let price = parseFloat(prompt("Ціна товару:"));

    while (isNaN(price) || price <= 0) {
      price = parseFloat(prompt("Некоректна ціна. Введіть ще раз:"));
    }

    const product = new Product(name, price);
    order.addProduct(product);

    adding = confirm("Додати ще товар?");
  }

  const resultDiv = document.getElementById("orderResult");
  resultDiv.textContent = order.getSummary();

  alert("Замовлення оформлено!\n\n" + order.getSummary());
});

