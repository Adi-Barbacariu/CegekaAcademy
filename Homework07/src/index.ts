const initialData = require("./sources.json");
import { Product } from "./models/Product";
import { Customer } from "./models/Customer";
import { Prod, Order } from "./interfaces/interfaces";

var products: Product[] = [];
var customers: Customer[] = [];
var orders: Order[] = [];

function init() {
  const { items, persons } = initialData;

  items.forEach((item: Prod) => {
    var p = new Product(item);
    products.push(p);
  });

  persons.forEach((person: Prod) => {
    var p = new Customer(person);
    customers.push(p);
  });

  printProducts();

  customers[0].addToCart(products[0], products);
  customers[0].addToCart(products[2], products);
  customers[0].makePurchase(orders);

  printProducts();

  customers[1].saveItem(products[1]);
  customers[1].addToCart(products[1], products);
  customers[1].addToCart(products[1], products);
  customers[1].addToCart(products[5], products);
  customers[1].makePurchase(orders);

  products[1].reffilStock();

  printProducts();
}

function printProducts(): void {
  console.log("Products:");
  products.forEach((current) => {
    current.printAllDetails();
  });
  console.log("-------------------------");
}

init();
