import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
const ssl = { rejectUnauthorized: false };

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
}

const pool = new Pool({ connectionString, ssl });

export const db = drizzle(pool);
export type DbClient = typeof db;
