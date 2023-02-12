import db from "../database";
import { Order } from "../type/order";

export const Create = async (order: Order): Promise<Order> => {
    try {
      const sql =
        "INSERT INTO orders (product_id, quantity, user_id, status) VALUES($1, $2, $3, $4) RETURNING *";
      const conn = await db.connect();
      const data = await conn.query(sql, [
            order.product_id,
            order.quantity,
            order.user_id,
            order.status,
      ]);
      conn.release();
  
        return data.rows[0];
    } catch (err) {
        console.log(err)
        return Promise.reject();
    }
  };

export const Index = async (user_id: number): Promise<Order[]> => {
    try {
        const sql ="SELECT * from orders WHERE user_id = $1";
        const conn = await db.connect();
        const data = await conn.query(sql, [user_id]);
        conn.release();

        return data.rows;
    } catch (err) {
        return Promise.reject();
    }
}
export const Completed = async (user_id: number): Promise<Order[]> => {
    try {
        const sql ="SELECT * from orders WHERE user_id = $1 AND status = $2";
        const conn = await db.connect();
        const data = await conn.query(sql, [user_id, 'completed']);
        conn.release();

        return data.rows;
    } catch (err) {
        return Promise.reject();
    }
}