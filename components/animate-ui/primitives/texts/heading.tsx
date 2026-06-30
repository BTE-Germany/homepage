import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            ease: [0.03, 0.72, 0.04, 0.98],
            duration: 0.6,
            staggerChildren: 0.08,
        },
    },
};

const wordVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: [0.03, 0.72, 0.04, 0.98], duration: 2 },
    },
};

type HeadingProps = {
    children: string;
    inline?: boolean;
    size?: "default" | "half";
};

const sizeClasses = {
    default: "text-3xl sm:text-4xl md:text-4xl lg:text-8xl",
    half: "text-[0.9375rem] sm:text-[1.125rem] md:text-[1.125rem] lg:text-[3rem]",
};

export default function Heading({ children, inline = false, size = "default" }: HeadingProps) {
    const wordClassName = inline ? "inline-block mr-2" : "block mr-1";

    return (
        <motion.h1
            className={`${sizeClasses[size]} font-black uppercase`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {children.split(/\s+/).filter(Boolean).map((word, index) => (
                <motion.span key={`${word}-${index}`} className={wordClassName} variants={wordVariants}>
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
}
