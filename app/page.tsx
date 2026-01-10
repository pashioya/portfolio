"use client";

import { useEffect, useState } from "react";

import LightPillar from "@/components/LightPillar";
import ShinyText from "@/components/ShinyText";
import { Button } from "@/components/ui/button";
import { VisitorDialog, type VisitorStats } from "@/components/VisitorDialog";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Home() {
    const [stats, setStats] = useState<VisitorStats>({
        total: 0,
        unique: 0,
        live: 0,
    });

    useEffect(() => {
        const recordVisit = async () => {
            try {
                const res = await fetch("/api/visitors", { method: "POST" });
                if (!res.ok) throw new Error("POST failed");
                const data = (await res.json()) as VisitorStats;
                setStats(data);
            } catch (err) {
                console.error("Visitor POST failed, falling back to GET", err);
                try {
                    const res = await fetch("/api/visitors");
                    if (!res.ok) throw new Error("GET failed");
                    const data = (await res.json()) as VisitorStats;
                    setStats(data);
                } catch (err2) {
                    console.error("Visitor GET failed", err2);
                }
            }
        };

        recordVisit();
    }, []);

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-[#05030f] text-slate-100">
            <div className="absolute inset-0">
                <LightPillar
                    topColor="#ff6b6b"
                    bottomColor="#ff1f4b"
                    intensity={0.9}
                    rotationSpeed={0.4}
                    interactive={false}
                    glowAmount={0.0025}
                    pillarWidth={2.6}
                    pillarHeight={0.48}
                    noiseIntensity={0.1}
                    pillarRotation={18}
                    className="h-full w-full"
                />
            </div>
            <VisitorDialog stats={stats} />
            <main className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-12 px-6 py-16 text-center md:px-12">
                <div className="space-y-7">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-200/60 md:text-base">
                        Backend Developer
                    </p>
                    <ShinyText
                        text="Paul Ashioya"
                        speed={2}
                        delay={0}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                        yoyo={false}
                        pauseOnHover={true}
                        className="text-4xl leading-tight md:text-7xl"
                    />
                    <div className="flex items-center justify-center gap-5">
                        <Button
                            asChild
                            variant="ghost"
                            size="icon-lg"
                            className="group rounded-full text-white"
                        >
                            <a
                                href="https://www.linkedin.com/in/paul-ashioya/"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiLinkedin
                                    className="size-6 opacity-80 transition-opacity duration-75 group-hover:opacity-100"
                                    aria-hidden="true"
                                />
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            size="icon-lg"
                            className="group rounded-full text-white"
                        >
                            <a
                                href="https://github.com/pashioya"
                                aria-label="GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiGithub
                                    className="size-6 opacity-80 transition-opacity duration-75 group-hover:opacity-100"
                                    aria-hidden="true"
                                />
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            size="icon-lg"
                            className="group rounded-full text-white"
                        >
                            <a
                                href="https://www.instagram.com/paul.ashioya/"
                                aria-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiInstagram
                                    className="size-6 opacity-80 transition-opacity duration-75 group-hover:opacity-100"
                                    aria-hidden="true"
                                />
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
                    <Button
                        asChild
                        variant="ghost"
                        className="min-w-40 bg-white/15 text-white hover:bg-white/95 hover:text-slate-900"
                    >
                        <a
                            href="https://ap.paul-ashioya.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Academic Pages
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="min-w-40 text-black"
                    >
                        <a
                            href="mailto:john.ashioya@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Contact
                        </a>
                    </Button>
                </div>
            </main>
        </div>
    );
}
