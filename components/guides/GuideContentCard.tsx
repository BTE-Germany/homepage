import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type GuideContentCardVariant = "default" | "highlight";

export function GuideContentCard({
    children,
    variant = "default",
    className,
    padding = true,
}: {
    children: ReactNode;
    variant?: GuideContentCardVariant;
    className?: string;
    padding?: boolean;
}) {
    return (
        <div
            className={cn(
                "rounded-lg border",
                padding && "p-6",
                variant === "highlight"
                    ? "border-primary/20 bg-primary/10"
                    : "border-border/60 bg-background/70",
                className,
            )}
        >
            <div className={cn("flex flex-col gap-2 text-sm text-muted-foreground", padding && "p-0")}>{children}</div>
        </div>
    );
}
