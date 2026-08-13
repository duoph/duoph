"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { projects, type Project } from "@/data/projects";
import { useLiteMotion } from "@/hooks/useLiteMotion";
import { cn } from "@/lib/utils";

export default function FeaturedProjects() {
  const lite = useLiteMotion();

  return (
    <section id="work" className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Real products.{" "}
                <span className="text-[#18704E]">Real businesses.</span>
              </>
            }
            description="Work we've shipped for founders and operators who needed technology that delivers measurable results."
          />
          <FadeIn delay={0.12}>
            <MagneticButton href="#contact" variant="outline-dark">
              Start your project
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </MagneticButton>
          </FadeIn>
        </div>
      </div>

      {lite ? <ProjectsStack /> : <ProjectsHorizontal />}
    </section>
  );
}

function ProjectsStack() {
  return (
    <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:mt-16 sm:px-6 md:grid-cols-2 md:px-10 lg:px-12 xl:grid-cols-3">
      {projects.map((project, i) => (
        <FadeIn key={project.id} delay={i * 0.05}>
          <ProjectPanel project={project} />
        </FadeIn>
      ))}
    </div>
  );
}

function ProjectsHorizontal() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    async function init() {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      if (cancelled) return;

      const gsap = gsapMod.default;
      const { ScrollTrigger } = stMod;
      gsap.registerPlugin(ScrollTrigger);

      const getShift = () =>
        Math.max(0, track!.scrollWidth - pin!.clientWidth);

      const tween = gsap.to(track, {
        x: () => -getShift(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${getShift()}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => setProgress(self.progress),
        },
      });

      // Let layout/fonts settle, then refresh measurements
      const t1 = window.setTimeout(() => ScrollTrigger.refresh(), 50);
      const t2 = window.setTimeout(() => ScrollTrigger.refresh(), 300);

      cleanup = () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { clearProps: "transform" });
      };
    }

    void init();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div ref={pinRef} className="relative mt-10">
      <div className="flex h-screen flex-col justify-center">
        <div className="mx-auto mb-6 flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-10 lg:px-12">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-ink/40 uppercase">
            Scroll to explore
          </p>
          <div className="h-1 w-28 overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full rounded-full bg-[#18704E]"
              style={{
                width: `${Math.min(100, Math.max(4, progress * 100))}%`,
              }}
            />
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max gap-6 pl-4 will-change-transform sm:pl-6 md:gap-8 md:pl-10 lg:pl-12"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-[min(520px,78vw)] shrink-0 md:w-[min(480px,38vw)]"
              >
                <ProjectPanel project={project} large />
              </div>
            ))}
            <div className="w-4 shrink-0 sm:w-6 md:w-10 lg:w-12" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectPanel({
  project,
  large,
}: {
  project: Project;
  large?: boolean;
}) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white",
        large && "min-h-[420px]",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          large ? "aspect-[16/11]" : "aspect-[16/10]",
        )}
        style={{
          background: `linear-gradient(145deg, ${project.accent} 0%, #061410 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_50%)]" />
        <div className="absolute inset-0 flex items-end p-6 md:p-8">
          <span className="font-monument text-4xl font-bold tracking-tight text-white/90 md:text-5xl">
            {project.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3)}
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
            {project.industry}
          </span>
        </div>
        {isComingSoon ? (
          <div className="absolute top-4 right-4">
            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#18704E]">
              Open slot
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
        <h3 className="font-monument text-xl font-bold tracking-tight text-ink">
          {project.name}
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.services.map((s) => (
            <span
              key={s}
              className="rounded-full bg-ink/[0.04] px-2.5 py-1 text-[11px] font-medium text-ink/55"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/55">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          {!isComingSoon && project.website ? (
            <a
              href={project.website}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#18704E] transition hover:gap-2"
            >
              Visit Website
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          ) : null}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/45 transition hover:text-ink"
          >
            {isComingSoon ? "Book a consultation" : "Discuss similar work"}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}
