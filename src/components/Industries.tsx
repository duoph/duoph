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
    <Section id="industries">
      <SectionHeading
        align="center"
        eyebrow="Industries"
        title={
          <>
            Built for the businesses{" "}
            <span className="text-[#18704E]">we serve every day</span>
          </>
        }
        description="We understand the pressures of operators, founders, and teams across sectors — and we design solutions around how they actually work."
        className="mx-auto"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, i) => {
          const Icon = icons[i] ?? Briefcase;
          return (
            <FadeIn key={industry.id} delay={i * 0.04}>
              <article className="group h-full rounded-[24px] border border-black/8 bg-white p-6 transition duration-400 hover:-translate-y-1.5 hover:border-[#18704E]/25 hover:shadow-[0_20px_50px_rgba(24,112,78,0.08)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-black/6 bg-[#FAFBFA] text-[#18704E] transition group-hover:border-[#18704E]/20 group-hover:bg-[#18704E] group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-monument text-base font-bold tracking-tight text-black">
                  {industry.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-black/55">
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
