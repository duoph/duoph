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
      className="relative border-y border-black/6 bg-[#FAFBFA] py-12 md:py-16"
      aria-label="Trusted by"
    >
      <div className="mx-auto mb-8 max-w-7xl px-5 text-center md:px-10 lg:px-12">
        <p className="text-xs font-semibold tracking-[0.2em] text-black/40 uppercase">
          Trusted by growing businesses
        </p>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#FAFBFA] to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#FAFBFA] to-transparent md:w-28" />

        <div
          className={cn(
            "flex w-max gap-10 md:gap-16 animate-marquee",
            paused && "[animation-play-state:paused]",
          )}
        >
          {logos.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-12 shrink-0 items-center justify-center px-2 grayscale opacity-45 transition hover:opacity-70 hover:grayscale-0"
              aria-hidden={i >= PLACEHOLDER_LOGOS.length}
            >
              <span className="font-monument text-sm font-semibold tracking-tight text-black/70 md:text-base">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
