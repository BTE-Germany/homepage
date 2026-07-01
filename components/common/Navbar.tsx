"use client";

import Logo from "@/public/logo.png";
import LogoAnimated from "@/public/logo_animated.gif";

import { motion } from "motion/react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import HamburgerIcon from "../animate-ui/primitives/icons/hamburger";
import TransitionLink from "./TransitionLink";
import { useEffect, useState } from "react";
import TextZoop from "../animate-ui/primitives/texts/text-zoop";

export default function Navbar() {
    const t = useTranslations("Navbar");

    const routes: { path: string; name: string; external?: boolean }[] = [
        { path: "/guides", name: t("join") },
        { path: "https://map.bte-germany.de", name: t("map"), external: true },
        { path: "/history", name: t("history") },
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const hideMobileMenu = () => setIsExpanded(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            hideMobileMenu();
        });
    }, []);

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
                        <div className="flex gap-4 lg:gap-12 items-center justify-center">
                            <div className="lg:flex gap-8 hidden">
                                {routes.map((route) => (
                                    <motion.div
                                        key={route.name}
                                        initial="initial"
                                        whileHover="hovered"
                                        className="relative overflow-hidden leading-5"
                                    >
                                        <TransitionLink
                                            route={route.path}
                                            callback={hideMobileMenu}
                                        >
                                            <TextZoop>{route.name}</TextZoop>
                                        </TransitionLink>
                                    </motion.div>
                                ))}
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
                            {routes.map((route) => (
                                <motion.div
                                    key={route.name}
                                    initial="initial"
                                    whileHover="hovered"
                                    className="relative overflow-hidden leading-4"
                                >
                                    <TransitionLink
                                        route={route.path}
                                        callback={hideMobileMenu}
                                    >
                                        <TextZoop>{route.name}</TextZoop>
                                    </TransitionLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </nav>
        </>
    );
}
