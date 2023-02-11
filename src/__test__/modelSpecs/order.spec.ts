import { Index, Completed } from "../../models/orders";
import { Order } from "../../type/order";

describe("order Model", () => {
    it("should have an INDEX method", () => {
      expect(Index).toBeDefined();
    });

    it("should return all orders of user using Orders method", async () => {
        const result: Order[] = await Index(2);

        expect(result).toEqual([]);
    });

    it("should have a COMPLETED method", () => {
        expect(Completed).toBeDefined();
    });
    
    it('should return completed orders of user using Completed method', async () => {
        const result: Order[] = await Completed(2);

        expect(result).toEqual([]);
      });
});