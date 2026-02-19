"use client";

import {
  motion,
  MotionValue,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  Variants,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

import Image1 from "@/public/hero_images/heroimage1.png";
import Image2 from "@/public/hero_images/heroimage2.png";
import Image3 from "@/public/hero_images/heroimage3.png";
import Image4 from "@/public/hero_images/heroimage4.png";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { IconConfettiFilled } from "@tabler/icons-react";

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
    <div className="container mx-auto mt-20 sm:mt-24 md:mt-32">
      <section className="mb-32">
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
          className="text-neutral-300 text-center text-base sm:text-lg px-42"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.03, 0.72, 0.04, 0.98] }}
          viewport={{ once: true }}
        >
          Did you know that our mission to recreate the entire earth 1:1 within
          Minecraft already started way back in 2020? Let's take a quick look
          back at some of the most important events that shaped the project into
          what it has become today.
        </motion.p>
      </section>

      <section className="mb-40">
        <ParallaxText baseVelocity={100} />
      </section>

      <section className="mb-40">
        <Timeline
          entries={[testEntry, testEntry, testEntry, testEntry, testEntry]}
        />
      </section>

      <section className="mb-24">
        <motion.div
          className="container mx-auto mt-20 sm:mt-28 md:mt-32 px-4 sm:px-6 md:px-0"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.5,
            ease: [0.03, 0.72, 0.04, 0.98],
            delay: 0.2,
          }}
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold flex sticky top-62 my-6 justify-center"
              data-date
            >
              And in the future?
            </h2>

            <div className=" flex flex-col items-center justify-start gap-2 text-center mx-0 md:mx-16">
              <p className="my-4 text-muted-foreground text-base sm:text-lg">
                Together our community has already experienced a variety of
                historical milestones with many more to come. Interested in
                becoming a first-hand spectator of our future or even help in
                shaping it yourself? Become a member of our community today and
                help us on our mission!
              </p>
              <Button>
                <IconConfettiFilled />
                Join now
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
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
      <div className="flex flex-row justify-center">
        <div className="bg-white w-2 h-80 rounded-b-full bg-linear-to-b from-white to-background"></div>
      </div>
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
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold flex sticky top-62 my-6"
          data-date
        >
          {entry.date}
        </h2>
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

interface ParallaxProps {
  baseVelocity: number;
}

function ParallaxText({ baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const measure = () => {
      const width = containerRef.current!.scrollWidth / 2;
      setContentWidth(width);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const x = useTransform(baseX, (v) => {
    if (!contentWidth) return "0px";

    const wrapped = ((v % contentWidth) + contentWidth) % contentWidth;
    return `${-wrapped}px`;
  });

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const images = [Image1, Image2, Image3, Image4];

  return (
    <div className=" overflow-hidden flex flex-nowrap">
      <motion.div
        ref={containerRef}
        className="flex flex-nowrap gap-2"
        style={{ x }}
      >
        {[...images, ...images].map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Community"
            width={400}
            className="rounded-xl"
          />
        ))}
      </motion.div>
    </div>
  );
}
