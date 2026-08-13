"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLiteMotion } from "@/hooks/useLiteMotion";

const Hero = () => {
  const lite = useLiteMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, lite ? 0 : 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, lite ? 1 : 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, lite ? 1 : 1.08]);
  const brandY = useTransform(scrollYProgress, [0, 1], [0, lite ? 0 : -60]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden text-white"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale }}
        aria-hidden
      >
        <div className="hero-mesh absolute inset-0" />
        {!lite ? <div className="hero-aurora" /> : null}
        <div className="absolute inset-0 bg-linear-to-t from-[#030a07] via-transparent to-black/20" />
        {!lite ? (
          <div className="noise pointer-events-none absolute inset-0 opacity-[0.14]" />
        ) : null}
      </motion.div>

      {/* Full-bleed atmospheric brand plane */}
      <motion.div
        style={{ y: brandY, opacity }}
        className="pointer-events-none absolute inset-x-0 top-[18%] z-[1] select-none px-2 sm:top-[14%] md:top-[10%]"
        aria-hidden
      >
        <p className="font-monument text-center text-[18vw] leading-none font-bold tracking-[-0.04em] text-white/[0.07] sm:text-[16vw] md:text-[14vw]">
          DUOPH
        </p>
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 md:px-10 md:pb-24 lg:px-12"
      >
        <div className="max-w-3xl pt-32 sm:pt-36">
          <motion.p
            initial={lite ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.24em] text-emerald-300/90 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Duoph Technologies
          </motion.p>

          <motion.h1
            initial={lite ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-monument text-[2.15rem] leading-[1.05] font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          >
            Technology that moves{" "}
            <span className="text-emerald-300">businesses</span> forward.
          </motion.h1>

          <motion.p
            initial={lite ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/65 sm:mt-6 sm:text-base md:text-lg"
          >
            Attract customers, automate operations, and ship software that
            scales — without drowning in manual work.
          </motion.p>

          <motion.div
            initial={lite ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            <MagneticButton
              href="#contact"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </MagneticButton>
            <MagneticButton
              href="#work"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              View Our Work
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={lite ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-14 hidden items-center gap-3 text-xs tracking-[0.2em] text-white/35 uppercase sm:flex"
          aria-hidden
        >
          <span className="h-8 w-px bg-white/20" />
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
