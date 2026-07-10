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
    <Section id="services" className="bg-[#FAFBFA]">
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            Everything you need to{" "}
            <span className="text-[#18704E]">grow digitally</span>
          </>
        }
        description="From your first website to full business automation — each service is scoped around who it's for and the commercial result it should deliver."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <FadeIn>
          <div
            className="flex flex-col gap-2"
            role="tablist"
            aria-label="Services"
          >
            {services.map((service, i) => {
              const SIcon = icons[i] ?? Globe;
              const isActive = i === active;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition duration-300",
                    isActive
                      ? "border-[#18704E]/30 bg-white shadow-[0_12px_40px_rgba(24,112,78,0.1)]"
                      : "border-transparent bg-transparent hover:border-black/8 hover:bg-white/70",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition",
                      isActive
                        ? "bg-[#18704E] text-white"
                        : "bg-black/5 text-black/50 group-hover:text-[#18704E]",
                    )}
                  >
                    <SIcon className="h-4 w-4" aria-hidden />
                  </span>
                  <span
                    className={cn(
                      "font-monument text-sm font-bold tracking-tight md:text-base",
                      isActive ? "text-[#18704E]" : "text-black/70",
                    )}
                  >
                    {service.title}
                  </span>
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-[28px] border border-black/8 bg-white p-8 shadow-[0_16px_50px_rgba(0,0,0,0.04)] md:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18704E]/10 text-[#18704E]">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-monument text-2xl font-bold tracking-tight text-black md:text-3xl">
                {current.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-black/60">
                {current.summary}
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#FAFBFA] p-5">
                  <p className="text-xs font-semibold tracking-widest text-[#18704E] uppercase">
                    Who it&apos;s for
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">
                    {current.forWhom}
                  </p>
                </div>
                <div className="rounded-2xl bg-[#FAFBFA] p-5">
                  <p className="text-xs font-semibold tracking-widest text-[#18704E] uppercase">
                    Business benefit
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-black/65">
                    {current.benefit}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {current.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/8 px-3.5 py-1.5 text-xs font-medium text-black/60"
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
