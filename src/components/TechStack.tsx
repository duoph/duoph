"use client";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { techStack } from "@/data/tech";

export default function TechStack() {
  return (
    <Section className="bg-[#FAFBFA]" id="tech">
      <SectionHeading
        align="center"
        eyebrow="Technology Stack"
        title={
          <>
            Tools we trust to{" "}
            <span className="text-[#18704E]">build for the long term</span>
          </>
        }
        description="Modern, maintainable technologies chosen for performance, security, and the ability to grow with your business."
        className="mx-auto"
      />

      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {techStack.map((tech, i) => (
          <FadeIn key={tech.name} delay={i * 0.03}>
            <div className="group flex h-28 flex-col items-center justify-center rounded-[20px] border border-black/8 bg-white px-4 text-center transition duration-400 hover:-translate-y-1 hover:border-[#18704E]/30 hover:shadow-[0_16px_40px_rgba(24,112,78,0.1)]">
              <span className="font-monument text-sm font-bold tracking-tight text-black transition group-hover:text-[#18704E] md:text-base">
                {tech.name}
              </span>
              <span className="mt-1.5 text-[10px] font-medium tracking-wider text-black/35 uppercase">
                {tech.category}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
