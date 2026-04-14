export const runtime = "nodejs";

import { NextRequest } from "next/server";
import { Resend } from "resend";
import {
    consumePendingRequest,
    restorePendingRequest,
} from "@/lib/cv-requests";
import { getEnv } from "@/lib/env";

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ token: string }> }
) {
    const env = getEnv();
    const { token } = await params;
    const pending = consumePendingRequest(token);

    if (!pending) {
        return new Response("Invalid or already-used approval link.", {
            status: 404,
        });
    }
    // Guard against PAT leakage to non-GitHub hosts.
    const cvUrl = new URL(env.CV_GITHUB_URL);
    if (cvUrl.hostname !== "api.github.com") {
        console.error(
            "CV_GITHUB_URL points to non-GitHub host:",
            cvUrl.hostname
        );
        restorePendingRequest(token, pending);
        return new Response("Server configuration error.", { status: 500 });
    }

    const githubResponse = await fetch(cvUrl.toString(), {
        headers: {
            Authorization: `Bearer ${env.CV_GITHUB_PAT}`,
            Accept: "application/vnd.github.raw+json",
            "User-Agent": "pauls-portfolio",
        },
    });

    if (!githubResponse.ok) {
        console.error(
            "GitHub fetch failed:",
            githubResponse.status,
            await githubResponse.text()
        );
        restorePendingRequest(token, pending);
        return new Response("Failed to fetch CV from repository.", {
            status: 502,
        });
    }

    const pdfBuffer = await githubResponse.arrayBuffer();
    const pdfBase64 = Buffer.from(pdfBuffer).toString("base64");

    const today = new Date().toISOString().split("T")[0];
    const filename = `Paul-Ashioya-CV-${today}.pdf`;

    const resend = new Resend(env.RESEND_API_KEY);
    let sendError: unknown;
    try {
        const { error } = await resend.emails.send({
            from: env.RESEND_FROM_EMAIL,
            to: pending.email,
            subject: "Paul Ashioya's CV",
            html: `
                <p>Hi,</p>
                <p>Thanks for your interest! Latest version of my CV is attached to this email.</p>
                <p>Feel free to reach out if you have any questions.</p>
                <br/>
                <p>— Paul Ashioya</p>
            `,
            attachments: [{ filename, content: pdfBase64 }],
        });
        sendError = error ?? null;
    } catch (err) {
        sendError = err;
    }

    if (sendError) {
        console.error("Resend failed, restoring token:", sendError);
        restorePendingRequest(token, pending);
        return new Response(
            "Failed to send email. Please try approving again.",
            { status: 502 }
        );
    }

    return new Response(
        `<html><body style="font-family:sans-serif;padding:2rem">
            <h2>CV sent!</h2>
            <p>The CV has been emailed to <strong>${pending.email}</strong>.</p>
        </body></html>`,
        { headers: { "Content-Type": "text/html" } }
    );
}
