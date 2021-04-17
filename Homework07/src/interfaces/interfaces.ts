import { Product } from "../models/Product";

export interface Prod {
  id: string;
  name: string;
  price: number;
  qty: number;
}

export interface Person {
  id: string;
  name: string;
}

export interface Order {
  customerId: string;
  products: Product[];
  total: number;
}
