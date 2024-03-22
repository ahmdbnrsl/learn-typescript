describe('Instanceof operator', function () {
  it('should support in typescript', function () {
    class Via {}
    class Beni {}
    
    const via: Via = new Via();
    const beni: Beni = new Beni();
    
    expect(via instanceof Via).toBe(true);
    expect(via instanceof Beni).toBe(false);
    
    expect(beni instanceof Beni).toBe(true);
    expect(beni instanceof Via).toBe(false);
  });
});