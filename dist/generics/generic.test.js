"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe('Generics', function () {
    /*MULTIPLE DATA TYPE*/
    class Data {
        constructor(value) {
            this.value = value;
        }
        get() {
            return this.value;
        }
        set(value) {
            this.value = value;
        }
    }
    it('should support multiple data type', function () {
        const str = new Data('Via Fitriana');
        console.info(str.value);
        str.value = "Beni Rusli";
        //str.value = true; // error 
        const num = new Data(19);
        console.info(num.value);
        num.value = 90;
        //num.value = "Via"; /error
    });
    /*FUNCTION GENERIC*/
    function say(value) {
        return value;
    }
    it('should support function generic', () => __awaiter(this, void 0, void 0, function* () {
        const result = say("Via Fitriana");
        expect(result).toBe("Via Fitriana");
        const ressNum = say(19);
        expect(ressNum).toBe(19);
    }));
    /*MULTIPLE GENERIC TYPE*/
    class Entity {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Entitys {
        constructor(via, fitriana, beni) {
            this.via = via;
            this.fitriana = fitriana;
            this.beni = beni;
        }
    }
    it('should support multiple generic type', () => __awaiter(this, void 0, void 0, function* () {
        const entity = new Entity('Via Fitriana', 19);
        expect(entity.name).toBe('Via Fitriana');
        expect(entity.age).toBe(19);
        const entitys = new Entitys('Via Fitriana', 19, true);
        expect(entitys.via).toBe('Via Fitriana');
        expect(entitys.fitriana).toBe(19);
        expect(entitys.beni).toBe(true);
    }));
    /*OPTIONAL GENERIC TYPE*/
    it('should support optional generic type', () => __awaiter(this, void 0, void 0, function* () {
        const entity = new Entity('Via Fitriana', 19);
        expect(entity.name).toBe('Via Fitriana');
        expect(entity.age).toBe(19);
    }));
    /*CREATE SIMPLE GENERIC*/
    class SimpleGeneric {
        setValue(value) {
            this.value = value;
        }
        getValue() {
            return this.value;
        }
    }
    it('should support create simple generic', () => __awaiter(this, void 0, void 0, function* () {
        const simple = new SimpleGeneric();
        simple.setValue('Via Fitriana');
        //simple.setValue(100) Here is error because type of generic was declared as string
        expect(simple.getValue().toUpperCase()).toBe('Via Fitriana');
        /*GETTER SETTER REVISITED*/
        class Personal {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            set _name(name) {
                this.name = name;
            }
            set _age(age) {
                this.age = age;
            }
            get _name() {
                return this.name;
            }
            get _age() {
                return this.age;
            }
        }
        const personal = new Personal('Via Fitriana', 19);
        personal._name;
        personal._name = 'beni';
    }));
    class EmployeeData {
        constructor(employee) {
            this.employee = employee;
        }
    }
    it('should support constraint', () => __awaiter(this, void 0, void 0, function* () {
        const data1 = new EmployeeData({
            id: "7282882",
            name: "Via Fitriana"
        });
        const data2 = new EmployeeData({
            id: "28272728",
            name: "Via Fitriana",
            totalEmployee: 90
        });
    }));
    /*ARRAY*/
    it('should support array', () => __awaiter(this, void 0, void 0, function* () {
        const arrr = new Array();
        arrr.push("Via");
        arrr.push("Beni");
        expect(arrr[0]).toBe("Via");
    }));
    /*SET*/
    it('should support set', () => __awaiter(this, void 0, void 0, function* () {
        const sset = new Set();
        sset.add("Beni");
        sset.add("Via");
        sset.add("Via");
        expect(sset.size).toBe(2);
        expect(sset.has("Beni")).toBe(true);
    }));
    /*map*/
    it('should support map', () => __awaiter(this, void 0, void 0, function* () {
        const map = new Map();
        map.set("Via", true);
        map.set("Beni", false);
        expect(map.get("Via")).toBe(true);
    }));
    /*PROMISE*/
    function fetchData(value) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (value === "Via") {
                        resolve("Hello Sayang");
                    }
                    else {
                        reject("apaan sihlu");
                    }
                }, 2000);
            });
        });
    }
    it('should support promise', () => __awaiter(this, void 0, void 0, function* () {
        const result = yield fetchData("Via");
        expect(result.toUpperCase()).toBe("HELLO SAYANG");
        try {
            yield fetchData("Beni");
        }
        catch (error) {
            expect(error).toBe("apaan sihlu");
        }
    }));
});
