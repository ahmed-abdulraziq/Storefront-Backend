import supertest from "supertest";
import { Create as createUser } from "../../models/user";
import { Create as createProduct } from "../../models/product";
import server from "../../server";

const request = supertest(server);

describe("order controller", () => {
    beforeAll(async () => {
        createUser({
            first_name: 'ahmed',
            last_name: 'ali',
            password: '0123456789'
        });
        createProduct({
            name: 'ahmed',
            price: 2,
            category: 2,
        });
    })
    it("should return success for READ orders by user id", async () => {
      const response = await request.get("/api/orders/1").set('access_token', 'eyJhbGciOiJIUzI1NiJ9.MQ.CnKOwBExSeWUzpGc6-Php9Z1vNpHkf5UTR2lb1WxVcc');
  
      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy();
    });
  
    it("should return success for READ orders completed by user id", async () => {
      const response = await request.get("/api/orders/completed/1").set('access_token', 'eyJhbGciOiJIUzI1NiJ9.MQ.CnKOwBExSeWUzpGc6-Php9Z1vNpHkf5UTR2lb1WxVcc');
  
      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy();
    });
});