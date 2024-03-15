import { AddFunc } from '.././src/func-interface';

describe('', function () {
  it('', function () {
    
    const tambah: AddFunc = (value: number, value2: number): number => value + value2;
    
    expect(tambah(4, 4)).toBe(8);
    
  });
});