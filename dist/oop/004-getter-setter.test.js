"use strict";
describe('Getter snd Setter', function () {
    class Category {
        get name() {
            if (this._name) {
                return this._name;
            }
            else {
                return 'empety';
            }
        }
        set name(value) {
            if (value !== "") {
                this._name = value;
            }
        }
    }
    it('Should support in Typescript', function () {
        const category = new Category();
        console.info(category.name);
        category.name = "Food";
        console.info(category.name);
        category.name = "";
        console.info(category.name);
    });
});
