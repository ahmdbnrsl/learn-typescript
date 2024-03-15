describe('Interface', function () {
    it('Should support in typescript', function () {
        const seller = {
            id: 8,
            name: "Via",
            siup: "727267818"
        };
        //seller.siup = "ajsjsj" not permited because this property is readonly 
        console.info(seller);
    });
});
export {};
