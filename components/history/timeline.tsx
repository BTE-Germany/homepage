import { useScroll, motion, MotionValue } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

import ImgBteglogo from "@/public/timeline_images/bteg_logo.png";
import ImgPippen from "@/public/timeline_images/pippen.png";
import ImgBeilstein from "@/public/timeline_images/beilstein.png";
import ImgSpark from "@/public/timeline_images/spark.png";
import ImgAnniversary from "@/public/timeline_images/bteg_anniversary.png";
import ImgWochenblatt from "@/public/timeline_images/meersburg.png";
import ImgTelekom from "@/public/timeline_images/telekom.png";
import ImgBtegThumbnail from "@/public/timeline_images/bteg_thumbnail.jpg";
import ImgEntrupArticle from "@/public/timeline_images/entrup.png";
import ImgBteGames from "@/public/timeline_images/bte_games.png";
import ImgExaroton from "@/public/timeline_images/exaroton.png";
import ImgAssociation from "@/public/timeline_images/verein.png";

import { useTranslations } from "next-intl";

type TimelineElement = {
  date: string;
  image: StaticImageData;
  desc: string;
};

export default function Timeline() {
  const t = useTranslations("History.timeline");

  const entries = [
    { date: t("1.date"), image: ImgPippen, desc: t("1.info") },
    { date: t("2.date"), image: ImgBteglogo, desc: t("2.info") },
    { date: t("3.date"), image: ImgBeilstein, desc: t("3.info") },
    { date: t("4.date"), image: ImgSpark, desc: t("4.info") },
    { date: t("5.date"), image: ImgAnniversary, desc: t("5.info") },
    { date: t("6.date"), image: ImgWochenblatt, desc: t("6.info") },
    { date: t("7.date"), image: ImgTelekom, desc: t("7.info") },
    { date: t("8.date"), image: ImgBtegThumbnail, desc: t("8.info") },
    { date: t("9.date"), image: ImgEntrupArticle, desc: t("9.info") },
    { date: t("10.date"), image: ImgAssociation, desc: t("10.info") },
    { date: t("11.date"), image: ImgBteGames, desc: t("11.info") },
    { date: t("12.date"), image: ImgExaroton, desc: t("12.info") },
  ];

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
      className="relative py-10 flex items-stretch gap-2 lg:gap-8 odd:flex-row odd:**:data-date:justify-end lg:even:flex-row-reverse first:**:data-line:rounded-t-full max-lg:last:**:data-line:rounded-b-full "
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
