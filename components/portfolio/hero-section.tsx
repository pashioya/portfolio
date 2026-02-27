import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
    return (
        <div className="space-y-5">
            <Badge className="bg-amber-200 px-2.5 py-1 text-zinc-900 hover:bg-amber-200">
                Hello 👋🏾
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                I&apos;m Paul Ashioya
            </h1>
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
    );
}
