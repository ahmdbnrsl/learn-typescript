export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
}

export type Product = {
  id: ID;
  name: string;
  qty: number;
  description?: string;
  category: Category;
}

//enum
export enum CustomerType {
  REGULAR = 'REGULAR',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM'
}

export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
}