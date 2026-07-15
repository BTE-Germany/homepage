"use client";

import { useTranslations } from "next-intl";
import { IconBrandInstagram, IconBrandYoutube, IconBrandTiktok, IconBrandTwitch, IconBrandDiscord } from '@tabler/icons-react';
import TransitionLink from "./TransitionLink";
import Image from "next/image";
import ImgAssociation from "@/public/timeline_images/verein.png";
import { ElementType } from "react";

export default function Footer() {
    const t = useTranslations("Footer");

    const socials: { link: string, name: string, icon: ElementType }[] = [
        { name: "Discord", link: "https://discord.com/invite/btegermany", icon: IconBrandDiscord },
        { name: "YouTube", link: "https://www.youtube.com/@BTEGermany", icon: IconBrandYoutube },
        { name: "Twitch", link: "https://www.twitch.tv/btegermany", icon: IconBrandTwitch },
        { name: "Instagram", link: "https://www.instagram.com/btegermany/", icon: IconBrandInstagram },
        { name: "TikTok", link: "https://www.tiktok.com/@btegermany", icon: IconBrandTiktok }
    ]

    const guides: { name: string, link: string }[] = [
        { name: t("guides.visit"), link: "/guides/visit-the-server" },
        { name: t("guides.builder"), link: "/guides/become-a-builder" },
        { name: t("guides.staff"), link: "/guides/join-our-team" },
    ]

    const externals: { name: string, link: string }[] = [
        { name: t("external.association"), link: "https://bte-germany.org/" },
        { name: t("external.international"), link: "https://buildtheearth.net/de" },
        { name: t("external.map"), link: "https://buildtheearth.net/map" },
    ]

    const footerLinks: { name: string, link: string }[] = [
        { name: t("legalNotice"), link: "https://bte-germany.org/impressum" },
        { name: t("rules"), link: "https://docs.google.com/document/u/1/d/e/2PACX-1vS-K6CH3qNg-jGVmi6tbyIC_-Jw4uVDGMTeqIcv0108A4U5OQEH1dyea7VPep-nmKJPwD-2_Acg8sJW/pub" },
        { name: t("privacyPolicy"), link: "https://bte-germany.org/datenschutz" },
        { name: t("termsAndConditions"), link: "https://drive.google.com/file/d/1o5Ef-c0Dh0YvQjsj__Pzi082rHtm-_aN/view" },
        { name: t("cancelSubscription"), link: "mailto:info@bte-germany.de?subject=Vertragskündigung&body=Hiermit möchte ich folgenden Vertrag kündigen:%0D%0A%0D%0AVertrag: [Vertragsname]%0D%0A%0D%0ABitte bestätigen Sie mir die Kündigung schriftlich.%0D%0A%0D%0AMit freundlichen Grüßen,%0D%0A[Ihr Name]" },
    ]

    return (
        <footer className="w-full border-t mt-16 pb-8 pt-4 lg:pt-16 flex flex-col ">
            <div className="lg:max-w-4/5 mx-auto flex flex-col text-muted-foreground">

                <div className="flex flex-col gap-6 lg:grid lg:grid-cols-5">
                    <div className="lg:flex flex-col col-span-2 gap-2 hidden mr-6">
                        <Image src={ImgAssociation} alt="Association Logo" width={200}  height={50}/>
                        <p className="text-sm">{t("associationDesc")}</p>
                    </div>

                    <div className="flex flex-row justify-center flex-wrap lg:flex-col lg:justify-start gap-4 lg:gap-2">
                        <h6 className="uppercase text-white mb-2 hidden lg:block"><b>{t("header.socials")}</b></h6>
                        {socials.map((social) =>  (
                            <TransitionLink key={social.name} route={social.link} className="flex items-center gap-2 hover:opacity-50 transition-all duration-300">
                                <social.icon stroke={1.5} /> {social.name}
                            </TransitionLink>
                        ))}
                    </div>
                    <div className="flex flex-row justify-center lg:flex-col lg:justify-start gap-4 lg:gap-2">
                        <h6 className="uppercase text-white mb-2 hidden lg:block"><b>{t("header.join")}</b></h6>
                        {guides.map((guide) =>  (
                            <TransitionLink key={guide.link} route={guide.link} className="flex items-center text-center gap-2 hover:opacity-50 transition-all duration-300">
                                {guide.name}
                            </TransitionLink>
                        ))}
                    </div>
                    <div className="flex flex-row justify-center lg:flex-col lg:justify-start gap-4 lg:gap-2">
                        <h6 className="uppercase text-white mb-2 hidden lg:block"><b>{t("header.external")}</b></h6>
                        {externals.map((external) =>  (
                            <TransitionLink key={external.name} route={external.link} className="flex items-center text-center gap-2 hover:opacity-50 transition-all duration-300">
                                {external.name}
                            </TransitionLink>
                        ))}
                    </div>
                </div>
                <div className="border-t pt-8 mt-8 flex flex-col-reverse lg:flex-row gap-6">
                    <span>
                        <p className="text-sm text-muted-foreground">
                            &copy; {new Date().getFullYear()} BuildTheEarth Germany e.V.
                        </p>
                        <p className="text-xs text-muted-foreground opacity-50 mt-1">
                            {t("notAffiliated")}
                        </p>
                    </span>
                    <span className="flex flex-wrap gap-4 justify-center lg:justify-end items-center w-full">
                        {footerLinks.map((f) => (
                            <TransitionLink key={f.link} className="text-sm text-muted-foreground hover:opacity-50 transition-all duration-300" route={f.link}>
                                {f.name}
                            </TransitionLink>
                        ))}
                    </span>
                </div>
            </div>
        </footer>
    );
}
