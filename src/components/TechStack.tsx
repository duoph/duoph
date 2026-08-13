"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { techStack } from "@/data/tech";
import { cn } from "@/lib/utils";

export default function TechStack() {
  const row1 = [...techStack, ...techStack];
  const row2 = [...techStack.slice().reverse(), ...techStack.slice().reverse()];

  return (
    <Section className="bg-[#f4f7f5]" id="tech">
      <SectionHeading
        align="center"
        eyebrow="Technology"
        title={
          <>
            Tools we trust to{" "}
            <span className="text-[#18704E]">build for the long term</span>
          </>
        }
        description="Modern, maintainable stacks chosen for performance, security, and growth."
        className="mx-auto"
      />

      <FadeIn className="mt-14 space-y-4 overflow-hidden">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </FadeIn>
    </Section>
  );
}

function MarqueeRow({
  items,
  reverse,
}: {
  items: typeof techStack | ReturnType<typeof techStack.slice>;
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden py-1">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#f4f7f5] to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#f4f7f5] to-transparent md:w-24" />
      <div
        className={cn(
          "flex w-max gap-3",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {items.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex shrink-0 items-center gap-3 rounded-full border border-ink/8 bg-white px-5 py-3"
          >
            <span className="font-monument text-sm font-bold tracking-tight text-ink">
              {tech.name}
            </span>
            <span className="text-[10px] font-medium tracking-wider text-ink/35 uppercase">
              {tech.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
