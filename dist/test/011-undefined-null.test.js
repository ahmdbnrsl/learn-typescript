import { helloSay } from '.././src/001-say-hello';
describe('Undefined & null', function () {
    it('should support in null and undefined', function () {
        const name = undefined;
        helloSay(name);
        helloSay(null);
    });
});
