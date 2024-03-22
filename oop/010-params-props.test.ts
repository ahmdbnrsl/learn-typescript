describe('Parameter properties', function () {
  class Via {
    constructor(
      public name: string = "",
      protected readonly age: number = 0,
      private hobbies?: string
    ) {}
  }
  it('should support in typescript', function () {
    const via: Via = new Via('via', 8, 'make up');
    //console.info(via.age);
    //console.info(via.hobbies);
    console.info(via.name);
  });
});