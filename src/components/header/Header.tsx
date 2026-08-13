"use client";

import { useEffect, useState, type MouseEvent } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
    <header className="pointer-events-none fixed top-0 right-0 left-0 z-50 px-4 pt-4 md:px-6 md:pt-5">
      <div className="pointer-events-auto mx-auto w-full max-w-6xl">
        <nav
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 md:px-6 ${
            scrolled || menuOpen
              ? "border border-black/8 bg-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
              : "border border-white/10 bg-white/5 backdrop-blur-md"
          }`}
          aria-label="Primary"
        >
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="Duoph Technologies"
              width={100}
              height={36}
              className={`h-8 w-auto transition duration-500 md:h-9 ${
                scrolled || menuOpen ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18704E]/40 ${
                  scrolled
                    ? "text-ink/60 hover:text-[#18704E]"
                    : "text-white/70 hover:text-white"
                }`}
                onClick={(e) => onHashLinkClick(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <MagneticButton
              href="#contact"
              variant={scrolled ? "primary" : "secondary"}
              className="!px-5 !py-2.5 text-[13px]"
            >
              Book Consultation
            </MagneticButton>
          </div>

          <button
            type="button"
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18704E]/40 ${
              scrolled || menuOpen ? "text-ink" : "text-white"
            }`}
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
              className="absolute inset-0 bg-[#050f0b]/70 backdrop-blur-sm"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-24 right-4 left-4 mx-auto max-w-md rounded-3xl border border-white/10 bg-[#050f0b] p-8 shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={`m-${item.href}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        onHashLinkClick(e, item.href);
                        setMenuOpen(false);
                      }}
                      className="font-monument block py-3 text-xl font-semibold text-white transition hover:text-emerald-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <MagneticButton
                  href="#contact"
                  variant="primary"
                  className="mt-6 w-full"
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
