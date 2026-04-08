"use client";

import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.set("[data-hero]", { willChange: "transform,opacity" });
      gsap.fromTo(
        "[data-hero='kicker']",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
      gsap.fromTo(
        "[data-hero='title']",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.85, delay: 0.08, ease: "power3.out" }
      );
      gsap.fromTo(
        "[data-hero='sub']",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.75, delay: 0.18, ease: "power2.out" }
      );
      gsap.fromTo(
        "[data-hero='cta']",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.28,
          ease: "power2.out",
          stagger: 0.08,
        }
      );
      gsap.fromTo(
        "[data-hero='visual']",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.85, delay: 0.12, ease: "power3.out" }
      );

      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.to("[data-hero='bg1']", { y: self.progress * 90, duration: 0 });
          gsap.to("[data-hero='bg2']", { y: self.progress * -70, duration: 0 });
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-svh flex items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 z-0">
        <div
          data-hero="bg1"
          className="absolute top-1/4 left-[6%] w-[520px] h-[520px] bg-primary/12 rounded-full blur-[140px]"
        />
        <div
          data-hero="bg2"
          className="absolute bottom-1/4 right-[6%] w-[520px] h-[520px] bg-primary/14 rounded-full blur-[140px]"
        />
        <div className="noise pointer-events-none absolute inset-0 opacity-[0.35]" />
        <div className="grid-overlay pointer-events-none absolute inset-0 opacity-[0.55]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div data-hero="kicker" className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-semibold tracking-widest uppercase text-black/60">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(24,112,78,0.18)]" />
          Business Agency
        </div>

        <h1 data-hero="title" className="mt-10 text-[68px] leading-[0.9] sm:text-7xl md:text-[140px] font-extrabold tracking-tight text-black">
          DUOPH
        </h1>

        <p data-hero="sub" className="mt-6 text-sm sm:text-base text-black/60 max-w-2xl">
          We craft modern websites and growth systems for brands that want clean design, strong performance, and measurable outcomes.
        </p>

        <div data-hero="visual" className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            data-hero="cta"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-7 py-4 text-white font-semibold shadow-[0_18px_60px_rgba(24,112,78,0.22)] hover:-translate-y-px transition"
          >
            Get Started
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>

          <a
            data-hero="cta"
            href="#"
            className="h-12 w-12 rounded-xl border border-black/10 bg-white grid place-items-center text-black/70 hover:text-black hover:bg-black/5 transition"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a
            data-hero="cta"
            href="#"
            className="h-12 w-12 rounded-xl border border-black/10 bg-white grid place-items-center text-black/70 hover:text-black hover:bg-black/5 transition"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a
            data-hero="cta"
            href="#"
            className="h-12 w-12 rounded-xl border border-black/10 bg-white grid place-items-center text-black/70 hover:text-black hover:bg-black/5 transition"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-black/40">Scroll to Explore</span>
        <div className="w-px h-12 bg-linear-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

