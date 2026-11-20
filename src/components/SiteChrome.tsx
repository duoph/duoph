"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { navLinks } from "@/data/home";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  const isCurrent = (href: string) => href === pathname;

  return (
    <header className={`dh-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="dh-header__inner">
        <Link href="/" className="dh-header__brand" aria-label="Duoph home">
          <Image src="/images/figma/logo.png" alt="Duoph" width={168} height={58} priority />
        </Link>
        <nav className="dh-header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="dh-header__toggle"
          ref={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav id="mobile-nav" className="dh-header__mobile" aria-label="Mobile navigation" hidden={!open}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            aria-current={isCurrent(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

const exploreLinks = navLinks.filter((l) => ["Services", "About", "Our approach", "Careers"].includes(l.label));

const socials = [
  { name: "Instagram", href: siteConfig.social.instagram, icon: null },
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: { src: "/images/figma/social-linkedin.svg", w: 23, h: 22 } },
  { name: "Facebook", href: siteConfig.social.facebook, icon: { src: "/images/figma/social-facebook.svg", w: 11, h: 22 } },
];

export function SiteFooter() {
  return (
    <footer className="dh-footer">
      <Image className="dh-footer__bg" src="/images/figma/footer-bg.png" alt="" fill sizes="100vw" />
      <div className="dh-footer__inner">
        <div className="dh-footer__intro">
          <Link href="/" aria-label="Duoph home">
            <Image src="/images/figma/logo-footer.png" alt="Duoph" width={238} height={82} />
          </Link>
          <p>
            Lets shape your next digital
            <br />
            experience together.
          </p>
        </div>
        <div className="dh-footer__panel">
          <div className="dh-footer__col">
            <h2>Explore</h2>
            {exploreLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="dh-footer__col">
            <h2>Get in touch</h2>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            <Link href="/#contact">Book a consultation</Link>
          </div>
          <div className="dh-footer__col dh-footer__contact">
            <h2>Contact</h2>
            <a href={siteConfig.phoneHref}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/figma/icon-phone.svg" alt="" width={20} height={20} />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/figma/icon-mail.svg" alt="" width={20} height={20} />
              {siteConfig.email}
            </a>
            <p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/figma/icon-location.svg" alt="" width={14} height={17} />
              <span>{siteConfig.officeAddress}</span>
            </p>
          </div>
          <div className="dh-footer__col dh-footer__social">
            <h2>Social media</h2>
            <ul>
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                    {s.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.icon.src} alt="" width={s.icon.w} height={s.icon.h} />
                    ) : (
                      // The Instagram asset ships with its own glass circle.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="dh-footer__ig" src="/images/figma/social-instagram.svg" alt="" width={55} height={55} />
                    )}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              © {new Date().getFullYear()} Duoph.
              <br />
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
