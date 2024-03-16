export interface Seller {
  id: number;
  name: string;
  address?: string;
  readonly siup: string; //readonly properties
}
//extending interface

export interface Employee {
  id: string;
  name: string;
  division: string;
}

export interface Manager extends Employee {
  numberOffEmployee: number;
}

//method in interface

export interface Person extends Seller {
  age: number;
  sayHello(name: string): string;
}

//intersection type

export interface HasName {
  name: string
}
export interface HasId {
  id: string;
}

export type Domain = HasId & HasName;