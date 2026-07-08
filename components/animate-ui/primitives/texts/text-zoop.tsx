import { motion } from "motion/react";

export default function TextZoop({ children }: { children: string }) {
    const letters = children.split("");

    return (
        <span className="relative inline-block font-bold whitespace-nowrap leading-none">
            <span className="inline-block">
                {letters.map((l, i) => {
                    return (
                        <motion.span
                            key={`1-${i}`}
                            className="inline-block whitespace-pre"
                            variants={{
                                initial: {
                                    y: 0,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeInOut",
                                    },
                                },
                                hovered: {
                                    y: "-110%",
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * i,
                                    },
                                },
                            }}
                        >
                            {l}
                        </motion.span>
                    );
                })}
            </span>
            <span className="absolute inset-0">
                {letters.map((l, i) => {
                    return (
                        <motion.span
                            key={`2-${i}`}
                            className="inline-block whitespace-pre"
                            variants={{
                                initial: {
                                    y: "110%",
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeInOut",
                                    },
                                },
                                hovered: {
                                    y: 0,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.01 * i,
                                    },
                                },
                            }}
                        >
                            {l}
                        </motion.span>
                    );
                })}
            </span>
        </span>
    );
}
