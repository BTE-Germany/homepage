import Image from "next/image";
import { cn } from "@/lib/utils";

export function GuideImageCard({
    src,
    alt,
    caption,
    className,
}: {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
}) {
    return (
        <div className={cn("overflow-hidden rounded-lg border border-border/60 bg-background/70", className)}>
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>
            {caption ? (
                <div className="border-t border-border/60 p-4 text-sm text-muted-foreground">
                    {caption}
                </div>
            ) : null}
        </div>
    );
}
