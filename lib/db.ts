import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const ssl = { rejectUnauthorized: false };

let dbInstance: ReturnType<typeof drizzle> | null = null;

export function getDb() {
    if (dbInstance) return dbInstance;
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        throw new Error("DATABASE_URL is not set");
    }
    const pool = new Pool({ connectionString, ssl });
    dbInstance = drizzle(pool);
    return dbInstance;
}

export type DbClient = ReturnType<typeof getDb>;
