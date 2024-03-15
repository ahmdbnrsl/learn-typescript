import { Customer, CustomerType } from '.././src/type';

describe('Enum', function () {
  it('should support in Typescript', function () {
    
    const customer: Customer = {
      id: 1,
      name: "via",
      type: CustomerType.PLATINUM
    }
    
  });
});