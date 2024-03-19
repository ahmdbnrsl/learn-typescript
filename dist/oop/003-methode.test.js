"use strict";
describe('', function () {
    class Customer {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        sayHi(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should support methode', function () {
        const customer = new Customer(1, 'Via');
        expect(customer.sayHi('beni')).toBe('Hello beni, my name is Via');
    });
});
