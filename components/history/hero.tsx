import Heading from "../animate-ui/primitives/texts/heading";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="mb-32">
      <div className="*:flex *:flex-wrap *:justify-center">
        <Heading>History of BTE Germany</Heading>
      </div>

      <motion.p
        className="text-neutral-300 text-center text-base sm:text-lg px-42 mt-12"
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
    </section>
  );
}

export default Hero;
