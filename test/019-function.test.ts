import { say, printf } from '.././src/functions';

describe('Functions', function () {
  it('should support in typescript', function () {
    expect(say('Via')).toBe('Hello Via');
    printf('Via');
  });
});