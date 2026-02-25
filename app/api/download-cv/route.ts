export async function GET() {
    // We do this to ensure the download file is properly named
    const response = await fetch(
        "https://github.com/pashioya/pauls-cv/raw/main/main.pdf"
    );
    const buffer = await response.arrayBuffer();

    const now = new Date();
    const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

    return new Response(buffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="Paul-Ashioya-CV-${today}.pdf"`,
        },
    });
}
