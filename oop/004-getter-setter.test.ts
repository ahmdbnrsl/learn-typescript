describe('Getter snd Setter', function () {
  class Category {
    _name?: string;
    
    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return 'empety';
      }
    }
    
    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }
  it('Should support in Typescript', function () {
    const category: Category = new Category();
    console.info(category.name);
    
    category.name = "Food";
    console.info(category.name);
    
    category.name = "";
    console.info(category.name)
  });
});