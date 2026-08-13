"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { processSteps } from "@/data/process";
import { useLiteMotion } from "@/hooks/useLiteMotion";

export default function Process() {
  const lite = useLiteMotion();

  return (
    <Section id="process" dark grid>
      <SectionHeading
        light
        eyebrow="Our Process"
        title={
          <>
            A clear path from{" "}
            <span className="text-emerald-300">idea to impact</span>
          </>
        }
        description="Eight stages. One accountable team. You always know what happens next — and why it matters."
      />

      {lite ? <ProcessStatic /> : <ProcessScroll />}
    </Section>
  );
}

function ProcessStatic() {
  return (
    <ol className="mt-12 space-y-0 divide-y divide-white/10 border-t border-white/10">
      {processSteps.map((step, i) => (
        <li key={step.id} className="py-7">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-emerald-300/70 uppercase">
            Step {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="font-monument mt-2 text-lg font-bold text-white">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/55">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

function ProcessScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 35%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mt-16 md:mt-20">
      <div className="absolute top-0 bottom-0 left-0 w-px bg-white/10 md:left-1/2 md:-translate-x-px" />
      <motion.div
        style={{ height: lineHeight }}
        className="absolute top-0 left-0 w-px origin-top bg-linear-to-b from-emerald-400 via-[#18704E] to-emerald-400/30 md:left-1/2 md:-translate-x-px"
      />

      <ol className="relative space-y-10 md:space-y-0">
        {processSteps.map((step, i) => {
          const isLeft = i % 2 === 0;
          return (
            <li
              key={step.id}
              className="relative md:grid md:grid-cols-2 md:gap-16 md:pb-16"
            >
              <FadeIn
                className={
                  isLeft
                    ? "md:col-start-1 md:pr-10 md:text-right"
                    : "md:col-start-2 md:pl-10"
                }
              >
                <div className={`ml-8 max-w-md md:ml-0 ${isLeft ? "md:ml-auto" : ""}`}>
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-emerald-300/75 uppercase">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-monument mt-2 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </div>
              </FadeIn>

              <div
                className="absolute top-1 left-0 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2"
                aria-hidden
              >
                <span className="absolute h-5 w-5 rounded-full bg-[#18704E]/35" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>

              {isLeft ? <div className="hidden md:block" aria-hidden /> : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
