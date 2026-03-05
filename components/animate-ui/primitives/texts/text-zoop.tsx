import { motion } from "motion/react";

export default function TextZoop({ children }: { children: string }) {
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
