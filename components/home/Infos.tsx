"use client";

import Image from "next/image";
import reichstag from "@/public/reichstag.png";
import community from "@/public/community.png";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { IconBrandDiscord, IconBrandDiscordFilled, IconSparkles2 } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";


export default function Infos() {
    const t = useTranslations('Home');
    return (
        <>
            <div className="my-8 container mx-auto px-4 sm:px-6 md:px-0">
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [.03, .72, .04, .98] }} viewport={{ once: true }}>
                    <Image src={reichstag} alt="Reichstag" placeholder="blur" className="rounded-xl w-full h-auto" />
                    <div>
                        <p className="text-base sm:text-lg font-bold uppercase text-neutral-400 mb-1">{t('about.heading')}</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            {t('about.title')}
                        </h2>
                        <p className="text-neutral-300 mt-4 text-base sm:text-lg">{t('about.paragraph')}</p>
                        <Link href="/join">
                            <Button className="mt-8 cursor-pointer">
                                <IconSparkles2 />
                                {t('about.joinUs')}
                            </Button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div className="my-16 sm:my-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32 items-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [.03, .72, .04, .98] }} viewport={{ once: true }}>

                    <div>
                        <p className="text-base sm:text-lg font-bold uppercase text-neutral-400 mb-1">{t('community.heading')}</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            {t('community.title')}
                        </h2>
                        <p className="text-neutral-300 mt-4 text-base sm:text-lg">{t('community.paragraph')}</p>
                        <Link href="/join">
                            <Button className="mt-8 cursor-pointer">
                                <IconBrandDiscordFilled />
                                {t('community.joinDiscord')}
                            </Button>
                        </Link>
                    </div>
                    <Image src={community} alt="Community" placeholder="blur" className="rounded-xl w-full h-auto" />
                </motion.div>
            </div>
        </>
    );
}