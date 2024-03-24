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
});
