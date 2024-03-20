describe('method', function () {
  class Customer {
    readonly id: number;
    name: string;
    age?: number;
    
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
    
    sayHi(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }
  it('should support methode', function () {
    const customer: Customer = new Customer(1, 'Via');
    expect(customer.sayHi('beni')).toBe('Hello beni, my name is Via');
  });
});