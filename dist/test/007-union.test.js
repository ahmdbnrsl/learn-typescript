"use strict";
describe('union type', function () {
    it('should support in Typescript', function () {
        let sample = "via";
        sample = 19;
        sample = false;
        console.info(sample);
        function proccess(value) {
            if (typeof value === 'string') {
                return value.toUpperCase();
            }
            else if (typeof value === 'number') {
                return value + 5;
            }
            else {
                return !value;
            }
        }
        /*const result: number | string | boolean = proccess('via');
        console.info(result);*/
        expect(proccess('via')).toBe('VIA');
        expect(proccess(19)).toBe(24);
        expect(proccess(true)).toBe(false);
    });
});
