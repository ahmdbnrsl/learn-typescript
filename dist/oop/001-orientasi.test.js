"use strict";
describe('class', function () {
    class Customer {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
    }
    it('should can create class', function () {
        //const customer: Customer = new Customer();
    });
    it('should support constructor', function () {
        //const customer: Customer = new Customer();
    });
    it('should support properties', function () {
        const customer = new Customer(1, 'Via');
        console.info(customer.id);
    });
});
