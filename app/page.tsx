"use client";

import { HeroSection } from "@/components/portfolio/hero-section";
import { QuickLinks } from "@/components/portfolio/quick-links";
import { SocialFooter } from "@/components/portfolio/social-footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="flex min-h-screen flex-col border border-border px-6 py-8 md:px-12 md:py-10">
                <div className="flex flex-1 items-center justify-center pb-16">
                    <section className="grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
                        <HeroSection />
                        <QuickLinks />
                    </section>
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-6 py-4 md:px-12 md:py-6">
                    <SocialFooter />
                </div>
            </main>
        </div>
    );
}
