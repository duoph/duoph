"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { whyChoose } from "@/data/whyChoose";

// Keep the strongest four for a cleaner, memorable section
const featured = whyChoose.slice(0, 4);

export default function WhyChoose() {
  return (
    <Section id="why-duoph" className="bg-white" grid>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:items-start">
        <SectionHeading
          eyebrow="Why Duoph"
          title={
            <>
              Built for outcomes —{" "}
              <span className="text-[#18704E]">not vanity metrics</span>
            </>
          }
          description="Every engagement is measured by growth, efficiency, and systems your team can rely on long after launch."
        />

        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {featured.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.06}>
              <article className="group flex gap-5 py-7 sm:gap-8 sm:py-8">
                <span className="font-monument text-sm font-bold tracking-tight text-[#18704E]/50 transition group-hover:text-[#18704E]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-monument text-lg font-bold tracking-tight text-ink sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/55 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
