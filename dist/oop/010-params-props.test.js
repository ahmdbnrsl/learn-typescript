"use strict";
describe('Parameter properties', function () {
    class Via {
        constructor(name = "", age = 0, hobbies) {
            this.name = name;
            this.age = age;
            this.hobbies = hobbies;
        }
    }
    it('should support in typescript', function () {
        const via = new Via('via', 8, 'make up');
        //console.info(via.age);
        //console.info(via.hobbies);
        console.info(via.name);
    });
});
