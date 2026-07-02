import type { ReactNode } from "react";
import { GuideImageCard } from "@/components/guides/GuideImageCard";

export type GuideCategory = "join" | "building";

export type GuideCardContent = {
    id: string;
    variant?: "default" | "highlight";
    textKey?: string;
    content?: ReactNode;
    padding?: boolean;
};

export type GuideContentStep = {
    stepTitleKey: string;
    content: Array<Array<GuideCardContent>>;
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
        titleKey: "visitTheServer.title",
        descriptionKey: "visitTheServer.description",
        category: "join",
        content: [
            {
                stepTitleKey: "visitTheServer.steps.getStarted",
                content: [
                    [
                        {
                            id: "visit-1",
                            textKey: "visitTheServer.content.openInvite",
                        },
                    ],
                ],
            },
            {
                stepTitleKey: "visitTheServer.steps.meetTheCommunity",
                content: [
                    [
                        {
                            id: "visit-2",
                            textKey: "visitTheServer.content.sayHello",
                            variant: "highlight",
                        },
                        {
                            id: "visit-3",
                            padding: false,
                            content: (
                                <GuideImageCard
                                    src="/reichstag.png"
                                    alt="The Reichstag building"
                                    caption="A sample visual card for guides"
                                />
                            ),
                        },
                    ],
                ],
            },
        ],
    },
    {
        id: "become-a-builder",
        titleKey: "becomeABuilder.title",
        descriptionKey: "becomeABuilder.description",
        category: "join",
        content: [
            {
                stepTitleKey: "becomeABuilder.steps.findYourFirstProject",
                content: [
                    [
                        {
                            id: "builder-1",
                            textKey: "becomeABuilder.content.chooseProject",
                        },
                    ],
                ],
            },
            {
                stepTitleKey: "becomeABuilder.steps.startContributing",
                content: [
                    [
                        {
                            id: "builder-2",
                            textKey: "becomeABuilder.content.reachOut",
                            variant: "highlight",
                        },
                        {
                            id: "builder-3",
                            textKey: "becomeABuilder.content.buildSmallContribution",
                        },
                    ],
                ],
            },
        ],
    },
    {
        id: "join-our-team",
        titleKey: "joinOurTeam.title",
        descriptionKey: "joinOurTeam.description",
        category: "join",
        content: [
            {
                stepTitleKey: "joinOurTeam.steps.learnAboutTheTeam",
                content: [
                    [
                        {
                            id: "team-1",
                            textKey: "joinOurTeam.content.readAboutRoles",
                        },
                    ],
                ],
            },
            {
                stepTitleKey: "joinOurTeam.steps.applyAndStayEngaged",
                content: [
                    [
                        {
                            id: "team-2",
                            textKey: "joinOurTeam.content.shareBackground",
                            variant: "highlight",
                        },
                        {
                            id: "team-3",
                            textKey: "joinOurTeam.content.keepShowingUp",
                        },
                    ],
                ],
            },
        ],
    },
    {
        id: "build-a-plot",
        titleKey: "buildAPlot.title",
        descriptionKey: "buildAPlot.description",
        category: "building",
        content: [
            {
                stepTitleKey: "buildAPlot.steps.planYourBuild",
                content: [
                    [
                        {
                            id: "plot-1",
                            textKey: "buildAPlot.content.sketchPlot",
                        },
                    ],
                ],
            },
            {
                stepTitleKey: "buildAPlot.steps.buildStepByStep",
                content: [
                    [
                        {
                            id: "plot-2",
                            textKey: "buildAPlot.content.collectBlocks",
                            variant: "highlight",
                        },
                        {
                            id: "plot-3",
                            textKey: "buildAPlot.content.finishGroundwork",
                        },
                    ],
                ],
            },
        ],
    },
    {
        id: "measuring-coordinates",
        titleKey: "measuringCoordinates.title",
        descriptionKey: "measuringCoordinates.description",
        category: "building",
        content: [
            {
                stepTitleKey: "measuringCoordinates.steps.understandTheGrid",
                content: [
                    [
                        {
                            id: "coords-1",
                            textKey: "measuringCoordinates.content.familiarizeWithCoordinateSystems",
                        },
                    ],
                ],
            },
            {
                stepTitleKey: "measuringCoordinates.steps.measureAccurately",
                content: [
                    [
                        {
                            id: "coords-2",
                            textKey: "measuringCoordinates.content.useReferencePoints",
                            variant: "highlight",
                        },
                        {
                            id: "coords-3",
                            textKey: "measuringCoordinates.content.doubleCheckDimensions",
                        },
                    ],
                ],
            },
        ],
    },
    {
        id: "measuring-building-heights",
        titleKey: "measuringBuildingHeights.title",
        descriptionKey: "measuringBuildingHeights.description",
        category: "building",
        content: [
            {
                stepTitleKey: "measuringBuildingHeights.steps.pickYourReference",
                content: [
                    [
                        {
                            id: "height-1",
                            textKey: "measuringBuildingHeights.content.startFromStablePoint",
                        },
                    ],
                ],
            },
            {
                stepTitleKey: "measuringBuildingHeights.steps.checkYourMeasurements",
                content: [
                    [
                        {
                            id: "height-2",
                            textKey: "measuringBuildingHeights.content.takeMeasurementsInSmallIncrements",
                            variant: "highlight",
                        },
                        {
                            id: "height-3",
                            textKey: "measuringBuildingHeights.content.checkAgainstOriginalPlan",
                        },
                    ],
                ],
            },
        ],
    },
];

export function getGuideById(id: string | undefined) {
    return guides.find((guide) => guide.id === id);
}
