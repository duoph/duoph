"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function FeaturedProjects() {
  return (
    <Section id="work" className="bg-[#FAFBFA]">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Featured Projects"
          title={
            <>
              Real products.{" "}
              <span className="text-[#18704E]">Real businesses.</span>
            </>
          }
          description="A selection of work we've shipped for founders and operators who needed technology that delivers measurable results."
        />
        <FadeIn delay={0.15}>
          <MagneticButton href="#contact" variant="ghost">
            Start your project
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </MagneticButton>
        </FadeIn>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <FadeIn delay={index * 0.06}>
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-black/8 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.04)] transition-all duration-500",
          "hover:-translate-y-2 hover:border-[#18704E]/25 hover:shadow-[0_24px_60px_rgba(24,112,78,0.12)]",
        )}
      >
        <div
          className="relative aspect-[16/10] overflow-hidden"
          style={{
            background: `linear-gradient(145deg, ${project.accent} 0%, #061410 100%)`,
          }}
        >
          <div className="noise absolute inset-0 opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_50%)]" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
            aria-hidden
          >
            <span className="font-monument text-3xl font-bold tracking-tight text-white/90 md:text-4xl">
              {project.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 3)}
            </span>
          </motion.div>
          <div className="absolute top-4 left-4">
            <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
              {project.industry}
            </span>
          </div>
          {isComingSoon ? (
            <div className="absolute top-4 right-4">
              <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#18704E]">
                Open slot
              </span>
            </div>
          ) : null}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-0 transition duration-500 group-hover:ring-2 group-hover:ring-[#18704E]/35 group-hover:ring-inset" />
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h3 className="font-monument text-xl font-bold tracking-tight text-black">
            {project.name}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span
                key={s}
                className="rounded-full bg-black/[0.04] px-2.5 py-1 text-[11px] font-medium text-black/55"
              >
                {s}
              </span>
            ))}
          </div>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-black/55">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {!isComingSoon && project.website ? (
              <a
                href={project.website}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#18704E] transition hover:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18704E]/40 rounded"
              >
                Visit Website
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            ) : null}
            <a
              href={isComingSoon ? "#contact" : "#contact"}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-black/50 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18704E]/40 rounded"
            >
              {isComingSoon ? "Book a consultation" : "View Case Study"}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
