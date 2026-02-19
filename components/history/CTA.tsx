import { IconConfettiFilled } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

function CTA() {
  const t = useTranslations("History.cta");

  return (
    <section className="mb-16 lg:mb-48">
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold flex justify-center"
            data-date
          >
            {t("title")}
          </h2>

          <div className=" flex flex-col items-center justify-start gap-2 text-center mx-0 md:mx-16">
            <p className="my-4 text-muted-foreground text-base sm:text-lg">
              {t("paragraph")}
            </p>
            <Button>
              <IconConfettiFilled />
              {t("joinNow")}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
