import db from "../database";
import { Product } from "../type/product";

export const  Index = async(): Promise<Product[]> => {
    try {
        const sql = "SELECT * from products";
        const conn = await db.connect();
        const data = await conn.query(sql);
        conn.release();

        return data.rows;
    } catch (error) {
        return Promise.reject();
    }
}

export const  Show = async(id: number): Promise<Product> => {
    try {
        const sql = "SELECT * from products WHERE id=($1)";
        const conn = await db.connect();
        const data = await conn.query(sql, [id]);
        conn.release();
        
        return data.rows[0];
    } catch (err) {
        return Promise.reject();
    }
}

export const Create = async (product: Product): Promise<Product> => {
    try {
        const sql ="INSERT INTO products (name, price, category) VALUES($1, $2, $3) RETURNING *";
        const conn = await db.connect();
        const data = await conn.query(sql, [product.name, product.price, product.category]);
        conn.release();

        return data.rows[0];
    } catch (err) {
        return Promise.reject();
    }
}