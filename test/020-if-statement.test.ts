describe('If Statement', function () {
  it('should same as javascript', function () {
    const value = 90;
    
    if(value > 80) {
      console.info("good");
    } else if (value > 60) {
      console.log('medium');
    } else {
      console.error('bad');
    }
  });
  it('should support ternary operator', function() {
    const val = 90;
    const say = val > 80 ? 'good' : 'bad';
  });
  it('should support switch statement', function () {
    function hi(name: string): string {
      switch (name) {
        case 'beni':
          return 'hello beni'
          break;
        default:
          return 'lu siapa anjir'
          break;
      }
    }
    expect(hi('beni')).toBe('hello beni');
  })
});