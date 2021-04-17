import { Prod } from "../interfaces/interfaces";

export class Product {
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
