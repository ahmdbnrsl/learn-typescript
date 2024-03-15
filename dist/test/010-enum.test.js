import { CustomerType } from '.././src/type';
describe('Enum', function () {
    it('should support in Typescript', function () {
        const customer = {
            id: 1,
            name: "via",
            type: CustomerType.PLATINUM
        };
    });
});
