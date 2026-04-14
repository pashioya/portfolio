import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import crypto from "crypto";
import { z } from "zod";
import { storePendingRequest } from "@/lib/cv-requests";
import { env } from "@/lib/env";

const resend = new Resend(env.RESEND_API_KEY);

const schema = z.object({
    email: z.email(),
});

export async function POST(request: NextRequest) {
    const body = await request.json().catch(() => null);
    const result = schema.safeParse({
        email: body?.email?.trim().toLowerCase(),
    });

    if (!result.success) {
        return NextResponse.json(
            { error: "Invalid email address." },
            { status: 400 }
        );
    }

    const { email } = result.data;

    const token = crypto.randomBytes(32).toString("hex");
    storePendingRequest(token, email);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
    const approvalUrl = `${baseUrl}/api/approve-cv/${token}`;

    await resend.emails.send({
        from: env.RESEND_FROM_EMAIL,
        to: env.OWNER_EMAIL,
        subject: `CV request from ${email}`,
        html: `
            <p><strong>${email}</strong> has requested your CV.</p>
            <p>Click the link below to approve and send them the PDF:</p>
            <p><a href="${approvalUrl}">${approvalUrl}</a></p>
            <p><em>This link is single-use and will expire when the server restarts.</em></p>
        `,
    });

    return NextResponse.json({ success: true });
}
