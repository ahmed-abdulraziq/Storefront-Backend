import db from "../database";
import { Order } from "../type/order";

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