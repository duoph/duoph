"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        nav,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      );

      ScrollTrigger.create({
        start: 0,
        end: 99999,
        onUpdate: (self) => {
          nav.dataset.scrolled = self.scroll() > 20 ? "true" : "false";
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      data-scrolled="false"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 data-[scrolled=true]:bg-white/80 data-[scrolled=true]:backdrop-blur-md data-[scrolled=true]:py-4 data-[scrolled=true]:border-b data-[scrolled=true]:border-black/10 bg-transparent py-6"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
          DUO<span className="text-primary">PH</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium text-black/70 hover:text-black transition-colors">
            Services
          </Link>
          <Link href="#contact" className="px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/20">
            Get Started
          </Link>
        </div>

        <button className="md:hidden text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

