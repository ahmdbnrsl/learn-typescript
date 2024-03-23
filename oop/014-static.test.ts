describe('Static keyword', function () {
  class Hehe {
    static NAME: string = "Via Fitriana";
    static AGE: number = 19;
    static HOBBIES: string = "makeup";
  }
  it('should support in Typescript', function () {
    console.info(Hehe.NAME);
  });
  it('should support static method', function() {
    class Mathjs {
      static sum(...values: Array<number>): number {
        let total = 0;
        for (let value of values) {
          total += value;
        }
        return total;
      }
    }
    console.info(Mathjs.sum(8, 7, 10, 12))
  })
});