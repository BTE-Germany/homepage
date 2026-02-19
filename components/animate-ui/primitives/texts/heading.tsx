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
};

export default function Heading({ children }: HeadingProps) {
  return (
    <motion.h1
      className="text-3xl sm:text-4xl md:text-4xl lg:text-8xl font-black uppercase gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children.split(" ").map((word, index) => (
        <motion.span key={index} className="block mr-1" variants={wordVariants}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
