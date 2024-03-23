import { MathUtil } from '.././src/namespace';
describe('Namespace', function () {
    it('should support in Typescript', function () {
        console.info(MathUtil.PI);
        console.info(MathUtil.sum(9, 9, 7, 8, 7));
    });
});
