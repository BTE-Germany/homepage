import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type GuideContentCardVariant = "default" | "highlight";

export function GuideContentCard({
    children,
    variant = "default",
    className,
}: {
    children: ReactNode;
    variant?: GuideContentCardVariant;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "rounded-lg border p-6",
                variant === "highlight"
                    ? "border-primary/20 bg-primary/10"
                    : "border-border/60 bg-background/70",
                className,
            )}
        >
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                {children}
            </div>
        </div>
    );
}
