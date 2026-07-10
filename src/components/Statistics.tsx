"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FadeIn } from "@/components/ui/FadeIn";
import { companyStats } from "@/data/site";

export default function Statistics() {
  return (
    <Section dark className="!bg-[#050f0b]">
      <div className="absolute inset-0 -z-0">
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

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companyStats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.05}>
            <div className="group h-full rounded-[24px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-400 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.07]">
              <p className="font-monument text-4xl font-bold tracking-tight text-white md:text-5xl">
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
    </Section>
  );
}
