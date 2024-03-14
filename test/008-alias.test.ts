import { Category, Product } from '.././src/type';

describe('alias', function () {
  it('should support in Typescript', function () {
    const category: Category = {
      id: '2821829',
      name: 'sepatu'
    }
    const product: Product = {
      id: '272828',
      name: 'spatu jordan',
      qty: 9,
      description: 'helooo',
      category: category
    }
    
    console.info(category);
    console.info(product);
  });
});