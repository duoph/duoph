"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { services } from "@/data/services";

const resourceLinks = [
  { href: "#work", label: "Featured Projects" },
  { href: "#process", label: "Our Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#testimonials", label: "Testimonials" },
];

const companyLinks = [
  { href: "#why-duoph", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function onNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030a07] text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 md:px-10 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="font-monument text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s build what{" "}
            <span className="text-emerald-300">moves you forward.</span>
          </p>
        </div>

        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Duoph Technologies"
                width={120}
                height={40}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              Websites, software, branding, and digital marketing — focused on
              revenue, efficiency, and long-term growth.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink
                href={siteConfig.social.instagram}
                label="Instagram"
                icon={Instagram}
              />
              <SocialLink
                href={siteConfig.social.linkedin}
                label="LinkedIn"
                icon={Linkedin}
              />
              <SocialLink
                href={siteConfig.social.facebook}
                label="Facebook"
                icon={Facebook}
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-300/80 uppercase">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href="#services"
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-300/80 uppercase">
              Resources
            </p>
            <ul className="mt-5 space-y-3">
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-300/80 uppercase">
              Company
            </p>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-emerald-300/80 uppercase">
              Newsletter
            </p>
            <p className="mt-5 text-sm text-white/45">
              Occasional updates on digital growth — no spam.
            </p>
            <form onSubmit={onNewsletter} className="mt-4">
              <div className="flex overflow-hidden rounded-full border border-white/15 bg-white/5">
                <label htmlFor="newsletter" className="sr-only">
                  Email for newsletter
                </label>
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#18704E] text-white transition hover:brightness-110"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {subscribed ? (
                <p className="mt-2 text-xs text-emerald-300" role="status">
                  Thanks — you&apos;re on the list.
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-white/35">
            © {new Date().getFullYear()} Duoph Technologies. All rights
            reserved.
          </p>
          <p className="text-sm text-white/30">
            Serving India, UAE, Saudi Arabia, Germany & the UK
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition hover:border-emerald-400/40 hover:bg-white/5 hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
