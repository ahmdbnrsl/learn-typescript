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
  })
});