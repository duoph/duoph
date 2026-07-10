"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Badge } from "@/components/ui/Badge";
import { heroStats } from "@/data/site";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden px-5 pt-28 pb-20 text-white md:px-10 lg:px-12">
      <HeroBackground reduceMotion={!!reduceMotion} />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge light>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Duoph Technologies
            </Badge>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-monument mt-8 text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[4.35rem]"
          >
            Technology That Moves{" "}
            <span className="text-emerald-300">Businesses</span> Forward.
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            We help businesses attract customers, automate operations, and build
            software that scales — so you grow revenue without drowning in
            manual work.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact" variant="primary">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </MagneticButton>
            <MagneticButton href="#work" variant="secondary">
              View Our Work
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4 sm:gap-8"
            aria-label="Company trust metrics"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-monument text-3xl font-bold tracking-tight text-white md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1.5 text-xs font-medium tracking-wide text-white/50 uppercase sm:text-sm sm:normal-case sm:tracking-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function HeroBackground({ reduceMotion }: { reduceMotion: boolean }) {
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const el = shapesRef.current;
    if (!el) return;

    let frame = 0;
    let raf = 0;
    const shapes = el.querySelectorAll<HTMLElement>("[data-float]");

    const tick = () => {
      frame += 1;
      shapes.forEach((shape, i) => {
        const speed = 0.008 + i * 0.002;
        const y = Math.sin(frame * speed + i) * (10 + i * 4);
        const x = Math.cos(frame * speed * 0.7 + i) * (6 + i * 2);
        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 z-0" aria-hidden>
      <div className="hero-dark-gradient absolute inset-0" />
      <div className="hero-aurora absolute inset-0 opacity-80" />
      <div
        className="absolute top-[12%] left-[4%] h-[480px] w-[480px] rounded-full bg-[#18704E]/28 blur-[120px]"
      />
      <div
        className="absolute right-[2%] bottom-[8%] h-[520px] w-[520px] rounded-full bg-emerald-400/12 blur-[130px]"
      />

      <div ref={shapesRef} className="pointer-events-none absolute inset-0">
        <div
          data-float
          className="absolute top-[22%] right-[12%] h-24 w-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
        />
        <div
          data-float
          className="absolute bottom-[28%] left-[8%] h-16 w-16 rounded-full border border-emerald-400/20 bg-emerald-400/10"
        />
        <div
          data-float
          className="absolute top-[55%] right-[28%] h-10 w-10 rotate-12 rounded-xl border border-white/10 bg-white/[0.04]"
        />
        <div
          data-float
          className="absolute top-[35%] left-[42%] h-3 w-3 rounded-full bg-emerald-300/40"
        />
      </div>

      <div className="noise pointer-events-none absolute inset-0 opacity-[0.14]" />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/55" />
    </div>
  );
}

export default Hero;
