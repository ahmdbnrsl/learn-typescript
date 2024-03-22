describe('Polymhorphism', function () {
  class Employee {
    constructor(
      public name: string,
      protected readonly age: number
    ) {}
  }
  
  class Manager extends Employee {}
  class VicePresident extends Manager {}
  it('should support in Typescript', function () {
    let employee: Employee = new Employee('Via', 19);
    console.info(employee);
    
    employee = new Manager('Via', 19);
    console.info(employee)
  });
  it('should support polymorphism method', function() {
    function sayHello(employee: Employee): void {
      console.info(`Hello ${employee.name}`);
    }
    
    sayHello(new Employee('Via', 19));
    sayHello(new Manager('Beni', 20));
    sayHello(new VicePresident('Viaaaa', 19));
  });
  it('should support cast type', function() {
    interface SayHello {
      (employee: Employee): void;
    }
    const sayHello: SayHello = (employee: Employee) => {
      if(employee instanceof VicePresident) {
        const vp = employee as VicePresident;
        console.info('Helo Vice president' + vp.name);
      } else if (employee instanceof Manager) {
        const manager = employee as Manager;
        console.info('Hello manager ' + manager.name);
      } else {
        console.info('Hello employee '+ employee.name);
      }
    }
    
    sayHello(new Employee('Via', 19));
    sayHello(new Manager('Beni', 18));
    sayHello(new VicePresident('Fitriana', 19));
  })
});