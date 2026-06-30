import type { ReactNode } from "react";

export type GuideCategory = "join" | "building";

export type GuideContentStep = Array<Array<ReactNode>>;
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
            [
                [
                    <div key="visit-1" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Start here</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Open the invite link and join the community hub to get access to the latest updates.
                        </p>
                    </div>,
                ],
            ],
            [
                [
                    <div key="visit-2" className="rounded-lg border border-primary/20 bg-primary/10 p-6">
                        <h3 className="text-lg font-semibold">Introduce yourself</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Say hello in the welcome channel so the team can point you to the right place.
                        </p>
                    </div>,
                    <div key="visit-3" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Explore the spaces</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Browse the different channels to find projects, events, and community support.
                        </p>
                    </div>,
                ],
            ],
        ],
    },
    {
        id: "become-a-builder",
        titleKey: "Become a builder",
        descriptionKey: "Discover how to contribute to our projects as a builder.",
        category: "join",
        content: [
            [
                [
                    <div key="builder-1" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Pick a project</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Choose a project that matches your interests and current skill level.
                        </p>
                    </div>,
                ],
            ],
            [
                [
                    <div key="builder-2" className="rounded-lg border border-primary/20 bg-primary/10 p-6">
                        <h3 className="text-lg font-semibold">Ask for support</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Reach out in the builders channel and share your ideas with the team.
                        </p>
                    </div>,
                    <div key="builder-3" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Start small</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Build a small contribution first so you can learn the workflow safely.
                        </p>
                    </div>,
                ],
            ],
        ],
    },
    {
        id: "join-our-team",
        titleKey: "Join our team",
        descriptionKey: "Find out how to join our team and collaborate on exciting projects.",
        category: "join",
        content: [
            [
                [
                    <div key="team-1" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Meet the team</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Read about current roles and learn how different teams collaborate.
                        </p>
                    </div>,
                ],
            ],
            [
                [
                    <div key="team-2" className="rounded-lg border border-primary/20 bg-primary/10 p-6">
                        <h3 className="text-lg font-semibold">Apply for a role</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Share your background and explain the type of work you want to contribute.
                        </p>
                    </div>,
                    <div key="team-3" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Stay involved</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Keep showing up, ask questions, and build trust with the community over time.
                        </p>
                    </div>,
                ],
            ],
        ],
    },
    {
        id: "build-a-plot",
        titleKey: "Build a plot",
        descriptionKey: "Step-by-step guide on how to build your own plot.",
        category: "building",
        content: [
            [
                [
                    <div key="plot-1" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Plan the layout</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Sketch the plot and decide where key features should sit before you start building.
                        </p>
                    </div>,
                ],
            ],
            [
                [
                    <div key="plot-2" className="rounded-lg border border-primary/20 bg-primary/10 p-6">
                        <h3 className="text-lg font-semibold">Gather materials</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Collect the blocks, textures, and references you need to keep the build consistent.
                        </p>
                    </div>,
                    <div key="plot-3" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Build in phases</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Finish the groundwork first and then add the details once the main structure is complete.
                        </p>
                    </div>,
                ],
            ],
        ],
    },
    {
        id: "measuring-coordinates",
        titleKey: "Measuring coordinates",
        descriptionKey: "Learn how to use tpll for your building projects.",
        category: "building",
        content: [
            [
                [
                    <div key="coords-1" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Understand the grid</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Familiarize yourself with coordinate systems so the measurements stay predictable.
                        </p>
                    </div>,
                ],
            ],
            [
                [
                    <div key="coords-2" className="rounded-lg border border-primary/20 bg-primary/10 p-6">
                        <h3 className="text-lg font-semibold">Measure with confidence</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Use reliable reference points to keep your build aligned and accurate.
                        </p>
                    </div>,
                    <div key="coords-3" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Verify the result</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Double-check the dimensions before locking in the final layout.
                        </p>
                    </div>,
                ],
            ],
        ],
    },
    {
        id: "measuring-building-heights",
        titleKey: "Measuring building heights",
        descriptionKey: "Tips and techniques for accurately measuring building heights.",
        category: "building",
        content: [
            [
                [
                    <div key="height-1" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Choose a reference point</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Start from a stable point that clearly represents the building base.
                        </p>
                    </div>,
                ],
            ],
            [
                [
                    <div key="height-2" className="rounded-lg border border-primary/20 bg-primary/10 p-6">
                        <h3 className="text-lg font-semibold">Measure carefully</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Take your measurements in small increments to avoid compounding errors.
                        </p>
                    </div>,
                    <div key="height-3" className="rounded-lg border border-border/60 bg-background/70 p-6">
                        <h3 className="text-lg font-semibold">Compare the results</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Check your measurements against the original plan and adjust where needed.
                        </p>
                    </div>,
                ],
            ],
        ],
    },
];

export function getGuideById(id: string | undefined) {
    return guides.find((guide) => guide.id === id);
}
