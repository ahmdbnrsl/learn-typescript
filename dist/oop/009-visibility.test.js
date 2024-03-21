"use strict";
describe('Visibility', function () {
    class Counter {
        constructor() {
            //private counter: number = 0;
            this.counter = 0;
        }
        increment() {
            this.counter++;
        }
        getCounter() {
            return this.counter;
        }
    }
    class DoubleCounter extends Counter {
        increment() {
            this.counter += 2;
        }
    }
    it('should support in Typescript', function () {
        const counter = new Counter();
        //counter.counter /*is cannot access on external class*/
        counter.getCounter();
    });
    it('should support protected method', function () {
        const doubleCounter = new DoubleCounter();
        doubleCounter.increment();
    });
});
