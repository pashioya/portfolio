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
        <div>
            <div className="flex gap-3">
                <h3 className="font-semibold text-foreground">{title}</h3>
                {status && <StatusIndicator variant={status} />}
            </div>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            {bullets && bullets.length > 0 && (
                <ul className="mt-2 space-y-1">
                    {bullets.map((item, i) => (
                        <li
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed before:mr-2 before:content-['•']"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            {tags && tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-normal"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            )}
        </div>
    );
}
