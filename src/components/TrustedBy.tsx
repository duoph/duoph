"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const PLACEHOLDER_LOGOS = [
  "ProductShare",
  "Marhaba",
  "I Design Interio",
  "Hridya",
  "Momo Wagon",
  "Client Six",
  "Client Seven",
  "Client Eight",
];

export default function TrustedBy() {
  const [paused, setPaused] = useState(false);
  const logos = [...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS];

  return (
    <section
      className="relative border-y border-ink/6 bg-white py-10 md:py-14"
      aria-label="Trusted by"
    >
      <div className="mx-auto mb-7 max-w-7xl px-5 text-center md:px-10 lg:px-12">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-ink/40 uppercase">
          Trusted by growing businesses
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent md:w-28" />

        <div
          className={cn(
            "flex w-max gap-12 md:gap-20 animate-marquee",
            paused && "[animation-play-state:paused]",
          )}
        >
          {logos.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-10 shrink-0 items-center justify-center px-2 opacity-40 transition hover:opacity-70"
              aria-hidden={i >= PLACEHOLDER_LOGOS.length}
            >
              <span className="font-monument text-sm font-semibold tracking-tight text-ink md:text-base">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
