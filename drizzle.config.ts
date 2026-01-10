import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const url = process.env.DATABASE_URL;
if (!url) {
    throw new Error("DATABASE_URL is not set");
}
const ssl = { rejectUnauthorized: true };
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default defineConfig({
    schema: "./db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url,
        ssl,
    },
});
