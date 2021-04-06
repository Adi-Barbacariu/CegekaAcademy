import { Console } from "node:console";

const data = require("./sources.json");

interface Prod {
  id: string;
  name: string;
  price: number;
  qty: number;
}

interface Person {
  id: string;
  name: string;
}

interface Order {
  customerId: string;
  products: Product[];
  total: number;
}

class Product {
  private id: string;
  private name: string;
  private price: number;
  private qty: number;
  private discount: number;
  private likeability: number;

  constructor(prod: Prod) {
    this.id = prod.id;
    this.name = prod.name;
    this.price = prod.price;
    this.qty = prod.qty;
    this.discount = 0;
    this.likeability = 0;
  }

  public printDetails(): void {
    console.log(
      `${this.name}| price: ${this.price}$| discount: ${this.discount}$`
    );
  }

  public printAllDetails(): void {
    console.log(
      `${this.name}| price: ${this.price}$| stock: ${this.qty}| likeability: ${this.likeability}| discount: ${this.discount}$`
    );
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price - this.discount;
  }

  public getQty(): number {
    return this.qty;
  }

  public decrementQty(): void {
    if (this.qty > 0) this.qty--;
  }

  public isAvailable(): boolean {
    return this.qty > 0 ? true : false;
  }

  public addDiscount(value: number): void {
    this.discount += value;
  }

  public incrementLikeability(): void {
    this.likeability++;

    if (this.likeability > 3) {
      this.discount += 30;
    } else if (this.likeability > 5) {
      this.discount += 20;
    } else if (this.likeability > 10) {
      this.discount += 50;
    }
  }

  public reffilStock() {
    if (!this.isAvailable()) {
      this.qty = 10;
      console.log(`Reffiling stock for ${this.name}`);
      console.log(`-----------------------------`);
    }
  }
}

class Customer {
  private id: string;
  private name: string;
  private favorites: Product[];
  private cart: Product[];

  constructor(person: Person) {
    this.id = person.id;
    this.name = person.name;
    this.favorites = [];
    this.cart = [];
  }

  public getName(): string {
    return this.name;
  }

  public addToCart(product: Product): void {
    products.forEach((current) => {
      if (current.getId() == product.getId()) {
        if (!product.isAvailable()) {
          console.log("Item is out of stock.");
          return;
        }

        // add product to bought items list of customer
        this.cart.push(current);

        // decrease available quantity of the product
        product.decrementQty();

        // increase likeability of the product
        product.incrementLikeability();
      }
    });
  }

  public saveItem(product: Product): void {
    // check if the product is already in the list
    this.favorites.forEach((current) => {
      if (current.getId() == product.getId()) {
        console.log(`Product is already in your favorites list.`);

        return;
      }
    });

    // if not, then add it
    this.favorites.push(product);

    // offer a discount
    if (product.getPrice() > 1000 && product.getQty() > 0) {
      let discount = 100;

      console.log(
        `${
          this.name
        } saved '${product.getName()}' and got a ${discount}$ discount.`
      );

      product.addDiscount(discount);
    }
  }

  public makePurchase(): void {
    // create new order
    var order: Order = {
      customerId: this.id,
      products: this.cart,
      total: this.calcTotalPrice(),
    };

    if (order.total == 0) {
      console.log("Cart is empty.");
      return;
    }

    // add order to order list
    orders.push(order);

    // clear cart
    this.cart = [];

    // display order details
    console.log(`${this.name} purchased the following items:`);

    order.products.forEach((current) => {
      current.printDetails();
    });

    console.log(`Total: ${order.total}$`);
    console.log(`---------------------`);
  }

  private calcTotalPrice(): number {
    var total = 0;

    this.cart.forEach((current) => {
      total += current.getPrice();
    });

    return total;
  }
}

var products: Product[] = [];
var customers: Customer[] = [];
var orders: Order[] = [];

function init() {
  const { items, persons } = data;

  items.forEach((item: Prod) => {
    var p = new Product(item);

    products.push(p);
  });

  persons.forEach((person: Prod) => {
    var p = new Customer(person);

    customers.push(p);
  });

  printProducts();

  customers[0].addToCart(products[0]);
  customers[0].addToCart(products[2]);
  customers[0].makePurchase();

  printProducts();

  customers[1].saveItem(products[1]);
  customers[1].addToCart(products[1]);
  customers[1].addToCart(products[1]);
  customers[1].addToCart(products[5]);
  customers[1].makePurchase();

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
