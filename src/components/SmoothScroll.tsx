"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isLite =
      window.matchMedia("(max-width: 767px)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isLite) return;

    let destroyed = false;
    let cleanup: (() => void) | undefined;

    async function init() {
      const [{ default: Lenis }, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (destroyed) return;

      const gsap = gsapMod.default;
      const { ScrollTrigger } = stMod;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        lerp: 0.09,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const tick = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.refresh();

      cleanup = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    }

    void init();

    return () => {
      destroyed = true;
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}
