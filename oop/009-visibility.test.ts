describe('Visibility', function () {
  class Counter {
    //private counter: number = 0;
    protected counter: number = 0;
      
    public increment(): void {
      this.counter++;
    }
      
    public getCounter(): number {
      return this.counter;
    }
  }
  class DoubleCounter extends Counter {
    public increment() {
      this.counter += 2;
    }
  }
  it('should support in Typescript', function () {
    const counter: Counter = new Counter();
    //counter.counter /*is cannot access on external class*/
    counter.getCounter();
  });
  it('should support protected method', function() {
    const doubleCounter: DoubleCounter = new DoubleCounter();
    doubleCounter.increment();
  })
});