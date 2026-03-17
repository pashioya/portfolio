import { Button } from "@/components/ui/button";
import { quickLinks } from "@/lib/data/portfolio-data";

export function QuickLinks() {
    return (
        <aside className="grid grid-cols-2 gap-4 md:sticky md:top-[10vh] md:self-start md:justify-self-end">
            {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                    <Button
                        key={link.href}
                        asChild
                        variant="outline"
                        className="border-border/50 bg-secondary/40 text-foreground transition-all duration-200 hover:border-accent hover:-translate-y-1 hover:bg-secondary/70 hover:text-accent"
                    >
                        <a
                            href={link.href}
                            className="group flex h-36 w-full min-w-32 flex-col items-center justify-center gap-3"
                            {...(link.external && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                            })}
                        >
                            <Icon
                                className="size-6 text-foreground transition-colors duration-200 group-hover:text-accent"
                                aria-hidden="true"
                            />
                            <span className="text-sm font-medium transition-colors duration-200 group-hover:text-accent">
                                {link.label}
                            </span>
                        </a>
                    </Button>
                );
            })}
        </aside>
    );
}
