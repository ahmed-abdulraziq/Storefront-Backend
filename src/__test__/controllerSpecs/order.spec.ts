import supertest from "supertest";
import server from "../../server";

const request = supertest(server);

describe("order controller", () => {
    it("should return success for READ orders by user id", async () => {
      const response = await request.get("/api/order/1");
  
      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy();
    });
  
    it("should return success for READ orders completed by user id", async () => {
      const response = await request.get("/api/order/completed/1");
  
      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy();
    });
});