describe('Properties', function () {
  class Customer {
    readonly id: number;
    name: string = ""; //default value, !mandatory
    age?: number;
      
    constructor(id: number) {
      this.id = id;
    }
  }
  it('should support in typescript', function () {
    const customer: Customer = new Customer(3);
  });
});