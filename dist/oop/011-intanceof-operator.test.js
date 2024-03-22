"use strict";
describe('Instanceof operator', function () {
    it('should support in typescript', function () {
        class Via {
        }
        class Beni {
        }
        const via = new Via();
        const beni = new Beni();
        expect(via instanceof Via).toBe(true);
        expect(via instanceof Beni).toBe(false);
        expect(beni instanceof Beni).toBe(true);
        expect(beni instanceof Via).toBe(false);
    });
});
