"use client";

import Logo from "@/public/logo.png";
import LogoAnimated from "@/public/logo_animated.gif";

import { motion } from "motion/react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import HamburgerIcon from "../animate-ui/primitives/icons/hamburger";
import TransitionLink from "./TransitionLink";
import { IconChevronDown, IconCompass, IconHistory, IconMail, IconMap2, IconUser, IconUsers, IconCircles  } from '@tabler/icons-react';
import { useEffect, useRef, useState, type ElementType } from "react";
import TextZoop from "../animate-ui/primitives/texts/text-zoop";

type NavRoute = {
    path: string;
    name: string;
    external?: boolean;
    icon?: ElementType;
};

export default function Navbar() {
    const t = useTranslations("Navbar");

    const routes: NavRoute[] = [
        { path: "/guides", name: t("join"), icon: IconCompass },
        { path: "https://map.bte-germany.de", name: t("map"), external: true, icon: IconMap2 },
        { path: "/history", name: t("history"), icon: IconHistory },
    ];
    const aboutRoutes: NavRoute[] = [
        { path: "/contact", name: t("contact"), icon: IconMail },
        { path: "/association", name: t("association"), external: true, icon: IconCircles  },
    ];

    const [isExpanded, setIsExpanded] = useState(false);
    const [isAboutExpanded, setIsAboutExpanded] = useState(false);
    const aboutMenuRef = useRef<HTMLDivElement | null>(null);

    const hideMobileMenu = () => setIsExpanded(false);
    const closeAboutMenu = () => setIsAboutExpanded(false);

    useEffect(() => {
        const handleScroll = () => {
            hideMobileMenu();
            closeAboutMenu();
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isAboutExpanded) return;

        const handlePointerDown = (event: MouseEvent) => {
            if (aboutMenuRef.current && !aboutMenuRef.current.contains(event.target as Node)) {
                closeAboutMenu();
            }
        };

        document.addEventListener("mousedown", handlePointerDown);
        return () => document.removeEventListener("mousedown", handlePointerDown);
    }, [isAboutExpanded]);

    const renderRouteLink = (route: NavRoute, onNavigate?: () => void) => {
        const Icon = route.icon;

        return (
            <TransitionLink
                key={route.name}
                route={route.path}
                callback={onNavigate}
            >
                <div className="flex items-center gap-2 whitespace-nowrap">
                    {Icon ? <Icon size={18} stroke={2} className="shrink-0" /> : null}
                    <TextZoop>{route.name}</TextZoop>
                </div>
            </TransitionLink>
        );
    };

    return (
        <>
            <div className="h-16"></div>
            <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 ">
                <motion.div
                    className="max-w-[90%] lg:max-w-[80%] mx-auto my-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, ease: [0.03, 0.72, 0.04, 0.98] }}
                >
                    <div className="bg-neutral-900/50 backdrop-blur-md rounded-2xl py-5 px-4 lg:px-8 border border-neutral-700/30 flex items-center justify-between">
                        <motion.div initial="initial" whileHover="hovered">
                            <TransitionLink route="/" callback={hideMobileMenu}>
                                <div className="flex items-center gap-5 hover:**:data-static:hidden hover:**:data-animated:block">
                                    <Image
                                        src={Logo}
                                        alt="BTE Germany Logo"
                                        width={42}
                                        height={42}
                                        className="object-contain"
                                        data-static
                                    />
                                    <Image
                                        src={LogoAnimated}
                                        alt="BTE Germany Logo"
                                        width={42}
                                        height={42}
                                        className="object-contain hidden"
                                        data-animated
                                    />
                                    <div className="text-lg overflow-hidden relative leading-5">
                                        <TextZoop>BTE Germany</TextZoop>
                                    </div>
                                </div>
                            </TransitionLink>
                        </motion.div>
                        <div className="flex gap-4 lg:gap-4 items-center justify-center">
                            <div className="lg:flex gap-8 hidden items-center">
                                <div className="flex gap-8 items-center justify-center">
                                    {routes.map((route) => (
                                        <motion.div
                                            key={route.name}
                                            initial="initial"
                                            whileHover="hovered"
                                            className="relative overflow-hidden leading-5"
                                        >
                                            {renderRouteLink(route, hideMobileMenu)}
                                        </motion.div>
                                    ))}
                                </div>

                                <div ref={aboutMenuRef} className="relative">
                                    <motion.button
                                        type="button"
                                        initial="initial"
                                        whileHover="hovered"
                                        className="relative overflow-hidden leading-5 cursor-pointer flex items-center gap-2"
                                        onClick={() => setIsAboutExpanded((prev) => !prev)}
                                        aria-expanded={isAboutExpanded}
                                    >
                                        <IconUsers size={18} stroke={2} className="shrink-0" />
                                        <TextZoop>{t('about')}</TextZoop>
                                        <motion.span
                                            animate={{ rotate: isAboutExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="ml-1"
                                        >
                                            <IconChevronDown size={16} stroke={2} />
                                        </motion.span>
                                    </motion.button>

                                    <motion.div
                                        initial={false}
                                        animate={isAboutExpanded ? "open" : "closed"}
                                        variants={{
                                            open: {
                                                opacity: 1,
                                                y: 0,
                                                pointerEvents: "auto",
                                            },
                                            closed: {
                                                opacity: 0,
                                                y: -8,
                                                pointerEvents: "none",
                                            },
                                        }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="bg-muted absolute flex flex-col gap-3 top-full rounded-lg py-4 px-6 left-1/2 -translate-x-1/2 translate-y-2 origin-top"
                                    >
                                        {aboutRoutes.map((route) => (
                                            <motion.div
                                                key={route.name}
                                                initial="initial"
                                                whileHover="hovered"
                                                className="relative overflow-hidden leading-5"
                                            >
                                                {renderRouteLink(route, () => {
                                                    hideMobileMenu();
                                                    closeAboutMenu();
                                                })}
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                                
                                <TransitionLink route="https://account.bte-germany.de">
                                    <div className="rounded-full h-10 w-10 bg-muted-foreground/5 hover:bg-muted-foreground/10 transition-colors flex items-center justify-center">
                                        <IconUser stroke={2} />
                                    </div>
                                </TransitionLink>
                            </div>

                            <LanguageSwitcher />

                            <div className="block lg:hidden">
                                <button
                                    onClick={() => setIsExpanded((prev) => !prev)}
                                    className="flex items-center justify-center"
                                >
                                    <HamburgerIcon active={isExpanded} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navbar popover */}
                    <motion.div
                        className="lg:hidden mx-4 rounded-b-2xl bg-neutral-900/50 backdrop-blur-md"
                        initial={isExpanded ? "open" : "collapsed"}
                        animate={isExpanded ? "open" : "collapsed"}
                        variants={{
                            open: {
                                opacity: 1,
                                height: "auto",
                            },
                            collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                            type: "spring",
                            duration: 0.5,
                        }}
                    >
                        <div className="py-8 flex flex-col justify-center items-center gap-4">
                            {[...routes, ...aboutRoutes].map((route) => (
                                <motion.div
                                    key={route.name}
                                    initial="initial"
                                    whileHover="hovered"
                                    className="relative overflow-hidden leading-4"
                                >
                                    {renderRouteLink(route, hideMobileMenu)}
                                </motion.div>
                            ))}

                            <TransitionLink route="https://account.bte-germany.de">
                                <div className="rounded-full h-10 w-10 bg-muted-foreground/5 hover:bg-muted-foreground/10 transition-colors flex items-center justify-center">
                                    <IconUser stroke={2} />
                                </div>
                            </TransitionLink>
                        </div>
                    </motion.div>
                </motion.div>
            </nav>
        </>
    );
}
