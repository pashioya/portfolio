"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, FolderOpen, SquareUserRound } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { PiPaperPlaneBold } from "react-icons/pi";
import { SiBluesky, SiCalendly, SiGithub, SiLinkedin } from "react-icons/si";

export default function Home() {
    const today = new Date().toISOString().slice(0, 10);

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100">
            <main className="flex min-h-screen flex-col border border-zinc-800/90 px-6 py-8 md:px-12 md:py-10">
                <section className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-12 py-8 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-5">
                        <Badge className="bg-amber-200 px-2.5 py-1 text-zinc-900 hover:bg-amber-200">
                            Hello 👋🏾
                        </Badge>
                        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                            I&apos;m Paul Ashioya
                        </h1>
                        <p className="max-w-xl text-sm leading-7 text-zinc-300 md:text-base">
                            I work across the stack to build purposeful and
                            functional experiences. I&apos;m from Nairobi, Kenya
                            and currently work as a Backend Engineer at
                            Optimile.
                        </p>
                        <Button
                            asChild
                            className="mt-2 bg-amber-200 text-zinc-900 hover:bg-white"
                        >
                            <a href="/api/download-cv">
                                <Download className="mr-2 size-4" />
                                Download CV
                            </a>
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:justify-self-end">
                        <Button
                            asChild
                            variant="outline"
                            className="h-32 w-full min-w-32 flex-col gap-3 border-zinc-600 bg-transparent text-zinc-100 hover:border-white hover:bg-white hover:text-zinc-900"
                        >
                            <a
                                href="https://github.com/pashioya"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FolderOpen className="size-6" />
                                <span>My projects</span>
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="h-32 w-full min-w-32 flex-col gap-3 border-zinc-600 bg-transparent text-zinc-100 hover:border-white hover:bg-white hover:text-zinc-900"
                        >
                            <a
                                href="https://www.linkedin.com/in/paul-ashioya/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SquareUserRound className="size-6" />
                                <span>About me</span>
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="h-32 w-full min-w-32 flex-col gap-3 border-zinc-600 bg-transparent text-zinc-100 hover:border-white hover:bg-white hover:text-zinc-900"
                        >
                            <a
                                href="https://ap.paul-ashioya.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <PiPaperPlaneBold className="size-6" />
                                <span>Publications</span>
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="h-32 w-full min-w-32 flex-col gap-3 border-zinc-600 bg-transparent text-zinc-100 hover:border-white hover:bg-white hover:text-zinc-900"
                        >
                            <a
                                href="https://memos.marnix13.com/inbox"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FileText className="size-6" />
                                <span>Memo Notes</span>
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="h-32 w-full min-w-32 flex-col gap-3 border-zinc-600 bg-transparent text-zinc-100 hover:border-white hover:bg-white hover:text-zinc-900"
                        >
                            <a
                                href="https://calendly.com/john-ashioya/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiCalendly className="size-6" />
                                <span>Calendly</span>
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="h-32 w-full min-w-32 flex-col gap-3 border-zinc-600 bg-transparent text-zinc-100 hover:border-white hover:bg-white hover:text-zinc-900"
                        >
                            <a href="mailto:john.ashioya@gmail.com">
                                <MdEmail className="size-6" />
                                <span>Email</span>
                            </a>
                        </Button>
                    </div>
                </section>

                <footer className="flex justify-center gap-2 pb-2">
                    <Button
                        asChild
                        variant="secondary"
                        size="icon"
                        className="size-8 rounded-full bg-zinc-800 text-zinc-200 hover:bg-white hover:text-zinc-900"
                    >
                        <a
                            href="https://github.com/pashioya"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <SiGithub className="size-4" aria-hidden="true" />
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="secondary"
                        size="icon"
                        className="size-8 rounded-full bg-zinc-800 text-zinc-200 hover:bg-white hover:text-zinc-900"
                    >
                        <a
                            href="https://bsky.app/profile/paul-ashioya.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Bluesky"
                        >
                            <SiBluesky className="size-4" aria-hidden="true" />
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="secondary"
                        size="icon"
                        className="size-8 rounded-full bg-zinc-800 text-zinc-200 hover:bg-white hover:text-zinc-900"
                    >
                        <a
                            href="https://www.linkedin.com/in/paul-ashioya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <SiLinkedin className="size-4" aria-hidden="true" />
                        </a>
                    </Button>
                </footer>
            </main>
        </div>
    );
}
