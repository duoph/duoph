"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#why-duoph", label: "About" },
  { href: "/#process", label: "Our approach" },
  { href: "/careers", label: "Careers" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return <header className="studio-header">
    <div className="shell header-inner">
      <Link href="/" className="brand" aria-label="Duoph home"><Image src="/logo.png" alt="Duoph" width={128} height={44} priority /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}</nav>
      <Link className="header-cta" href="/#contact">Let’s talk <ArrowUpRight size={16} /></Link>
      <button className="menu-toggle" ref={toggle} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav id="mobile-nav" className="mobile-nav shell" aria-label="Mobile navigation" hidden={!open}>{links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined}>{link.label}<ArrowUpRight size={16} /></Link>)}<Link href="/#contact" onClick={() => setOpen(false)}>Contact<ArrowUpRight size={16} /></Link></nav>
  </header>;
}

export function SiteFooter() {
  return <footer className="studio-footer"><div className="shell">
    <div className="footer-top">
      <div><Link href="/" className="brand" aria-label="Duoph home"><Image src="/logo.png" alt="Duoph" width={128} height={44} /></Link><p>Thoughtful technology.<br />Lasting partnerships.</p></div>
      <div><span className="footer-label">Explore</span>{links.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>
      <div><span className="footer-label">Get in touch</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.phoneHref}>{siteConfig.phone}</a><a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a></div>
      <div><span className="footer-label">Find us online</span>{Object.entries(siteConfig.social).map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer" className="social-link">{name} ↗</a>)}</div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Duoph Technologies. All rights reserved.</span><span>Based in India. Working worldwide.</span></div>
  </div></footer>;
}
