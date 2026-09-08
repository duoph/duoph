"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

/** One clock drives smooth scrolling and the scene's scroll-linked motion. */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add({
      desktop: "(min-width: 768px) and (pointer: fine)",
      touch: "(max-width: 767px), (pointer: coarse)",
      reduced: "(prefers-reduced-motion: reduce)",
    }, (context) => {
      if (context.conditions?.reduced) return;
      const desktop = context.conditions?.desktop;
      let lenis: Lenis | undefined;
      const tick = (seconds: number) => lenis?.raf(seconds * 1000);
      if (desktop) {
        lenis = new Lenis({
          lerp: 0.085,
          smoothWheel: true,
          anchors: { offset: -105 },
          syncTouch: false,
        });
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(tick);
      }

      gsap.to(".reading-progress", {
        scaleX: 1, ease: "none",
        scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom bottom", scrub: true },
      });
      gsap.timeline({ scrollTrigger: {
        trigger: ".hero", start: "top top", end: "bottom top", scrub: 1,
      } })
        .to(".architecture-sculpture", { rotationX: 48, rotationZ: desktop ? 25 : -15, y: -12, ease: "none" }, 0)
        .to(".sculpture-slab", { z: (index) => (index - 2) * (desktop ? 64 : 45), rotationZ: (index) => (index - 2) * 9, ease: "none" }, 0)
        .to(".sculpture-shadow", { scale: 1.15, opacity: 0.12, ease: "none" }, 0)
        .to(".art-grid", { yPercent: 12, ease: "none" }, 0);

      gsap.utils.toArray<HTMLElement>(".section-top, .about-heading, .quote-layout").forEach((element) => {
        gsap.from(element, {
          y: 35, rotationX: desktop ? 8 : 0, transformPerspective: 1000,
          duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 93%", toggleActions: "play none none reverse" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".process-grid article").forEach((element, index) => {
        gsap.from(element, {
          rotationY: desktop ? -18 : 0, rotationX: desktop ? 10 : 0, y: 45,
          transformPerspective: 900, transformOrigin: "left center", ease: "none",
          scrollTrigger: { trigger: element, start: `top ${92 - index * 3}%`, end: "top 55%", scrub: 0.7 },
        });
      });
      gsap.utils.toArray<HTMLElement>(".project-art").forEach((element) => {
        gsap.from(element, {
          rotationX: desktop ? 10 : 0, z: -30, transformPerspective: 1100,
          ease: "none", scrollTrigger: { trigger: element, start: "top bottom", end: "top 45%", scrub: 0.7 },
        });
      });
      let active = true;
      void document.fonts.ready.then(() => { if (active) ScrollTrigger.refresh(); });
      return () => {
        active = false;
        gsap.ticker.remove(tick);
        lenis?.destroy();
      };
    }, scope);
    return () => media.revert();
  }, []);

  return <div ref={scope}>{children}</div>;
}
