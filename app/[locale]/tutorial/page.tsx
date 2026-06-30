"use client";

import Heading from "@/components/animate-ui/primitives/texts/heading";
import { useTranslations } from "next-intl";
import { TutorialCard } from "@/components/tutorial/TutorialCard";

export type Tutorial = {
    titleKey: string;
    descriptionKey: string;
    category: "join" | "building";
};

// List of tutorials to display on the tutorial page
const tutorials: Tutorial[] = [
    {
        titleKey: "Visit the server",
        descriptionKey: "Learn how to join our server and become part of our community.",
        category: "join",
    },
    {
        titleKey: "Become a builder",
        descriptionKey: "Discover how to contribute to our projects as a builder.",
        category: "join",
    },
    {
        titleKey: "Join our team",
        descriptionKey: "Find out how to join our team and collaborate on exciting projects.",
        category: "join",
    },
    {
        titleKey: "How to build a plot",
        descriptionKey: "Step-by-step guide on how to build your own plot.",
        category: "building",
    },
    {   
        titleKey: "tpll tutorial",
        descriptionKey: "Learn how to use tpll for your building projects.",
        category: "building",
    },
    {
        titleKey: "Measuring building heights",
        descriptionKey: "Tips and techniques for accurately measuring building heights.",
        category: "building",
    },
]

export default function TutorialPage() {
    const t = useTranslations("Tutorial");

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
            {[... new Set(tutorials.map((tutorial) => tutorial.category))].map((category) => (
                <section key={category} className="flex flex-col items-center gap-10 w-full">
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-black uppercase">
                        {t(category)}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3 w-full text-center">
                        {tutorials
                            .filter((tutorial) => tutorial.category === category)
                            .map((tutorial) => (
                                <>
                                    {/* Calculate the width for each tutorial card as if it were in a grid */}
                                    <div
                                        key={tutorial.titleKey}
                                        className="w-full sm:w-[calc(50%-0.375rem)] md:w-[calc(33.333%-0.5rem)]"
                                    >
                                        <TutorialCard content={tutorial} />
                                    </div>
                                </>
                            ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
