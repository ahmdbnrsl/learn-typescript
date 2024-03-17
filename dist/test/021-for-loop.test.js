"use strict";
describe('For loop', function () {
    it('should support in Typescript', function () {
        const data = ['beni', 'via'];
        for (let i = 0; i < data.length; i++) {
            console.info(data[i]);
        }
    });
    it('should support for of loop', function () {
        const datas = ['beni', 'via'];
        for (const data of datas) {
            console.info(data);
        }
    });
    it('should support for in loop', function () {
        const datas = ['beni', 'via'];
        for (const index in datas) {
            console.info(datas[index]);
        }
    });
    it('should support while & do while loop', function () {
        let num = 0;
        while (num < 10) {
            console.log(num);
            num++;
        }
        do {
            console.info(num);
            num++;
        } while (num < 10);
    });
    it('should support break and continue', function () {
        let count = 0;
        do {
            count++;
            if (count === 10) {
                break;
            }
            if (count % 2 === 0) {
                continue;
            }
            console.info(count);
        } while (true);
    });
});
