"use client";

import {
  HeartPulse,
  UtensilsCrossed,
  ShoppingBag,
  HardHat,
  GraduationCap,
  Factory,
  Briefcase,
  Rocket,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { industries } from "@/data/industries";

const icons = [
  HeartPulse,
  UtensilsCrossed,
  ShoppingBag,
  HardHat,
  GraduationCap,
  Factory,
  Briefcase,
  Rocket,
];

export default function Industries() {
  return (
    <Section id="industries" className="bg-white">
      <SectionHeading
        eyebrow="Industries"
        title={
          <>
            Built for the businesses{" "}
            <span className="text-[#18704E]">we serve every day</span>
          </>
        }
        description="We design around how operators, founders, and teams actually work — across sectors."
      />

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, i) => {
          const Icon = icons[i] ?? Briefcase;
          return (
            <FadeIn key={industry.id} delay={i * 0.04}>
              <article className="group h-full bg-white p-6 transition duration-300 hover:bg-[#050f0b] sm:p-7">
                <Icon
                  className="h-5 w-5 text-[#18704E] transition group-hover:text-emerald-300"
                  aria-hidden
                />
                <h3 className="font-monument mt-5 text-base font-bold tracking-tight text-ink transition group-hover:text-white">
                  {industry.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/55 transition group-hover:text-white/55">
                  {industry.description}
                </p>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
