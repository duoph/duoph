"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site";
import { MagneticButton } from "@/components/ui/MagneticButton";

function onHashLinkClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  const el = document.getElementById(href.slice(1));
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", href);
}

const Header = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-5">
      <div className="pointer-events-auto w-full max-w-5xl">
        <nav
          ref={navRef}
          className={`flex items-center justify-between gap-4 rounded-[20px] bg-white px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 sm:px-5 sm:py-3.5 md:px-7 md:backdrop-blur-xl md:bg-white/95 ${
            scrolled
              ? "shadow-[0_12px_48px_rgba(0,0,0,0.12)]"
              : "shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          }`}
          aria-label="Primary"
        >
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="Duoph Technologies"
              width={100}
              height={36}
              className="h-8 w-auto md:h-9"
              priority
            />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] font-medium text-neutral-600 transition-colors hover:text-[#18704E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18704E]/40 rounded"
                onClick={(e) => onHashLinkClick(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <MagneticButton
              href="#contact"
              variant="primary"
              className="!px-5 !py-2.5 text-[13px]"
            >
              Book Consultation
            </MagneticButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-neutral-800 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18704E]/40"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 6l12 12M18 6l-12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="pointer-events-auto fixed inset-0 z-60 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-24 right-4 left-4 mx-auto max-w-md rounded-[28px] bg-white p-8 shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((item) => (
                  <Link
                    key={`m-${item.href}`}
                    href={item.href}
                    onClick={(e) => {
                      onHashLinkClick(e, item.href);
                      setMenuOpen(false);
                    }}
                    className="font-monument text-lg font-semibold text-black transition hover:text-[#18704E]"
                  >
                    {item.label}
                  </Link>
                ))}
                <MagneticButton
                  href="#contact"
                  variant="primary"
                  className="mt-2 w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Book a Free Consultation
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Header;
