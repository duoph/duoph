"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact Us" },
];

const Header = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        nav,
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" }
      );

      ScrollTrigger.create({
        start: 0,
        end: 99999,
        onUpdate: (self) => {
          nav.dataset.scrolled = self.scroll() > 12 ? "true" : "false";
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="pointer-events-none fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-6">
      <div className="pointer-events-auto w-full max-w-4xl">
        <nav
          ref={navRef}
          data-scrolled="false"
          className="flex items-center justify-between gap-6 rounded-[20px] bg-white px-5 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 md:px-8 md:py-4 data-[scrolled=true]:shadow-[0_12px_48px_rgba(0,0,0,0.12)]"
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 text-black"
          >
            
                <Image
                  src="/logo.png"
                  alt="Duoph"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                  priority
                  onError={() => setLogoOk(false)}
                />
           
        
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-neutral-600 transition-colors hover:text-[#18704E]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-neutral-800 md:hidden"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
