import { Seller } from '.././src/interface';

describe('Type assertions', function () {
  it('should support in Typescript', function () {
    const person: any = {
      name: "beni",
      age: 18
    }
    
    const person2: Seller = person as Seller;
  });
});