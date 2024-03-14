describe('any data type', function () {
  it('should support in Typescript', function () {
    const person: any = {
      id: 1,
      name: "beni",
      age: 18
    };
    
    person.id = 3;
    person.name = "via";
    console.info(person);
  });
});