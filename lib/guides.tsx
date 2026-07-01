import type { ReactNode } from "react";
import { GuideContentCard } from "@/components/guides/GuideContentCard";

export type GuideCategory = "join" | "building";

export type GuideContentStep = {
    stepTitle: string;
    content: Array<Array<ReactNode>>;
};
export type GuideContent = Array<GuideContentStep>;

export type Guide = {
    id: string;
    titleKey: string;
    descriptionKey: string;
    category: GuideCategory;
    content: GuideContent;
};

export const guides: Guide[] = [
    {
        id: "visit-the-server",
        titleKey: "Visit the server",
        descriptionKey: "Learn how to join our server and become part of our community.",
        category: "join",
        content: [
            {
                stepTitle: "Get started",
                content: [
                    [
                        <GuideContentCard key="visit-1">
                            <span>Open the invite link and join the community hub to get access to the latest updates.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
            {
                stepTitle: "Meet the community",
                content: [
                    [
                        <GuideContentCard key="visit-2" variant="highlight">
                            <span>Say hello in the welcome channel so the team can point you to the right place.</span>
                        </GuideContentCard>,
                        <GuideContentCard key="visit-3">
                            <span>Browse the different channels to find projects, events, and community support.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
        ],
    },
    {
        id: "become-a-builder",
        titleKey: "Become a builder",
        descriptionKey: "Discover how to contribute to our projects as a builder.",
        category: "join",
        content: [
            {
                stepTitle: "Find your first project",
                content: [
                    [
                        <GuideContentCard key="builder-1">
                            <span>Choose a project that matches your interests and current skill level.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
            {
                stepTitle: "Start contributing",
                content: [
                    [
                        <GuideContentCard key="builder-2" variant="highlight">
                            <span>Reach out in the builders channel and share your ideas with the team.</span>
                        </GuideContentCard>,
                        <GuideContentCard key="builder-3">
                            <span>Build a small contribution first so you can learn the workflow safely.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
        ],
    },
    {
        id: "join-our-team",
        titleKey: "Join our team",
        descriptionKey: "Find out how to join our team and collaborate on exciting projects.",
        category: "join",
        content: [
            {
                stepTitle: "Learn about the team",
                content: [
                    [
                        <GuideContentCard key="team-1">
                            <span>Read about current roles and learn how different teams collaborate.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
            {
                stepTitle: "Apply and stay engaged",
                content: [
                    [
                        <GuideContentCard key="team-2" variant="highlight">
                            <span>Share your background and explain the type of work you want to contribute.</span>
                        </GuideContentCard>,
                        <GuideContentCard key="team-3">
                            <span>Keep showing up, ask questions, and build trust with the community over time.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
        ],
    },
    {
        id: "build-a-plot",
        titleKey: "Build a plot",
        descriptionKey: "Step-by-step guide on how to build your own plot.",
        category: "building",
        content: [
            {
                stepTitle: "Plan your build",
                content: [
                    [
                        <GuideContentCard key="plot-1">
                            <span>Sketch the plot and decide where key features should sit before you start building.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
            {
                stepTitle: "Build it step by step",
                content: [
                    [
                        <GuideContentCard key="plot-2" variant="highlight">
                            <span>Collect the blocks, textures, and references you need to keep the build consistent.</span>
                        </GuideContentCard>,
                        <GuideContentCard key="plot-3">
                            <span>Finish the groundwork first and then add the details once the main structure is complete.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
        ],
    },
    {
        id: "measuring-coordinates",
        titleKey: "Measuring coordinates",
        descriptionKey: "Learn how to use tpll for your building projects.",
        category: "building",
        content: [
            {
                stepTitle: "Understand the grid",
                content: [
                    [
                        <GuideContentCard key="coords-1">
                            <span>Familiarize yourself with coordinate systems so the measurements stay predictable.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
            {
                stepTitle: "Measure accurately",
                content: [
                    [
                        <GuideContentCard key="coords-2" variant="highlight">
                            <span>Use reliable reference points to keep your build aligned and accurate.</span>
                        </GuideContentCard>,
                        <GuideContentCard key="coords-3">
                            <span>Double-check the dimensions before locking in the final layout.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
        ],
    },
    {
        id: "measuring-building-heights",
        titleKey: "Measuring building heights",
        descriptionKey: "Tips and techniques for accurately measuring building heights.",
        category: "building",
        content: [
            {
                stepTitle: "Pick your reference",
                content: [
                    [
                        <GuideContentCard key="height-1">
                            <span>Start from a stable point that clearly represents the building base.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
            {
                stepTitle: "Check your measurements",
                content: [
                    [
                        <GuideContentCard key="height-2" variant="highlight">
                            <span>Take your measurements in small increments to avoid compounding errors.</span>
                        </GuideContentCard>,
                        <GuideContentCard key="height-3">
                            <span>Check your measurements against the original plan and adjust where needed.</span>
                        </GuideContentCard>,
                    ],
                ],
            },
        ],
    },
];

export function getGuideById(id: string | undefined) {
    return guides.find((guide) => guide.id === id);
}
