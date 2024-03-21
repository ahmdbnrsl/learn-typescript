"use strict";
describe('Super Constructor', function () {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
    }
    it('should support in typescript', function () {
        const employee = new Employee('beni', 'hiii');
    });
});
