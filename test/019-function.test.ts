import { say, printf, sum, callMe, anu, toUpper } from '.././src/functions';

describe('Functions', function () {
  it('should support in typescript', function () {
    expect(say()).toBe('Hello guest');
    printf('Via');
  });
  it('should support res parameter', function () {
    expect(sum(1,2,3,4,5)).toBe(15);
  });
  it('should support optional parameter', function() {
    expect(say('Via', 'Beni')).toBe('Hello Via Beni');
  });
  it('should support overloading function', function() {
    expect(callMe('beni')).toBe('BENI');
    expect(callMe(9)).toBe(10);
  });
  it('should support callback function', function() {
    expect(anu('beni', toUpper)).toBe('Hello BENI');
    //using anonymous function
    expect(anu('beni', (name: string): string => name.toUpperCase())).toBe('Hello BENI');
  })
});