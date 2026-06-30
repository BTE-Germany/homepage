"use client";

import Heading from "@/components/animate-ui/primitives/texts/heading";
import { useTranslations } from "next-intl";
import { GuideCard } from "@/components/guides/TutorialCard";
import { guides } from "@/lib/guides";

export default function GuidesPage() {
    const t = useTranslations("Guides");

    return (
        <div className="container mx-auto mt-42 md:mt-36 lg:mt-32 flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-6">
                <Heading>Guides</Heading>
                <p>
                    Here you can find a multitude of guides and resources from joining our
                    mission to helpful tips for building
                </p>
            </div>
            {/* Filter out all unique categories and turn them into sections */}
            {[... new Set(guides.map((guide) => guide.category))].map((category) => (
                <section key={category} className="flex flex-col items-center gap-10 w-full">
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-black uppercase">
                        {t(category)}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 w-full text-center">
                        {guides
                            .filter((guide) => guide.category === category)
                            .map((guide) => (
                                <>
                                    {/* Calculate the width for each tutorial card as if it were in a grid */}
                                    <div
                                        key={guide.titleKey}
                                        className="w-full sm:w-[calc(50%-0.375rem)] md:w-[calc(33.333%-0.5rem)]"
                                    >
                                        <GuideCard content={guide} />
                                    </div>
                                </>
                            ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
