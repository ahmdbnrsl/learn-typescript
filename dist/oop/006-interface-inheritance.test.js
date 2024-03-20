"use strict";
describe('Interface Inheritance', function () {
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it('should support in typescript', function () {
        const person = new Person('Via');
        person.sayHello('Beni');
    });
});
