import { Index, Show, Create } from "../../models/product";
import { Product } from "../../type/product";

const product = {
    name: 'ahmed',
    price: 8,
    product: 4
};

describe("Product Model", () => {
    it("should have an INDEX method", () => {
      expect(Index).toBeDefined();
    });

    it("should have an INDEX method", async () => {
        expect(Index).toBeDefined();
    });

    it("should have a SHOW method", () => {
        expect(Show).toBeDefined();
    });

    it('should return the correct Product using show method', async () => {
        const id: number = 2;
        const result: Product = await Show(id);

        expect(result.id).toEqual(id);
        expect(result.name).toEqual('ahmed');
        expect(result.price).toEqual(2);
      });
    
    it("should have a CREATE method", () => {
        expect(Create).toBeDefined();
    });
    
    it('should create a Product with auth to true using create method', async () => {
        const result: Product = await Create(product);

        expect(result.name).toEqual("ahmed");
        expect(result.price).toEqual(8);
      });
});