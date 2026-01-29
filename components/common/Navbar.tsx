"use client";

import Logo from "@/public/logo.png";
import { motion } from "motion/react";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    return (
        <>
            <div className="h-16"></div>
            <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 ">
                <motion.div className="max-w-[80%] mx-auto my-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [.03, .72, .04, .98] }}>
                    <div className="bg-neutral-900/50 backdrop-blur-md rounded-2xl py-5 px-8 border border-neutral-700/30 flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <Image
                                src={Logo}
                                alt="BTE Germany Logo"
                                width={42}
                                height={42}
                                className="object-contain"
                            />
                            <p className="font-bold text-lg">
                                BTE Germany
                            </p>
                        </div>
                        <LanguageSwitcher />
                    </div>
                </motion.div>

            </nav>
        </>

    )
};