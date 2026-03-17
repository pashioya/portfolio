import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";

interface EntryCardProps {
    title: string;
    subtitle: string;
    status?: "current" | "wip";
    bullets?: string[];
    tags?: string[];
}

export function EntryCard({
    title,
    subtitle,
    status,
    bullets,
    tags,
}: EntryCardProps) {
    return (
        <article className="space-y-3">
            <div className="flex items-start gap-3">
                <h3 className="font-semibold text-foreground">{title}</h3>
                {status && <StatusIndicator variant={status} />}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
                {subtitle}
            </p>
            {bullets && bullets.length > 0 && (
                <ul className="mt-3.5 space-y-1.5 pl-0.5">
                    {bullets.map((item, i) => (
                        <li
                            key={i}
                            className="text-sm leading-relaxed text-muted-foreground before:mr-2 before:text-primary/80 before:content-['•']"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            {tags && tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-md border border-border/70 bg-muted/55 text-xs font-medium text-muted-foreground"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            )}
        </article>
    );
}
