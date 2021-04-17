import { Product } from "./Product";
import { Person, Order } from "../interfaces/interfaces";

export class Customer {
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

  public addToCart(product: Product, products: Product[]): void {
    products.forEach((current: Product) => {
      if (current.getId() == product.getId()) {
        if (!product.isAvailable()) {
          console.log("Item is out of stock.");
          return;
        }

        this.cart.push(current);

        product.decrementQty();

        product.incrementLikeability();
      }
    });
  }

  public saveItem(product: Product): void {
    this.favorites.forEach((current) => {
      if (current.getId() == product.getId()) {
        console.log(`Product is already in your favorites list.`);
        return;
      }
    });

    this.favorites.push(product);

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

  public makePurchase(orders: Order[]): void {
    var order: Order = {
      customerId: this.id,
      products: this.cart,
      total: this.calcTotalPrice(),
    };

    if (order.total == 0) {
      console.log("Cart is empty.");
      return;
    }

    orders.push(order);

    this.cart = [];

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
