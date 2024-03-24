describe('Generics', function () {
  /*MULTIPLE DATA TYPE*/
  class Data<Type> {
    value: Type;
    constructor(value: Type) {
      this.value = value;
    }
    get(): Type {
      return this.value;
    }
    
    set(value: Type) {
      this.value = value;
    }
  }
  it('should support multiple data type', function () {
    const str = new Data<string>('Via Fitriana');
    console.info(str.value);
    str.value = "Beni Rusli";
    //str.value = true; // error 
    const num = new Data<number>(19);
    console.info(num.value);
    num.value = 90;
    //num.value = "Via"; /error
  });
  /*FUNCTION GENERIC*/
  function say<Type>(value: Type): Type {
    return value;
  }
  it('should support function generic', async() => {
    const result: string = say<string>("Via Fitriana");
    expect(result).toBe("Via Fitriana");
    const ressNum: number = say<number>(19);
    expect(ressNum).toBe(19);
  });
  /*MULTIPLE GENERIC TYPE*/
  class Entity<N, A> {
    constructor(public name: N, public age: A) {}
  }
  class Entitys<A, B, R> {
    constructor(public via: A, public fitriana: B, public beni: R) {}
  }
  it('should support multiple generic type', async() => {
    const entity = new Entity<string, number>('Via Fitriana', 19);
    expect(entity.name).toBe('Via Fitriana');
    expect(entity.age).toBe(19);
    const entitys = new Entitys<string, number, boolean>('Via Fitriana', 19, true);
    expect(entitys.via).toBe('Via Fitriana');
    expect(entitys.fitriana).toBe(19);
    expect(entitys.beni).toBe(true);
  });
  /*OPTIONAL GENERIC TYPE*/
  it('should support optional generic type', async() => {
    const entity = new Entity('Via Fitriana', 19);
    expect(entity.name).toBe('Via Fitriana');
    expect(entity.age).toBe(19);
  });
  /*CREATE SIMPLE GENERIC*/
  class SimpleGeneric<Type = string> {
    private value?: Type;
    
    setValue(value: Type) {
      this.value = value;
    }
    
    getValue(): Type | undefined {
      return this.value;
    }
  }
  it('should support create simple generic', async() => {
    const simple = new SimpleGeneric();
    simple.setValue('Via Fitriana');
    //simple.setValue(100) Here is error because type of generic was declared as string
    expect(simple.getValue()!.toUpperCase()).toBe('Via Fitriana');
    /*GETTER SETTER REVISITED*/
    class Personal<Name, Age> {
      constructor(private name: Name, private age: Age) {}
      
      set _name(name: Name) {
        this.name = name;
      }
      set _age(age: Age) {
        this.age = age;
      }
      
      get _name(): Name {
        return this.name;
      }
      get _age(): Age {
        return this.age;
      }
    }
    const personal = new Personal<string, number>('Via Fitriana', 19);
    personal._name;
    personal._name = 'beni';
    
  });
  /*CONSTRAINT*/  
  interface Employee {
    id: string;
    name: string;
  }
  interface Manager extends Employee {
    totalEmployee: number;
  }
  interface VP extends Manager {
    totalManager: number;
  }
  class EmployeeData<T extends Employee> {
    constructor(public employee: T) {}
  }
  it('should support constraint', async() => {
    const data1 = new EmployeeData<Employee>({
      id: "7282882",
      name: "Via Fitriana"
    });
    const data2 = new EmployeeData<Manager>({
      id: "28272728",
      name: "Via Fitriana",
      totalEmployee: 90
    });
  })
});