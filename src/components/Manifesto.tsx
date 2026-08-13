"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLiteMotion } from "@/hooks/useLiteMotion";

const lines = [
  "We design systems",
  "that attract customers,",
  "automate the busywork,",
  "and scale with you.",
];

export default function Manifesto() {
  const lite = useLiteMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], lite ? [0, 0] : [60, -60]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-20 sm:py-28 md:py-36"
      aria-label="What we believe"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none"
        aria-hidden
      >
        <p className="font-monument text-center text-[16vw] leading-none font-bold tracking-[-0.04em] text-[#18704E]/[0.06]">
          FORWARD
        </p>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="mb-8 text-[11px] font-semibold tracking-[0.22em] text-[#18704E] uppercase">
          What we believe
        </p>
        <div className="space-y-1 sm:space-y-2">
          {lines.map((line, i) =>
            lite ? (
              <p
                key={line}
                className="font-monument text-2xl leading-tight font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
              >
                {line}
              </p>
            ) : (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-monument text-2xl leading-tight font-bold tracking-tight text-ink sm:text-4xl md:text-5xl"
              >
                {line}
              </motion.p>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
