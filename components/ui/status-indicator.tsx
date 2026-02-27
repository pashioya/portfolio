import { cn } from "@/lib/utils";

type StatusIndicatorProps = {
    variant: "current" | "wip";
    className?: string;
};

export function StatusIndicator({ variant, className }: StatusIndicatorProps) {
    const label = variant === "current" ? "Current" : "In Progress";
    const colorClass =
        variant === "current"
            ? "text-emerald-600 dark:text-emerald-400"
            : "text-yellow-600 dark:text-yellow-400";

    return (
        <span
            className={cn(
                "flex items-center gap-1.5 text-xs font-medium",
                colorClass,
                className
            )}
        >
            <div
                className={cn(
                    "size-1 rounded-full shrink-0",
                    variant === "current" &&
                        "bg-emerald-500 shadow-emerald-500 animate-pulse-glow-green",
                    variant === "wip" &&
                        "bg-yellow-500 shadow-yellow-500 animate-pulse-glow-yellow"
                )}
                aria-hidden="true"
            />
            <span>{label}</span>
        </span>
    );
}
