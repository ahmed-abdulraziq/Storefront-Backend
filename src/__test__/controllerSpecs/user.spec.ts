import supertest from "supertest";
import server from "../../server";

const request = supertest(server);

const user = {
    first_name: 'ahmed',
    last_name: 'ali',
    password: '0123456789'
};

describe("User controller", () => {
    it("should return success for CREATE user", async () => {
      const response = await request.post("/api/user").send(user);
  
      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy();
    });
  
    it("should return success for READ all users", async () => {
      const response = await request.get("/api/user")
  
      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy();
    });
  
    it("should return success for READ user by id", async () => {
      const response = await request.get("/api/user/1")
  
      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy();
    });
});