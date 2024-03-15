import { StringArray, StringDictionary } from '.././src/indexable-interface';

describe('Indexable interface', function () {
  it('should support in Typescript', function () {
    
    const names: StringArray = ["viaaa", "via"];
    const namess: StringDictionary = {
      "name": "via"
    }
    console.info(namess);
    
  });
});