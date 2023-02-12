import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.ENV === "dev"? process.env.DATABASE_DEV: process.env.DATABASE_TEST,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORT as string),
  max: 4,
});

pool.on("error", (err: Error) => console.log(err.message));

export default pool;

