describe('Inheritance', function () {
  //parent class
  class Employee {
    name: string
    constructor(name: string) {
      this.name = name;
    }
  }
  //child class
  class Manager extends Employee {
    
  }
  class Director extends Manager {
    
  }
  it('should support in typescript', function () {
    const employee: Employee = new Employee('Beni');
    console.info(employee.name);
    
    const manager: Manager = new Manager('Beni');
    console.info(manager.name);
  });
});