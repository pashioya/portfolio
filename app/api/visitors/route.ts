import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";

import { getDb } from "@/lib/db";
import { visits } from "@/db/schema";

const LIVE_WINDOW_MS = 5 * 60 * 1000;

async function getStats() {
    const db = getDb();
    const [totalRow] = await db
        .select({ count: sql<number>`count(*)` })
        .from(visits);

    const [uniqueRow] = await db
        .select({ count: sql<number>`count(distinct ${visits.ip})` })
        .from(visits);

    const liveSince = new Date(Date.now() - LIVE_WINDOW_MS);
    const [liveRow] = await db
        .select({ count: sql<number>`count(*)` })
        .from(visits)
        .where(sql`${visits.createdAt} >= ${liveSince}`);

    return {
        total: Number(totalRow?.count ?? 0),
        unique: Number(uniqueRow?.count ?? 0),
        live: Number(liveRow?.count ?? 0),
    };
}

function getIp(request: Request) {
    const xff = request.headers.get("x-forwarded-for");
    if (xff) return xff.split(",")[0]?.trim();
    return request.headers.get("x-real-ip") || "unknown";
}

export async function GET() {
    try {
        const db = getDb();
        const stats = await getStats();
        return NextResponse.json(stats, { status: 200 });
    } catch (error) {
        console.error("Visitors GET failed", error);
        return NextResponse.json(
            { error: "Failed to load stats" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const db = getDb();
        const ip = getIp(request);

        await db.insert(visits).values({ ip });
        const stats = await getStats();

        return NextResponse.json(stats, { status: 201 });
    } catch (error) {
        console.error("Visitors POST failed", error);
        return NextResponse.json(
            { error: "Failed to record visit" },
            { status: 500 }
        );
    }
}
