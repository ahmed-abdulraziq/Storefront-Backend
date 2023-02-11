import db from "../database";
import { User } from "../type/user";

export const Index = async (): Promise<User[]> => {
  try {
    const sql = "SELECT * from users";
    const conn = await db.connect();
    const data = await conn.query(sql);
    conn.release();

    return data.rows;
  } catch (error) {
    return Promise.reject();
  }
};

export const Show = async (id: number): Promise<User> => {
  try {
    const sql = "SELECT * from users WHERE id=($1)";
    const conn = await db.connect();
    const data = await conn.query(sql, [id]);
    conn.release();

    return data.rows[0];
  } catch (err) {
    return Promise.reject();
  }
};

export const Create = async (user: {
  first_name: string;
  last_name: string;
  password: string;
}): Promise<User> => {
  try {
    const sql =
      "INSERT INTO users (first_name, last_name, password) VALUES($1, $2, $3) RETURNING *";
    const conn = await db.connect();
    const data = await conn.query(sql, [
      user.first_name,
      user.last_name,
      user.password,
    ]);
    conn.release();

    return data.rows[0];
  } catch (err) {
    return Promise.reject();
  }
};
