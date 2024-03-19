
describe('class', function () {
  class Customer {
    readonly id: number; //readonly
    name: string; //mandatory
    age?: number; //optional
    
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }
  it('should can create class', function () {
    //const customer: Customer = new Customer();
  });
  it('should support constructor', function() {
    //const customer: Customer = new Customer();
  });
  it('should support properties', function() {
    const customer: Customer = new Customer(1, 'Via');
    console.info(customer.id);
  });
});
