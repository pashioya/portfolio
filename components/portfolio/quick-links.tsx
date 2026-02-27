import { Button } from "@/components/ui/button";
import { quickLinks } from "@/lib/data/portfolio-data";

export function QuickLinks() {
    return (
        <div className="grid grid-cols-2 gap-4 md:sticky md:top-[10vh] md:self-start md:justify-self-end">
            {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                    <Button
                        key={index}
                        asChild
                        variant="outline"
                        className="h-32 w-full min-w-32 flex-col gap-3 border-border bg-transparent text-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground"
                    >
                        <a
                            href={link.href}
                            {...(link.external && {
                                target: "_blank",
                                rel: "noopener noreferrer",
                            })}
                        >
                            <Icon className="size-6" aria-hidden="true" />
                            <span>{link.label}</span>
                        </a>
                    </Button>
                );
            })}
        </div>
    );
}
