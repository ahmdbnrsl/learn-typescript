"use strict";
describe('Static keyword', function () {
    class Hehe {
    }
    Hehe.NAME = "Via Fitriana";
    Hehe.AGE = 19;
    Hehe.HOBBIES = "makeup";
    it('should support in Typescript', function () {
        console.info(Hehe.NAME);
    });
    it('should support static method', function () {
        class Mathjs {
            static sum(...values) {
                let total = 0;
                for (let value of values) {
                    total += value;
                }
                return total;
            }
        }
        console.info(Mathjs.sum(8, 7, 10, 12));
    });
});
