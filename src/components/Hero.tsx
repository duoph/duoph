"use client";

import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedinIn } from "react-icons/fa";

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
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      );
      gsap.fromTo(
        "[data-hero='title']",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.85, delay: 0.08, ease: "power3.out" },
      );
      gsap.fromTo(
        "[data-hero='sub']",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.75, delay: 0.18, ease: "power2.out" },
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
        },
      );
      gsap.fromTo(
        "[data-hero='visual']",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.85, delay: 0.12, ease: "power3.out" },
      );

      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          gsap.to("[data-hero='bg1']", { y: self.progress * 90, duration: 0 });
          gsap.to("[data-hero='bg2']", { y: self.progress * -70, duration: 0 });
          gsap.to("[data-hero='aurora']", {
            y: self.progress * 40,
            duration: 0,
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-svh flex items-center justify-center overflow-hidden pt-24 md:px-[110px] px-[20px]"
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
        <div data-hero="aurora" className="hero-aurora z-1" />
        <div className="noise pointer-events-none absolute inset-0 opacity-[0.25]" />
        <div className="grid-overlay pointer-events-none absolute inset-0 opacity-[0.2]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div
          data-hero="kicker"
          className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-semibold tracking-widest uppercase text-black/60"
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(24,112,78,0.18)] " />
          Duoph Technologies
        </div>

        <h1
          data-hero="title"
          className="font-monument mt-10 text-[68px] leading-[0.9] sm:text-7xl md:text-[80px] font-bold tracking-tight text-black"
        >
          <span className="text-[#18704e]">Software</span> That Powers. <br />{" "}
          <span className="text-[#18704e]">Marketing</span> That Grows.
        </h1>

        <p
          data-hero="sub"
          className="mt-6 text-sm sm:text-base text-black/60 max-w-2xl"
        >
          Custom applications, scalable systems, and data-driven marketing
          strategies designed to help you operate smarter, attract customers,
          and increase revenue.
        </p>

        <div
          data-hero="visual"
          className="mt-10 flex flex-wrap items-center justify-center gap-4 flex-col md:flex-row "
        >
          <Link href="#contact">
            {" "}
            <button
              data-hero="cta"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#18704E] px-7 py-4 text-white font-semibold shadow-[0_18px_60px_rgba(24,112,78,0.22)] hover:-translate-y-px transition"
            >
              Contact Now
            </button>
          </Link>

          <div className="flex items-center justify-center gap-4">
          <Link
            data-hero="cta"
            href="https://www.facebook.com/profile.php?id=61555640383680"
            className="h-12 w-12 rounded-full border border-black/10 bg-white grid place-items-center text-black hover:text-white hover:bg-[#18704E] transition"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </Link>
          <Link
            data-hero="cta"
            href="https://x.com/duoph_tech"
            className="h-12 w-12 rounded-full border border-black/10 bg-white grid place-items-center text-black  hover:bg-[#18704E] hover:text-white transition"
            aria-label="Twitter"
          >
            <FaXTwitter size={18} />
          </Link>
          <Link
            data-hero="cta"
            href="https://www.instagram.com/duoph.technologies/"
            className="h-12 w-12 rounded-full border border-black/10 bg-white grid place-items-center text-black hover:text-white hover:bg-[#18704E] transition"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </Link>
          <Link
            data-hero="cta"
            href="https://www.linkedin.com/company/duoph-technol0gies"
            className="h-12 w-12 rounded-full border border-black/10 bg-white grid place-items-center text-black hover:text-white hover:bg-[#18704E] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn scale={18} />
          </Link>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Hero;
