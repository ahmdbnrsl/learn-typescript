import { Person } from '.././src/interface';

describe('Function in interface', function () {
  it('should support in Typescript', function () {
    const person: Person = {
      id: 1929,
      name: "via",
      siup: "7272828",
      age: 29,
      sayHello: (name: string): string => {
        return `Hello ${name}`;
      }
    }
  });
});