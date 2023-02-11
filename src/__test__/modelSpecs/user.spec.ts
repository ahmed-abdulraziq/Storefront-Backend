import { Index, Show, Create } from "../../models/user";
import { User } from "../../type/user";

const user = {
    first_name: 'ahmed',
    last_name: 'ali',
    password: '0123456789'
};

describe("User Model", () => {
    it("should have an INDEX method", () => {
      expect(Index).toBeDefined();
    });

    it("should have an INDEX method", async () => {
        expect(Index).toBeDefined();
    });

    it("should have a SHOW method", () => {
        expect(Show).toBeDefined();
    });

    it('should return the correct user using show method', async () => {
        const id: number = 2;
        const result: User = await Show(id);

        expect(result.first_name).toEqual('ahmed');
        expect(result.last_name).toEqual('ali');
      });
    
    it("should have a CREATE method", () => {
        expect(Create).toBeDefined();
    });
    
    it('should create a user with auth to true using create method', async () => {
        const result: User = await Create(user);

        expect(result.first_name).toEqual("ahmed");
        expect(result.last_name).toEqual("ali");
      });
});