"use strict";
describe('Error Handling', function () {
    class ValidationError extends Error {
        constructor(message) {
            super(message);
            this.message = message;
        }
    }
    function doubleIt(value) {
        if (value < 0) {
            throw new ValidationError("Value cannot be less than 0");
        }
        return value * 2;
    }
    it('should support in Typescript', function () {
        try {
            const result = doubleIt(-1);
            console.info(result);
        }
        catch (error) {
            if (error instanceof ValidationError) {
                console.error(error.message);
            }
        }
    });
});
