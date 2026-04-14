import Database from "better-sqlite3";
import path from "path";
import fs from "fs";
import { env } from "./env";
export interface CvRequest {
    email: string;
    createdAt: number;
}

function openDb(): Database.Database {
    const dbDir = env.DB_DIR ?? path.join(process.cwd(), "data");
    fs.mkdirSync(dbDir, { recursive: true });

    const db = new Database(path.join(dbDir, "cv-requests.db"));
    db.pragma("journal_mode = WAL");
    db.exec(`
        CREATE TABLE IF NOT EXISTS pending_requests (
            token     TEXT PRIMARY KEY,
            email     TEXT NOT NULL,
            created_at INTEGER NOT NULL
        )
    `);
    return db;
}

// Single shared connection for the lifetime of the Node process
// No plans on running this serverless so performance benefits are worth it
const db = openDb();

export function storePendingRequest(token: string, email: string): void {
    db.prepare(
        "INSERT OR REPLACE INTO pending_requests (token, email, created_at) VALUES (?, ?, ?)"
    ).run(token, email, Date.now());
}

export function consumePendingRequest(token: string): CvRequest | null {
    const row = db
        .prepare(
            "SELECT email, created_at FROM pending_requests WHERE token = ?"
        )
        .get(token) as { email: string; created_at: number } | undefined;

    if (!row) return null;

    db.prepare("DELETE FROM pending_requests WHERE token = ?").run(token);
    return { email: row.email, createdAt: row.created_at };
}

export function restorePendingRequest(token: string, request: CvRequest): void {
    db.prepare(
        "INSERT OR IGNORE INTO pending_requests (token, email, created_at) VALUES (?, ?, ?)"
    ).run(token, request.email, request.createdAt);
}
