describe('Object', function () {
  it('should support in Typescript', function () {
    const data: {
      name: string,
      age: number | string,
      hobbies?: string
    } = {
      name: "via",
      age: 19
    };
    
    console.info(data);
  });
});