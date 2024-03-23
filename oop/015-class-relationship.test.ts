describe('Relationship class', function () {
  //not recommended 
  class Person {
    constructor(public name: string) {}
  }
  class Customer {
    constructor(public name: string) {}
  }
  it('should support in Typescript', function () {
    const person: Person = new Customer('Via');
  });
});