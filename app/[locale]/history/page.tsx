"use client";

import { motion, MotionValue, useScroll, Variants } from "motion/react";
import { useRef } from "react";

import Image1 from "@/public/hero_images/heroimage1.png";
import Image2 from "@/public/hero_images/heroimage2.png";
import Image3 from "@/public/hero_images/heroimage3.png";
import Image4 from "@/public/hero_images/heroimage4.png";
import Image, { StaticImageData } from "next/image";

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

export default function HistoryPage() {
  const testEntry: TimelineElement = {
    date: "Mar 2020",
    image: Image1,
    desc: "American YouTuber PippenFTS uploads his first video showcasing a full recreation of the earth's terrain and calling for members to start forming the first team of builders",
  };

  return (
    <section className="container mx-auto mt-20 sm:mt-24 md:mt-32">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-4xl lg:text-8xl font-black uppercase flex flex-row gap-4 justify-center mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {"History of BTE Germany".split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="block mr-1"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="text-neutral-300 text-center text-base sm:text-lg px-42 mb-80"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.03, 0.72, 0.04, 0.98] }}
        viewport={{ once: true }}
      >
        Did you know that our mission to recreate the entire earth 1:1 within
        Minecraft already started way back in 2020? Let's take a quick look back
        at some of the most important events that shaped the project into what
        it has become today.
      </motion.p>

      <Timeline
        entries={[testEntry, testEntry, testEntry, testEntry, testEntry]}
      />
    </section>
  );
}

type TimelineElement = {
  date: string;
  image: StaticImageData;
  desc: string;
};

function Timeline({ entries }: { entries: TimelineElement[] }) {
  return (
    <div>
      {entries.map((entry, idx) => (
        <Entry key={`entry-${idx}`} entry={entry} />
      ))}
    </div>
  );
}

function Entry({ entry }: { entry: TimelineElement }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <div
      ref={ref}
      className="relative py-20 flex items-stretch gap-8 odd:flex-row odd:**:data-date:justify-end even:flex-row-reverse first:**:data-linestart:rounded-t-full last:**:data-lineend:rounded-b-full"
    >
      <div className="w-full">
        <div className="flex text-2xl sticky top-62 my-6" data-date>
          {entry.date}
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-stretch">
        <div
          className="bg-white w-2 h-full absolute top-0"
          data-linestart
        ></div>
        <Circle scrollYValue={scrollYProgress} />
      </div>

      <InfoDisplay entry={entry} />
    </div>
  );
}

function InfoDisplay({ entry }: { entry: TimelineElement }) {
  return (
    <motion.div
      className="w-full flex flex-col gap-4 items-center py-16"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.03, 0.72, 0.04, 0.98] }}
      viewport={{ once: true }}
    >
      <Image
        src={entry.image}
        alt="Community" //TODO: Image alt
        placeholder="blur"
        className="rounded-xl"
      />
      <p className="text-center">{entry.desc}</p>
    </motion.div>
  );
}

function Circle({ scrollYValue }: { scrollYValue: MotionValue<number> }) {
  return (
    <>
      <figure className="sticky top-56 w-20 h-20 flex">
        <svg
          className="stroke-white -rotate-90"
          width="80"
          height="80"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="50"
            className="fill-background"
            stroke="none"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            style={{
              pathLength: scrollYValue,
            }}
            className="stroke-10 fill-none"
          />
        </svg>
      </figure>
    </>
  );
}
