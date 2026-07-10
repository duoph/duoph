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
    <Section id="process" dark>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-1/4 right-0 hidden h-96 w-96 rounded-full bg-[#18704E]/15 blur-[120px] md:block" />
      </div>

      <SectionHeading
        light
        eyebrow="Our Process"
        title={
          <>
            A clear path from{" "}
            <span className="text-emerald-300">idea to impact</span>
          </>
        }
        description="Eight stages. One accountable team. You always know what happens next — and why it matters to your business."
      />

      {lite ? <ProcessList staticLine /> : <ProcessListAnimated />}
    </Section>
  );
}

function ProcessList({ staticLine }: { staticLine?: boolean }) {
  return (
    <div className="relative mt-12 md:mt-20">
      <div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 md:left-1/2 md:-translate-x-px" />
      {staticLine ? (
        <div className="absolute top-0 bottom-0 left-4 w-px bg-linear-to-b from-emerald-400 via-[#18704E] to-emerald-400/40 md:left-1/2 md:-translate-x-px" />
      ) : null}
      <Steps />
    </div>
  );
}

function ProcessListAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 40%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mt-12 md:mt-20">
      <div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 md:left-1/2 md:-translate-x-px" />
      <motion.div
        style={{ height: lineHeight }}
        className="absolute top-0 left-4 w-px origin-top bg-linear-to-b from-emerald-400 via-[#18704E] to-emerald-400/40 md:left-1/2 md:-translate-x-px"
      />
      <Steps />
    </div>
  );
}

function Steps() {
  return (
    <ol className="relative space-y-8 md:space-y-0">
      {processSteps.map((step, i) => {
        const isLeft = i % 2 === 0;
        return (
          <li
            key={step.id}
            className="relative md:grid md:grid-cols-2 md:gap-12 md:pb-16"
          >
            <FadeIn
              className={
                isLeft
                  ? "md:col-start-1 md:pr-12 md:text-right"
                  : "md:col-start-2 md:pl-12"
              }
            >
              <div
                className={`ml-10 max-w-md rounded-[20px] border border-white/10 bg-white/[0.04] p-5 sm:rounded-[24px] sm:p-6 md:ml-0 ${
                  isLeft ? "md:ml-auto" : ""
                }`}
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-emerald-300/80 uppercase">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-monument mt-2 text-lg font-bold text-white sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </div>
            </FadeIn>

            <div
              className="absolute top-6 left-4 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2"
              aria-hidden
            >
              <span className="absolute h-5 w-5 rounded-full bg-[#18704E]/30" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-300" />
            </div>

            {isLeft ? <div className="hidden md:block" aria-hidden /> : null}
          </li>
        );
      })}
    </ol>
  );
}
