describe('Abtract Class', function () {
  abstract class Customer {
    readonly id: number;
    abstract name: string;
    
    constructor(id: number) {
      this.id = id;
    }
    
    abstract say(name: string): void;
  }
  
  class Regular extends Customer {
    name: string;
    
    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }
    
    say(name: string): void {
      console.info(`Hello ${name}, My name is ${this.name}`);
    }
  }
  it('should support in Typescript', function () {
    /*Cannot create an instance of an abstract class.*/
    //const customer: Customer = new Customer(2);
    const customer: Regular = new Regular(2, 'Via');
    customer.say('Beni');
  });
});