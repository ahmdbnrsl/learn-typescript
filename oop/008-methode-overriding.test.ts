describe('Methode Overriding', function () {
  class Employer {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, may name is ${this.name}`);
    }
  }
  class Manager extends Employer {
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}, i am a manger`);
    }
  }
  it('should support in Typescript', function () {
    const manager: Manager = new Manager('beni');
    manager.sayHello('Via');
  });
  it('Should support super methode', function() {
    class Mang extends Employer {
      sayHello(name: string): void {
        super.sayHello(name);
        console.info('And i am a manager');
      }
    }
    
    const mang: Mang = new Mang('Beni');
    mang.sayHello('Via');
  });
});