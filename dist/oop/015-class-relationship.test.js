"use strict";
describe('Relationship class', function () {
    //not recommended 
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Customer {
        constructor(name) {
            this.name = name;
        }
    }
    it('should support in Typescript', function () {
        const person = new Customer('Via');
    });
});
