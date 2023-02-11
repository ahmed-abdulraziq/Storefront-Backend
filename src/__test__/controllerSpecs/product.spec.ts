import supertest from "supertest";
import server from "../../server";

const request = supertest(server);

const product = {
    name: "name",
    price: 4,
    category: 4,
};

describe("product controller", () => {
    it("should return success for CREATE product", async () => {
      const response = await request.post("/api/product").send(product);
  
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