describe('Interface Inheritance', function () {
  interface HasName {
    name: string;
  }
  interface SayHello {
    sayHello(name: string): void;
  }
  
  class Person implements HasName, SayHello {
    name: string;
    
    constructor(name: string) {
      this.name = name;
    }
    
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }
  it('should support in typescript', function () {
    const person: Person = new Person('Via');
    person.sayHello('Beni');
  });
});