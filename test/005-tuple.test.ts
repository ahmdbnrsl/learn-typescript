describe('tuple', function () {
  it('should has determined data type and array length', function () {
    const person: readonly [string, string, number] = [
        "via",
        "female",
        19
      ];
    console.info(person[0]);
  });
});