"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Answers before you{" "}
              <span className="text-[#18704E]">reach out</span>
            </>
          }
          description="Straight answers to the questions business owners ask most before booking a consultation."
        />

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={faq.question} delay={i * 0.04}>
                <div>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18704E]/40 focus-visible:ring-inset sm:py-6"
                  >
                    <span className="font-monument text-sm font-bold tracking-tight text-ink md:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition",
                        isOpen
                          ? "bg-[#18704E] text-white"
                          : "bg-ink/5 text-ink/45",
                      )}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" aria-hidden />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="pb-6 text-sm leading-relaxed text-ink/55 md:text-[15px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
