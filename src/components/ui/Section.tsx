"use client";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
  grid?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  dark = false,
  grid = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-16 sm:py-24 md:py-32",
        dark ? "bg-[#050f0b] text-white" : "bg-transparent text-ink",
        className,
      )}
    >
      {grid ? (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0",
            dark ? "section-grid-dark" : "section-grid",
          )}
        />
      ) : null}
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
