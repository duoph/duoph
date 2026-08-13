"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
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
    <Section id="testimonials" dark grid>
      <SectionHeading
        light
        eyebrow="Testimonials"
        title={
          <>
            What clients say{" "}
            <span className="text-emerald-300">after launch</span>
          </>
        }
        description="Outcomes in their words — growth, clarity, and systems that keep working."
      />

      <FadeIn className="mt-14">
        <div className="relative border-t border-white/10 pt-10 md:pt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
              <blockquote className="font-monument mt-8 max-w-4xl text-2xl leading-[1.2] font-medium tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#18704E] font-monument text-base font-bold text-white"
                  aria-hidden
                >
                  {current.company.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{current.name}</p>
                  <p className="text-sm text-white/45">{current.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-between gap-4">
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-emerald-400"
                      : "w-1.5 bg-white/25 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-emerald-400/40 hover:bg-white/5"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-emerald-400/40 hover:bg-white/5"
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
