"use strict";
describe('Methode Overriding', function () {
    class Employer {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, may name is ${this.name}`);
        }
    }
    class Manager extends Employer {
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}, i am a manger`);
        }
    }
    it('should support in Typescript', function () {
        const manager = new Manager('beni');
        manager.sayHello('Via');
    });
    it('Should support super methode', function () {
        class Mang extends Employer {
            sayHello(name) {
                super.sayHello(name);
                console.info('And i am a manager');
            }
        }
        const mang = new Mang('Beni');
        mang.sayHello('Via');
    });
});
