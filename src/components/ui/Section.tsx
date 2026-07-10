"use client";

import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  dark?: boolean;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 md:py-28 lg:py-32",
        dark ? "bg-[#050f0b] text-white" : "bg-white text-black",
        className,
      )}
    >
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-7xl px-5 md:px-10 lg:px-12",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
