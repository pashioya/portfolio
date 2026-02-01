import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const visits = pgTable("visits", {
    id: serial("id").primaryKey(),
    ip: text("ip").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
        .notNull()
        .defaultNow(),
});
