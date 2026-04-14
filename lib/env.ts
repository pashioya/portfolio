const required = [
    "RESEND_API_KEY",
    "RESEND_FROM_EMAIL",
    "OWNER_EMAIL",
    "CV_GITHUB_PAT",
    "CV_GITHUB_URL",
] as const;

type RequiredKey = (typeof required)[number];

function loadEnv(): Record<RequiredKey, string> & { DB_DIR?: string } {
    const missing = required.filter((k) => !process.env[k]);
    if (missing.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missing.join(", ")}`
        );
    }
    return {
        ...(Object.fromEntries(
            required.map((k) => [k, process.env[k] as string])
        ) as Record<RequiredKey, string>),
        DB_DIR: process.env.DB_DIR,
    };
}

export const env = loadEnv();
