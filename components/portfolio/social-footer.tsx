import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data/portfolio-data";

export function SocialFooter() {
    return (
        <footer className="pt-5 md:pt-7">
            <div className="flex justify-center gap-2.5 pb-1">
                {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <Button
                            key={index}
                            asChild
                            variant="secondary"
                            size="icon"
                            className="size-9 rounded-xl border border-border/70 bg-muted/65 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/20 hover:text-foreground active:translate-y-[1px]"
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
            </div>
        </footer>
    );
}
