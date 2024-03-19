"use strict";
describe('Properties', function () {
    class Customer {
        constructor(id) {
            this.name = ""; //default value, !mandatory
            this.id = id;
        }
    }
    it('should support in typescript', function () {
        const customer = new Customer(3);
    });
});
