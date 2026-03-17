import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
    return (
        <div className="space-y-5">
            <Badge className="bg-primary px-2.5 py-1 text-primary-foreground hover:bg-primary">
                Hello 👋🏾
            </Badge>
            <h1 className="text-balance text-4xl font-semibold md:text-6xl">
                I&apos;m Paul Ashioya
            </h1>
            <Button
                asChild
                className="mt-1 h-10 rounded-lg bg-primary px-5 text-primary-foreground shadow-[0_10px_26px_rgb(242_199_114_/_0.2)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent active:translate-y-[1px]"
            >
                <a href="/api/download-cv">
                    <Download className="mr-2 size-4" />
                    Download CV
                </a>
            </Button>
        </div>
    );
}
