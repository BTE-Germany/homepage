import { useTranslations } from "next-intl";
import Heading from "../animate-ui/primitives/texts/heading";
import { motion } from "motion/react";

function Hero() {
  const t = useTranslations("History");

  return (
    <section className="mb-16 lg:mb-32">
      <div className="*:flex *:flex-wrap *:justify-center *:gap-2 lg:*:gap-4">
        <Heading>{t("hero.title")}</Heading>
      </div>

      <motion.p
        className="text-neutral-300 text-center text-base sm:text-lg md:px-24 lg:px-42 mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.03, 0.72, 0.04, 0.98] }}
        viewport={{ once: true }}
      >
        {t("hero.subText")}
      </motion.p>
    </section>
  );
}

export default Hero;
