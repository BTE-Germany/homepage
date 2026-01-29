"use client"
import dottedMapString from "@/lib/dottedMapString";
import DottedMap from 'dotted-map/without-countries';
import { cities } from "@/lib/dottedMapString";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { IconConfetti, IconConfettiFilled } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function CTA() {

    const map = new DottedMap({ map: JSON.parse(dottedMapString) });
    const t = useTranslations("Home");

    cities.forEach((city) => {
        map.addPin({
            lat: city[0],
            lng: city[1],
            svgOptions: { color: '#2579ff', radius: 0.22 },
        });
    });

    const svgMap = map.getSVG({
        radius: 0.22,
        color: '#423B38',
        shape: 'circle',
        backgroundColor: 'transparent',
    });



    return (
        <motion.div className="container mx-auto mt-32" initial="hidden"
            whileInView="visible"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}

            transition={{ duration: 0.5, ease: [.03, .72, .04, .98], delay: 0.2 }}>
            <div className="flex flex-row items-center justify-center gap-16">
                <div className="relative w-lg">
                    <div className="absolute bg-linear-to-br from-background-800/60 via-background/70 via-30% to-background w-full h-full">

                    </div>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`} className="w-full " />
                </div>
                <div className="flex flex-col w-full items-start">
                    <h1 className="text-3xl font-bold">{t("cta.title")}</h1>
                    <p className="my-4 text-muted-foreground">{t("cta.paragraph")}</p>
                    <Button>
                        <IconConfettiFilled />
                        {t("cta.joinNow")}
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}