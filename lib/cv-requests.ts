import "server-only";
import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

export interface CvRequest {
    email: string;
    createdAt: number;
}

const TOKEN_TTL_MS = 48 * 60 * 60 * 1000; // 48 hours

function openDb(): Database.Database {
    const dbDir = process.env.DB_DIR ?? path.join(process.cwd(), "data");
    fs.mkdirSync(dbDir, { recursive: true });

    const db = new Database(path.join(dbDir, "cv-requests.db"));
    db.pragma("journal_mode = WAL");
    db.exec(`
        CREATE TABLE IF NOT EXISTS pending_requests (
            token      TEXT PRIMARY KEY,
            email      TEXT NOT NULL,
            created_at INTEGER NOT NULL
        )
    `);
    return db;
}

// Single shared connection for the lifetime of the Node process
const db = openDb();

export function storePendingRequest(token: string, email: string): void {
    // Purge expired tokens on every write to keep the table clean
    db.prepare("DELETE FROM pending_requests WHERE created_at < ?").run(
        Date.now() - TOKEN_TTL_MS
    );

    db.prepare(
        "INSERT OR REPLACE INTO pending_requests (token, email, created_at) VALUES (?, ?, ?)"
    ).run(token, email, Date.now());
}

export function consumePendingRequest(token: string): CvRequest | null {
    // delete the row and return it in a single statement so concurrent requests cannot both claim the same token
    const row = db
        .prepare(
            `DELETE FROM pending_requests
             WHERE token = ? AND created_at >= ?
             RETURNING email, created_at`
        )
        .get(token, Date.now() - TOKEN_TTL_MS) as
        | { email: string; created_at: number }
        | undefined;

    if (!row) return null;
    return { email: row.email, createdAt: row.created_at };
}

export function restorePendingRequest(token: string, request: CvRequest): void {
    db.prepare(
        "INSERT OR IGNORE INTO pending_requests (token, email, created_at) VALUES (?, ?, ?)"
    ).run(token, request.email, request.createdAt);
}
