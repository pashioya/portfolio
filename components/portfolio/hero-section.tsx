import { Badge } from "@/components/ui/badge";
import { RequestCvDialog } from "@/components/portfolio/request-cv-dialog";

export function HeroSection() {
    return (
        <div className="space-y-5">
            <Badge className="bg-primary px-2.5 py-1 text-primary-foreground hover:bg-primary">
                Hello 👋🏾
            </Badge>
            <h1 className="text-balance text-4xl font-semibold md:text-6xl">
                I&apos;m Paul Ashioya
            </h1>
            <RequestCvDialog />
        </div>
    );
}
