"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";
import { companyStats } from "@/data/site";
import { useLiteMotion } from "@/hooks/useLiteMotion";

export default function Statistics() {
  const lite = useLiteMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], lite ? [0, 0] : [40, -40]);

  return (
    <Section dark className="!bg-[#050f0b]" grid>
      <div ref={ref} className="relative">
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute -top-20 right-0 hidden h-72 w-72 rounded-full bg-[#18704E]/20 blur-[100px] md:block"
          aria-hidden
        />

        <FadeIn>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-emerald-300/90 uppercase">
            <span className="h-px w-8 bg-emerald-300/60" aria-hidden />
            By the numbers
          </p>
          <h2 className="font-monument max-w-2xl text-[1.75rem] leading-[1.12] font-bold tracking-tight sm:text-4xl md:text-5xl">
            Proof that we{" "}
            <span className="text-emerald-300">ship and support</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {companyStats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.05}>
              <div className="h-full bg-[#050f0b] px-6 py-8 sm:px-8 sm:py-10">
                <p className="font-monument text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold text-white/90">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-sm text-white/45">{stat.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
