import db from "../database";
import { Order } from "../type/order";
import { OrderProduct } from "../type/orderProduct";

export const Create = async ({ user_id, status }: Order): Promise<Order> => {
  try {
    const sql =
      "INSERT INTO orders (user_id, status) VALUES($1, $2) RETURNING *";
    const conn = await db.connect();
    const data = await conn.query(sql, [user_id, status]);
    conn.release();

    return data.rows[0];
  } catch (err) {
    return Promise.reject();
  }
};

export const CreateOrderProduct = async (
  orderProduct: OrderProduct
): Promise<OrderProduct> => {
  try {
    const sql =
      "INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *";
    const conn = await db.connect();
    const result = await conn.query(sql, [
        orderProduct.product_id,
        orderProduct.order_id,
        orderProduct.quantity,
    ]);

    conn.release();

    return result.rows[0];
  } catch (err) {
    return Promise.reject();
  }
};

export const Index = async (user_id: number): Promise<Order[]> => {
  try {
    const sql = "SELECT * from orders WHERE user_id = $1";
    const conn = await db.connect();
    const data = await conn.query(sql, [user_id]);
    conn.release();

    return data.rows;
  } catch (err) {
    return Promise.reject();
  }
};
export const Completed = async (user_id: number): Promise<Order[]> => {
  try {
    const sql = "SELECT * from orders WHERE user_id = $1 AND status = $2";
    const conn = await db.connect();
    const data = await conn.query(sql, [user_id, "completed"]);
    conn.release();

    return data.rows;
  } catch (err) {
    return Promise.reject();
  }
};
