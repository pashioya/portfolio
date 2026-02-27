import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data/portfolio-data";

export function SocialFooter() {
    return (
        <footer className="flex justify-center gap-2 pb-2">
            {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                    <Button
                        key={index}
                        asChild
                        variant="secondary"
                        size="icon"
                        className="size-8 rounded-full bg-zinc-800 text-zinc-200 hover:bg-white hover:text-zinc-900"
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                        >
                            <Icon className="size-4" aria-hidden="true" />
                        </a>
                    </Button>
                );
            })}
        </footer>
    );
}
