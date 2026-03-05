"use client";

import { motion, MotionConfig } from "motion/react";

export default function HamburgerIcon({ active }: { active: boolean }) {
    return (
        <MotionConfig transition={{ duration: 0.2 }}>
            <motion.div
                className="relative h-10 w-10"
                animate={active ? "open" : "closed"}
            >
                <motion.span
                    className="absolute h-0.5 w-5 bg-white"
                    style={{
                        left: "50%",
                        top: "35%",
                        x: "-50%",
                        y: "-50%",
                    }}
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "45deg"],
                            top: ["35%", "50%", "50%"],
                        },
                        closed: {
                            rotate: ["45deg", "0deg", "0deg"],
                            top: ["50%", "50%", "35%"],
                        },
                    }}
                />
                <motion.span
                    className="absolute h-0.5 w-5 bg-white"
                    style={{
                        left: "50%",
                        top: "50%",
                        x: "-50%",
                        y: "-50%",
                    }}
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "-45deg"],
                        },
                        closed: {
                            rotate: ["-45deg", "0deg", "0deg"],
                        },
                    }}
                />
                <motion.span
                    className="absolute h-0.5 w-5 bg-white"
                    style={{
                        left: "50%",
                        bottom: "35%",
                        x: "-50%",
                        y: "50%",
                    }}
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "45deg"],
                            bottom: ["35%", "50%", "50%"],
                        },
                        closed: {
                            rotate: ["45deg", "0deg", "0deg"],
                            bottom: ["50%", "50%", "35%"],
                        },
                    }}
                />
            </motion.div>
        </MotionConfig>
    );
}
