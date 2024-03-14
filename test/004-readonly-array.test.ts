describe('Read only array', function () {
  it('should not be change', function () {
    const name: ReadonlyArray<string> = ["beni", "via"];
    //name[0] = "bena"; is error not permited only reading
    console.info(name);
  });
});