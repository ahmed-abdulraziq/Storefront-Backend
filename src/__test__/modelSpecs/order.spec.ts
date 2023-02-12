import { Index, Completed, Create } from "../../models/orders";
import { Create as createUser } from "../../models/user";
import { Create as createProduct } from "../../models/product";
import { Order } from "../../type/order";

const order: Order = {
    product_id: 1,
    quantity: 1,
    user_id: 1,
    status: "completed",
};

describe("order Model", () => {
    beforeAll(async () => {
        await createUser({
            first_name: 'ahmed',
            last_name: 'ali',
            password: '0123456789'
        });

        await createProduct({
            name: 'ahmed',
            price: 2,
            category: 2,
        });
    })
    it("should have a CREATE method", () => {
        expect(Create).toBeDefined();
    });
    
    it('CREATE method should add an order', async () => {
        const result: Order = await Create(order);

        expect(result.user_id).toEqual(1);
        expect(result.status).toEqual("completed");
    });

    it("should have an INDEX method", () => {
      expect(Index).toBeDefined();
    });

    it("should return all orders of user using Orders method", async () => {
        const result: Order[] = await Index(1);

        expect(result[0]).toEqual({ id: 1, product_id: 1, quantity: 1, user_id: 1, status: 'completed' });
    });

    it("should have a COMPLETED method", () => {
        expect(Completed).toBeDefined();
    });
    
    it('should return completed orders of user using Completed method', async () => {
        const result: Order[] = await Completed(1);

        expect(result[0]).toEqual({ id: 1, product_id: 1, quantity: 1, user_id: 1, status: 'completed' });
      });
});