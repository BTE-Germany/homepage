"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Heading from "@/components/animate-ui/primitives/texts/heading";
import { GuideContentCard } from "@/components/guides/GuideContentCard";
import { guides, getGuideById } from "@/lib/guides";
import { useTranslations } from "next-intl";

export default function GuideDetailPage() {
    const params = useParams<{ guideId?: string; locale?: string }>();
    const guideId = params?.guideId;
    const locale = params?.locale ?? "en";
    const guide = useMemo(() => getGuideById(guideId), [guideId]);
    const t = useTranslations("Guides");
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [transitioningStepIndex, setTransitioningStepIndex] = useState<number | null>(null);
    const [stepDirection, setStepDirection] = useState<1 | -1>(1);

    if (!guide) {
        return (
            <div className="container mx-auto mt-36 flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center w-full">
                <Heading size="half" inline>Guide not found</Heading>
                <p className="max-w-xl text-sm text-muted-foreground">
                    The requested guide could not be found. Please choose one of the guides from the overview.
                </p>
                <Link href={`/${locale}/guides`} className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                    Back to guides
                </Link>
            </div>
        );
    }

    const totalSteps = guide.content.length;
    const progress = totalSteps === 0 ? 0 : Math.round(((currentStepIndex + 1) / totalSteps) * 100);
    const currentStep = guide.content[currentStepIndex];
    const outgoingStep = transitioningStepIndex !== null ? guide.content[transitioningStepIndex] : null;

    const changeStep = (nextIndex: number) => {
        if (nextIndex < 0 || nextIndex >= totalSteps || nextIndex === currentStepIndex) {
            return;
        }

        setStepDirection(nextIndex > currentStepIndex ? 1 : -1);
        setTransitioningStepIndex(currentStepIndex);
        setCurrentStepIndex(nextIndex);
    };

    return (
        <div className="container mx-auto mt-24 flex flex-col gap-8 px-6 py-8 lg:flex-row lg:gap-10">
            <aside className="w-full rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm lg:sticky lg:top-36 lg:h-fit lg:w-72">
                <div className="mt-4 flex flex-col gap-4">
                    {[... new Set(guides.map((guide) => guide.category))].map((category) => (
                        <section key={category} className="flex flex-col items-center gap-2 w-full">
                            <h2 className="text-lg font-semibold">
                                {t(`${category}.title`)}
                            </h2>

                            {guides
                                .filter((guide) => guide.category === category)
                                .map((item) => {
                                const active = item.id === guide.id;
                                return (
                                    <Link
                                        key={item.id}
                                        href={`/${locale}/guides/${item.id}`}
                                        className={`w-full text-center rounded-lg px-3 py-2 text-sm transition ${active ? "bg-primary text-primary-foreground" : "bg-background/70 hover:bg-muted"}`}
                                    >
                                        {t(item.titleKey)}
                                    </Link>
                                );
                            })}
                        </section>
                    ))}
                </div>
            </aside>

            <main className="flex-1">
                <div className="rounded-3xl border border-border/70 bg-background/70 p-6 shadow-sm ">
                    <Heading size="half" inline>
                        {t(guide.titleKey)}
                    </Heading>

                    <div className="mt-8 flex flex-col gap-6">
                        <div className="relative overflow-hidden">
                            <AnimatePresence initial={false} mode="wait">
                                {outgoingStep && (
                                    <motion.section
                                        key={`outgoing-${transitioningStepIndex}`}
                                        initial={{ x: 0, opacity: 1 }}
                                        animate={{ x: stepDirection > 0 ? -120 : 120, opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25, ease: "easeInOut" }}
                                        className="absolute inset-0 rounded-2xl border border-border/60 bg-card/40 p-4"
                                        onAnimationComplete={() => setTransitioningStepIndex(null)}
                                    >
                                        <div className="mb-4 flex items-center gap-3">
                                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-background text-sm font-semibold text-primary-foreground">
                                                {transitioningStepIndex! + 1}
                                            </span>
                                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                                {outgoingStep.stepTitleKey ? t(outgoingStep.stepTitleKey) : `Step ${transitioningStepIndex! + 1}`}
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            {outgoingStep.content.map((row, rowIndex) => (
                                                <div key={`${guide.id}-${transitioningStepIndex}-${rowIndex}`} className="flex flex-col md:flex-row gap-4">
                                                    {row.map((card, elementIndex) => (
                                                        <div key={`${guide.id}-${transitioningStepIndex}-${rowIndex}-${elementIndex}`} className="w-full">
                                                            <GuideContentCard
                                                                variant={card.variant}
                                                                padding={card.padding ?? true}
                                                                text={card.textKey ? t.raw(card.textKey) : undefined}
                                                            >
                                                                {card.content}
                                                            </GuideContentCard>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.section>
                                )}
                            </AnimatePresence>

                            <motion.section
                                key={`incoming-${currentStepIndex}`}
                                initial={{ x: stepDirection > 0 ? 120 : -120, opacity: 0 }}
                                animate={{ x: 0, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 24, mass: 0.9, bounce: 0.16 } }}
                                className="relative rounded-2xl border border-border/60 bg-card/40 p-4"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary bg-background text-sm font-semibold text-primary-foreground">
                                        {currentStepIndex + 1}
                                    </span>
                                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                                        {currentStep?.stepTitleKey ? t(currentStep.stepTitleKey) : `Step ${currentStepIndex + 1}`}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {currentStep?.content.map((row, rowIndex) => (
                                        <div key={`${guide.id}-${currentStepIndex}-${rowIndex}`} className="flex flex-col md:flex-row gap-4">
                                            {row.map((card, elementIndex) => (
                                                <div key={`${guide.id}-${currentStepIndex}-${rowIndex}-${elementIndex}`} className="w-full">
                                                    <GuideContentCard
                                                        variant={card.variant}
                                                        padding={card.padding ?? true}
                                                        text={card.textKey ? t.raw(card.textKey) : undefined}
                                                    >
                                                        {card.content}
                                                    </GuideContentCard>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <button
                                type="button"
                                onClick={() => changeStep(currentStepIndex - 1)}
                                disabled={currentStepIndex === 0}
                                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {t("progress.previous")}
                            </button>
                            <button
                                type="button"
                                onClick={() => changeStep(currentStepIndex + 1)}
                                disabled={currentStepIndex === totalSteps - 1}
                                className="rounded-full border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {t("progress.next")}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-0 z-20 mt-8 border-t border-border/70 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/70">
                    <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-4">
                        <p className="text-sm font-medium">{t("progress.label")}</p>
                        <div className="flex flex-1 items-center gap-3">
                            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                                <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
                            </div>
                            <span className="text-sm text-muted-foreground">{progress}%</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
