"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Cpu,
  Smartphone,
  Palette,
  PenTool,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const icons = [Globe, Cpu, Smartphone, Palette, PenTool, Megaphone];

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const Icon = icons[active] ?? Globe;

  return (
    <Section id="services" className="bg-[#f4f7f5]">
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            Everything you need to{" "}
            <span className="text-[#18704E]">grow digitally</span>
          </>
        }
        description="From your first website to full business automation — each service is scoped around commercial results."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <FadeIn>
          <div
            className="flex flex-col"
            role="tablist"
            aria-label="Services"
          >
            {services.map((service, i) => {
              const isActive = i === active;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex w-full items-center justify-between gap-4 border-b border-ink/10 py-5 text-left transition",
                    isActive ? "border-[#18704E]" : "hover:border-ink/25",
                  )}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={cn(
                        "font-monument text-xs font-bold tracking-tight",
                        isActive ? "text-[#18704E]" : "text-ink/30",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-monument text-base font-bold tracking-tight sm:text-lg",
                        isActive ? "text-ink" : "text-ink/45",
                      )}
                    >
                      {service.title}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition",
                      isActive ? "bg-[#18704E] scale-125" : "bg-ink/15",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl bg-[#050f0b] p-8 text-white sm:p-10 md:min-h-[420px]"
            >
              <div
                className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#18704E]/25 blur-3xl"
                aria-hidden
              />
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#18704E] text-white">
                <Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-monument text-2xl font-bold tracking-tight md:text-3xl">
                {current.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/60">
                {current.summary}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-300/80 uppercase">
                    Who it&apos;s for
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {current.forWhom}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-300/80 uppercase">
                    Business benefit
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {current.benefit}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {current.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <MagneticButton href="#contact" variant="primary">
                  Discuss this service
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </MagneticButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </FadeIn>
      </div>
    </Section>
  );
}
