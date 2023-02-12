import supertest from "supertest";
import server from "../../server";

const request = supertest(server);

const product = {
    name: "ahmed",
    price: 2,
    category: 2,
};

describe("product controller", () => {
    it("should return success for CREATE product", async () => {
      const response = await request.post("/api/product").send(product).set('access_token', 'eyJhbGciOiJIUzI1NiJ9.MQ.CnKOwBExSeWUzpGc6-Php9Z1vNpHkf5UTR2lb1WxVcc');
  
      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy();
    });
  
    it("should return success for READ all products", async () => {
      const response = await request.get("/api/product")
  
      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy();
    });
  
    it("should return success for READ product by id", async () => {
      const response = await request.get("/api/product/1")
  
      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy();
    });
});