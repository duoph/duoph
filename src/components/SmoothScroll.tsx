"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -100 },
        prevent: (node) => node.tagName === "TEXTAREA",
      });
      const tick = (seconds: number) => lenis.raf(seconds * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);

      const select = gsap.utils.selector(scope);
      gsap.from(select(".hero-copy > *"), {
        y: 20, opacity: 0, duration: 0.75, stagger: 0.09,
        ease: "power2.out", clearProps: "transform,opacity",
      });
      select(".section-top, .two-column > div:first-child, .service-card, .process-grid article, .job-card, .values-list article").forEach((element: HTMLElement) => {
        gsap.from(element, {
          y: 22, opacity: 0, duration: 0.65, ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: element, start: "top 94%", once: true },
        });
      });
      // Accordion expansion changes downstream trigger positions.
      const refresh = () => ScrollTrigger.refresh();
      const details = select("details") as HTMLDetailsElement[];
      details.forEach(element => element.addEventListener("toggle", refresh));
      let active = true;
      void document.fonts.ready.then(() => { if (active) ScrollTrigger.refresh(); });
      return () => {
        active = false;
        details.forEach(element => element.removeEventListener("toggle", refresh));
        gsap.ticker.remove(tick);
        lenis.off("scroll", ScrollTrigger.update);
        lenis.destroy();
      };
    }, scope);
    return () => media.revert();
  }, [pathname]);

  return <div ref={scope}>{children}</div>;
}
