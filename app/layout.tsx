import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const zeroXProto = localFont({
    src: "./fonts/0xProto-Regular.woff2",
    variable: "--font-0xproto",
    weight: "400",
    display: "swap",
});

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
                className={`${zeroXProto.variable} ${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden overscroll-none bg-[#f7f2eb] text-[#1f1a15] antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
