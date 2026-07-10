"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  return (
    <Section id="testimonials" dark>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#18704E]/18 blur-[110px]" />
        <div className="noise absolute inset-0 opacity-[0.1]" />
      </div>

      <SectionHeading
        light
        eyebrow="Testimonials"
        title={
          <>
            What our clients say{" "}
            <span className="text-emerald-300">after launch</span>
          </>
        }
        description="Outcomes in their words — growth, clarity, and systems that keep working."
      />

      <FadeIn className="mt-12">
        <div className="relative z-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm md:p-12 lg:p-16">
          <Quote
            className="pointer-events-none absolute top-8 right-8 h-16 w-16 text-emerald-400/15 md:h-24 md:w-24"
            aria-hidden
          />

          <div className="relative min-h-[280px] md:min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="flex gap-1"
                  aria-label={`${current.rating} out of 5 stars`}
                >
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-emerald-400 text-emerald-400"
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="font-monument mt-8 max-w-4xl text-2xl leading-snug font-medium tracking-tight text-white md:text-3xl lg:text-4xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div className="mt-10 flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#18704E] font-monument text-lg font-bold text-white"
                    aria-hidden
                  >
                    {current.company.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{current.name}</p>
                    <p className="text-sm text-white/50">{current.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-20 mt-10 flex items-center justify-between gap-4">
            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Testimonials"
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-emerald-400"
                      : "w-1.5 bg-white/25 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="relative z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition hover:border-emerald-400/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="relative z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white transition hover:border-emerald-400/40 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
