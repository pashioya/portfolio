"use client";

import { Accordion } from "@/components/ui/accordion";
import { HeroSection } from "@/components/portfolio/hero-section";
import { WorkExperience } from "@/components/portfolio/work-experience";
import { EducationSection } from "@/components/portfolio/education-section";
import { QuickLinks } from "@/components/portfolio/quick-links";
import { SocialFooter } from "@/components/portfolio/social-footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="flex min-h-screen flex-col border border-border px-6 py-8 md:px-12 md:py-10">
                <section className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-start gap-12 py-8 md:py-[25vh] md:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-5">
                        <HeroSection />
                        <Accordion type="multiple" className="w-full max-w-xl">
                            <WorkExperience />
                            <EducationSection />
                        </Accordion>
                    </div>

                    <QuickLinks />
                </section>

                <SocialFooter />
            </main>
        </div>
    );
}
