"use client"

import Heading from "@/components/animate-ui/primitives/texts/heading";
import { useTranslations } from "next-intl";
import { IconInfoHexagon, IconAt, IconShield, IconUser, IconPhone } from '@tabler/icons-react';
import TransitionLink from "@/components/common/TransitionLink";

export default function GuidesPage() {
    const t = useTranslations("Contact");

    return (
        <div className="container mx-auto mt-42 md:mt-36 lg:mt-32 flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-6">
                <Heading>{t("title")}</Heading>
                <p>
                    {t("subText")}
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                <div className="flex flex-row gap-4 items-center">
                    <IconInfoHexagon className="w-24 h-24"/>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg uppercase">{t("info")}</h2>
                        <span className="flex gap-2 text-muted-foreground">
                            <IconAt/>
                            <TransitionLink route="mailto:info@bte-germany.de">info@bte-germany.de</TransitionLink>
                        </span>
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <IconShield className="w-24 h-24"/>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg uppercase">{t("moderation")}</h2>
                        <span className="flex gap-2 text-muted-foreground">
                            <IconAt/>
                            <TransitionLink route="mailto:moderation@bte-germany.de">moderation@bte-germany.de</TransitionLink>
                        </span>
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <IconUser className="w-24 h-24"/>
                    <div className="flex flex-col">
                        <h2 className="font-bold uppercase text-muted-foreground">{t("general")}</h2>
                        <p className="font-bold text-xl  mb-2">Robin Ferch</p>
                        <span className="flex gap-2 text-muted-foreground mb-1">
                            <IconAt/>
                            <TransitionLink route="mailto:robin.ferch@bte-germany.de">robin.ferch@bte-germany.de</TransitionLink>
                        </span>
                        <span className="flex gap-2 text-muted-foreground">
                            <IconPhone/>
                            <TransitionLink  route="tel:+4915791478206">+49 157 91478206</TransitionLink>
                        </span>
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <IconUser className="w-24 h-24"/>
                    <div className="flex flex-col">
                        <h2 className="font-bold uppercase text-muted-foreground">{t("social")}</h2>
                        <p className="font-bold text-xl  mb-2">Moritz B.</p>
                        <span className="flex gap-2 text-muted-foreground mb-1">
                            <IconAt/>
                            <TransitionLink route="mailto:moritz@bte-germany.de">moritz@bte-germany.de</TransitionLink>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
