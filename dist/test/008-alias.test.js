describe('alias', function () {
    it('should support in Typescript', function () {
        const category = {
            id: '2821829',
            name: 'sepatu'
        };
        const product = {
            id: '272828',
            name: 'spatu jordan',
            qty: 9,
            description: 'helooo',
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
