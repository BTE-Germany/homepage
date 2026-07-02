"use client";
import Image from "next/image";
import { useRef, useCallback, useEffect } from "react";
import { Guide } from "@/lib/guides";
import { useTranslations } from "next-intl";
import TransitionLink from "../common/TransitionLink";

export function GuideCard({ content }: { content: Guide; }) {
    const t = useTranslations("Guides");
    const translatedTitle = t(content.titleKey);
    const translatedDescription = t(content.descriptionKey);

    // How far the card appears from the viewer in 3D space.
    const CARD_PERSPECTIVE = 1200;
    // Maximum degrees of rotation on each axis.
    const CARD_MAX_ROTATE = 6;
    // How much the card lifts forward while hovered.
    const CARD_TRANSLATE_Z = 6;

    const CARD_TRANSITION_CLASSES = "transition-all duration-300 ease-out";
    // Hover shadow/glow style.
    const CARD_HOVER_SHADOW = "hover:[box-shadow:0_0_28px_rgba(59,130,246,0.22),0_1px_6px_rgba(0,0,0,0.12)]";
    // This is the neutral default when the pointer is not over the card.
    const CARD_INITIAL_TRANSFORM = `perspective(${CARD_PERSPECTIVE}px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;

    const cardRef = useRef<HTMLDivElement>(null);
    const frameRef = useRef<number | null>(null);
    const pointerRef = useRef<{ x: number; y: number; } | null>(null);

    const resetTransform = useCallback(() => {
        const card = cardRef.current;
        if (!card) return;

        // Stop any pending animation frame and reset the pointer state.
        if (frameRef.current) {
            cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
        }

        pointerRef.current = null;
        card.style.transform = CARD_INITIAL_TRANSFORM;
    }, []);

    const updateTransform = useCallback(() => {
        const card = cardRef.current;
        const pointer = pointerRef.current;
        frameRef.current = null;
        if (!card || !pointer) return;

        // Map normalized pointer position into card tilt values.
        const rotateX = (pointer.y - 0.5) * -CARD_MAX_ROTATE;
        const rotateY = (pointer.x - 0.5) * CARD_MAX_ROTATE;

        card.style.transform = `perspective(${CARD_PERSPECTIVE}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${CARD_TRANSLATE_Z}px)`;
    }, []);

    const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();

        // Keep pointer position normalized between 0 and 1 inside the card.
        pointerRef.current = {
            x: (event.clientX - rect.left) / rect.width,
            y: (event.clientY - rect.top) / rect.height,
        };

        if (frameRef.current === null) {
            frameRef.current = requestAnimationFrame(updateTransform);
        }
    }, [updateTransform]);

    useEffect(() => {
        // Cleanup the animation frame when the component unmounts.
        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, []);

    return (
        <div className={`[perspective:${CARD_PERSPECTIVE}px]`}>
            <TransitionLink
                route={`/guides/${content.id}`}
            >
                <div
                    ref={cardRef}
                    className={`bg-card rounded-lg ${CARD_TRANSITION_CLASSES} shadow-sm ${CARD_HOVER_SHADOW} will-change-transform`}
                    style={{ transform: CARD_INITIAL_TRANSFORM }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={resetTransform}
                >
                    <Image src={`/community.png`}
                        alt={translatedTitle}
                        width={400}
                        height={225}
                        className="rounded-t-lg w-full object-cover" />
                    <div className="flex flex-col gap-2 p-4">
                        <h3 className="text-lg font-bold">{translatedTitle}</h3>
                        <p>{translatedDescription}</p>
                    </div>
                </div>
            </TransitionLink>
        </div>
    );
}
