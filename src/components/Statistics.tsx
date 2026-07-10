"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";
import { companyStats } from "@/data/site";

export default function Statistics() {
  return (
    <Section dark className="!bg-[#050f0b]">
      <div className="pointer-events-none absolute inset-0 -z-0 hidden md:block" aria-hidden>
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-[#18704E]/20 blur-[100px]" />
        <div className="absolute right-1/5 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="noise absolute inset-0 opacity-[0.12]" />
      </div>

      <SectionHeading
        light
        eyebrow="By the numbers"
        title={
          <>
            Proof that we{" "}
            <span className="text-emerald-300">ship and support</span>
          </>
        }
        description="Metrics that matter to business owners — delivery, reach, responsiveness, and long-term partnership."
      />

      <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {companyStats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.05}>
            <div className="group h-full rounded-[20px] border border-white/10 bg-white/[0.04] p-5 sm:rounded-[24px] sm:p-7 md:backdrop-blur-sm">
              <p className="font-monument text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-white/90 sm:mt-3">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-white/45 sm:mt-1.5">{stat.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
