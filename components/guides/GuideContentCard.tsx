import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { GuideRichText } from "@/components/guides/GuideRichText";

export type GuideContentCardVariant = "default" | "highlight";

export function GuideContentCard({
    children,
    variant = "default",
    className,
    padding = true,
    text,
}: {
    children?: ReactNode;
    variant?: GuideContentCardVariant;
    className?: string;
    padding?: boolean;
    text?: string;
}) {
    const content = text ? <GuideRichText content={text} /> : children;

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
            <div className={cn("flex flex-col gap-2 text-muted-foreground", padding && "p-0")}>{content}</div>
        </div>
    );
}
