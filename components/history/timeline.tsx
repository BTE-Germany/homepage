import { useScroll, motion, MotionValue } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

import Image1 from "@/public/hero_images/heroimage1.png";

type TimelineElement = {
  date: string;
  image: StaticImageData;
  desc: string;
};

export default function Timeline() {
  const testEntry: TimelineElement = {
    date: "Mar 2020",
    image: Image1,
    desc: "American YouTuber PippenFTS uploads his first video showcasing a full recreation of the earth's terrain and calling for members to start forming the first team of builders",
  };

  const entries = [testEntry, testEntry, testEntry, testEntry, testEntry];

  return (
    <section className="mb-40">
      {entries.map((entry, idx) => (
        <Entry key={`entry-${idx}`} entry={entry} />
      ))}
      <div className="flex flex-row justify-center">
        <div className="bg-white w-2 h-80 rounded-b-full bg-linear-to-b from-white to-background"></div>
      </div>
    </section>
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
