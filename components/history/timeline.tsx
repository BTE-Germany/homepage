import { useScroll, motion, MotionValue } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

import Image1 from "@/public/hero_images/heroimage1.png";
import { useTranslations } from "next-intl";

type TimelineElement = {
  date: string;
  image: StaticImageData;
  desc: string;
};

export default function Timeline() {
  const t = useTranslations("History.timeline");

  const testEntry: TimelineElement = {
    date: t("1.date"),
    image: Image1,
    desc: t("1.info"),
  };

  const entries = [testEntry, testEntry, testEntry, testEntry, testEntry];

  return (
    <section className="mb-56 lg:mb-40">
      <div>
        {entries.map((entry, idx) => (
          <Entry key={`entry-${idx}`} entry={entry} />
        ))}
      </div>
      <div className="hidden lg:flex flex-row justify-center">
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
      className="relative py-20 flex items-stretch gap-2 lg:gap-8 odd:flex-row odd:**:data-date:justify-end lg:even:flex-row-reverse first:**:data-line:rounded-t-full last:**:data-line:rounded-b-full"
    >
      <div className="lg:w-full">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold flex sticky top-62 mx-4 lg:mx-0 lg:my-6 text-nowrap [writing-mode:vertical-lr] lg:[writing-mode:lr]"
          data-date
        >
          {entry.date}
        </h2>
      </div>

      <div className="flex flex-col gap-4 items-center justify-stretch">
        <div className="bg-white w-2 h-full absolute top-0" data-line></div>
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
      <figure className="sticky top-56 w-15 h-15 lg:w-20 lg:h-20 flex scale-75 md:scale-100">
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
