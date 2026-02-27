"use client";

import Logo from "@/public/logo.png";
import LogoAnimated from "@/public/logo_animated.gif";

import { motion } from "motion/react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { MouseEvent } from "react";
import { useTranslations } from "next-intl";

export default function Navbar() {
    const router = useTransitionRouter();
    const pathName = usePathname();
    const t = useTranslations("Navbar");

    const routes: { path: string; name: string; external?: boolean }[] = [
        { path: "/join", name: t("join") },
        { path: "https://map.bte-germany.de", name: t("map"), external: true },
        { path: "/history", name: t("history") },
    ];

    function transitionPage(path: string, e: MouseEvent) {
        e.preventDefault();

        if (pathName === path) {
            window.scroll({
                top: 0,
                behavior: "smooth",
            });
            return;
        }

        router.push(path, {
            onTransitionReady: pageAnimation,
        });
    }

    return (
        <>
            <div className="h-16"></div>
            <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 ">
                <motion.div
                    className="max-w-[80%] mx-auto my-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, ease: [0.03, 0.72, 0.04, 0.98] }}
                >
                    <div className="bg-neutral-900/50 backdrop-blur-md rounded-2xl py-5 px-8 border border-neutral-700/30 flex items-center justify-between">
                        <motion.div initial="initial" whileHover="hovered">
                            <Link href="/" onClick={(e) => transitionPage("/", e)}>
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
                                    <div className="text-lg overflow-hidden relative">
                                        <TextZoop>BTE Germany</TextZoop>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                        <div className="flex gap-12 items-center">
                            <div className="flex gap-8">
                                {routes.map((route) => (
                                    <motion.div
                                        key={route.name}
                                        initial="initial"
                                        whileHover="hovered"
                                        className="relative overflow-hidden"
                                    >
                                        <Link
                                            href={route.path}
                                            onClick={(e) => {
                                                if (!route.external)
                                                    transitionPage(route.path, e);
                                            }}
                                            target="_blank"
                                        >
                                            <TextZoop>{route.name}</TextZoop>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <LanguageSwitcher />
                        </div>
                    </div>
                </motion.div>
            </nav>
        </>
    );
}

const pageAnimation = () => {
    document.documentElement.animate(
        [
            {
                opacity: 1,
                scale: 1,
                transform: "translateY(0)",
            },
            {
                opacity: 0.5,
                scale: 0.9,
                transform: "translateY(-100px)",
            },
        ],
        {
            duration: 1000,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-old(root)",
        },
    );

    document.documentElement.animate(
        [
            {
                transform: "translateY(100%)",
            },
            {
                transform: "translateY(0)",
            },
        ],
        {
            duration: 1000,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
        },
    );
};

function TextZoop({ children }: { children: string }) {
    return (
        <>
            <div className="font-bold">
                {children.split("").map((l, i) => {
                    return (
                        <motion.span
                            key={`1-${i}`}
                            className="inline-block whitespace-pre"
                            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                                delay: 0.02 * i,
                            }}
                        >
                            {l}
                        </motion.span>
                    );
                })}
            </div>
            <div className="font-bold absolute inset-0">
                {children.split("").map((l, i) => {
                    return (
                        <motion.span
                            key={`2-${i}`}
                            className="inline-block  whitespace-pre"
                            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut",
                                delay: 0.01 * i,
                            }}
                        >
                            {l}
                        </motion.span>
                    );
                })}
            </div>
        </>
    );
}
