import { cn } from "@/lib/utils";

type StatusIndicatorProps = {
    variant: "current" | "wip";
    className?: string;
};

export function StatusIndicator({ variant, className }: StatusIndicatorProps) {
    return (
        <div
            className={cn(
                "size-1 rounded-full",
                variant === "current" &&
                    "bg-green-500 shadow-green-500 animate-pulse-glow-green",
                variant === "wip" &&
                    "bg-yellow-500 shadow-yellow-500 animate-pulse-glow-yellow",
                className
            )}
            aria-label={variant === "current" ? "Current" : "Work in Progress"}
        />
    );
}
