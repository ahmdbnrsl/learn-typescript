"use strict";
describe('Abtract Class', function () {
    class Customer {
        constructor(id) {
            this.id = id;
        }
    }
    class Regular extends Customer {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
        say(name) {
            console.info(`Hello ${name}, My name is ${this.name}`);
        }
    }
    it('should support in Typescript', function () {
        /*Cannot create an instance of an abstract class.*/
        //const customer: Customer = new Customer(2);
        const customer = new Regular(2, 'Via');
        customer.say('Beni');
    });
});
