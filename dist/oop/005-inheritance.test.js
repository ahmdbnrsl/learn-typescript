"use strict";
describe('Inheritance', function () {
    //parent class
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    //child class
    class Manager extends Employee {
    }
    class Director extends Manager {
    }
    it('should support in typescript', function () {
        const employee = new Employee('Beni');
        console.info(employee.name);
        const manager = new Manager('Beni');
        console.info(manager.name);
    });
});
