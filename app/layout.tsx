import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio of Paul Ashioya",
    description: "Portfolio of Paul Ashioya, Backend Developer",
    manifest: "/manifest.webmanifest",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Paul Ashioya",
    },
};

export const viewport: Viewport = {
    themeColor: "#05030f",
    viewportFit: "cover",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#05030f] min-h-screen overflow-hidden overscroll-none`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
