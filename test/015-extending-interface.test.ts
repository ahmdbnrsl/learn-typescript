import { Employee, Manager } from '.././src/interface';

describe('Extending interface', function () {
  it('should support in typescript', function () {
    const employee: Employee = {
      id: "7272818",
      name: "via",
      division: "Brand Ambassador"
    }
    
    const manager: Manager = {
      id: "7272818",
      name: "via",
      division: "Brand Ambassador",
      numberOffEmployee: 72727
    }
  });
});