"use client";

import { GuideRichText } from "@/components/guides/GuideRichText";
import { useTranslations } from "next-intl";

export default function LegalPage() {
    const t = useTranslations("Legal");

    return (
        <div className="container mx-auto mt-42 md:mt-36 lg:mt-32">
            <section className="mb-8">
                <h1 className="font-bold text-4xl">{t("title")}</h1>
                <p className="text-muted-foreground text-base sm:text-lg">
                    <b>{t("subText")}</b>
                </p>
            </section>
            <section className="mb-8 bg-primary/30 p-4 rounded-lg">
                <h2 className="font-bold text-xl mb-2">{t("area.header")}</h2>
                <GuideRichText content={t.raw("area.content")} />
            </section>
            <section className="mb-8">
                <h2 className="font-bold text-xl mb-4">{t("offer.title")}</h2>
                <GuideRichText content={t.raw("offer.content")} />
            </section>
            <section className="mb-8">
                <h2 className="font-bold text-xl mb-4">{t("contact.title")}</h2>
                <GuideRichText content={t.raw("contact.content")} />
            </section>
            <section className="mb-8">
                <h2 className="font-bold text-xl mb-4">{t("disclaimer.title")}</h2>
                <GuideRichText content={t.raw("disclaimer.content")} />
            </section>
        </div>
    )
}
