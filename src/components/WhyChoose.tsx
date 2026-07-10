"use client";

import {
  BriefcaseBusiness,
  Code2,
  MessageSquare,
  LifeBuoy,
  Scaling,
  Zap,
  Users,
  Wallet,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { whyChoose } from "@/data/whyChoose";

const icons = [
  BriefcaseBusiness,
  Code2,
  MessageSquare,
  LifeBuoy,
  Scaling,
  Zap,
  Users,
  Wallet,
];

export default function WhyChoose() {
  return (
    <Section id="why-duoph">
      <SectionHeading
        align="center"
        eyebrow="Why Choose Duoph"
        title={
          <>
            Built for business outcomes —{" "}
            <span className="text-[#18704E]">not vanity metrics</span>
          </>
        }
        description="Every engagement is measured by growth, efficiency, and systems your team can rely on long after launch."
        className="mx-auto"
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {whyChoose.map((item, i) => {
          const Icon = icons[i] ?? BriefcaseBusiness;
          return (
            <FadeIn key={item.id} delay={i * 0.04}>
              <article className="group h-full rounded-[24px] border border-black/8 bg-[#FAFBFA] p-6 transition duration-400 hover:-translate-y-1.5 hover:border-[#18704E]/25 hover:bg-white hover:shadow-[0_20px_50px_rgba(24,112,78,0.08)]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#18704E]/10 text-[#18704E] transition group-hover:bg-[#18704E] group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-monument text-base font-bold tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-black/55">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
