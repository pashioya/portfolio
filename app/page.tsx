"use client";

import { HeroSection } from "@/components/portfolio/hero-section";
import { QuickLinks } from "@/components/portfolio/quick-links";
import { SocialFooter } from "@/components/portfolio/social-footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="relative flex min-h-screen flex-col items-center justify-center border border-border px-6 py-8 md:px-12 md:py-10">
                <section className="grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-5">
                        <HeroSection />
                    </div>

                    <QuickLinks />
                </section>

                <div className="absolute bottom-0 left-0 right-0 px-6 py-4 md:px-12 md:py-6">
                    <SocialFooter />
                </div>
            </main>
        </div>
    );
}
