"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLiteMotion } from "@/hooks/useLiteMotion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  const lite = useLiteMotion();

  const content = (
    <>
      {eyebrow ? (
        <p
          className={cn(
            "mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase",
            light ? "text-emerald-300/90" : "text-[#18704E]",
          )}
        >
          <span
            className={cn(
              "h-px w-8",
              light ? "bg-emerald-300/60" : "bg-[#18704E]/60",
            )}
            aria-hidden
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-monument text-[1.75rem] leading-[1.12] font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem]",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-[15px] leading-relaxed sm:text-base md:text-lg",
            light ? "text-white/60" : "text-ink/55",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </>
  );

  const classes = cn(
    "max-w-3xl",
    align === "center" && "mx-auto text-center",
    className,
  );

  if (lite) {
    return <div className={classes}>{content}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={classes}
    >
      {content}
    </motion.div>
  );
}
