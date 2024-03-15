export interface Seller {
  id: number;
  name: string;
  address?: string;
  readonly siup: string; //readonly properties
}