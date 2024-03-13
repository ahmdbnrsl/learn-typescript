import { sayHello } from '../src/001-say-hello';
describe('sayHello', function () {
    it('should return Hello Beni', function () {
        expect(sayHello('Beni')).toBe('Hello Beni');
    });
});
