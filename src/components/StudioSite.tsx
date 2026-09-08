"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Menu,
  X,
  Globe2,
} from "lucide-react";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { companyStats, navLinks, siteConfig } from "@/data/site";
import { processSteps } from "@/data/process";
import { industries } from "@/data/industries";
import { whyChoose } from "@/data/whyChoose";
import { techStack } from "@/data/tech";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faq";
import Contact from "@/components/Contact";

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

export default function StudioSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quote, setQuote] = useState(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  return (
    <div className="studio-site" id="top">
      <a className="skip-link" href="#work">
        Skip to content
      </a>
      <header className="studio-header">
        <div className="shell header-inner">
          <a href="#top" aria-label="Duoph home" className="brand">
            <Image
              src="/logo.png"
              alt="Duoph"
              width={128}
              height={44}
              priority
            />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.slice(0, 3).map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#why-duoph">About us</a>
            <Link href="/careers">Careers</Link>
          </nav>
          <a className="header-cta" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="mobile-nav shell"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <ArrowUpRight size={17} />
              </a>
            ))}
            <a href="#why-duoph" onClick={() => setMenuOpen(false)}>
              About us
              <ArrowUpRight size={17} />
            </a>
            <Link href="/careers" onClick={() => setMenuOpen(false)}>
              Careers <ArrowUpRight size={17} />
            </Link>
          </nav>
        )}
      </header>

      <main>
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <span>
              <i className="status-dot" />
              Independent minds. Shared ambition.
            </span>
            <span className="hero-location">
              Based in India. Building worldwide.
            </span>
          </div>
          <div className="hero-main">
            <div className="hero-copy">
              <h1 id="hero-title">
                Good thinking.
                <br />
                Great design.
                <br />
                <span>Real impact.</span>
              </h1>
              <p>
                We build websites, software, and brands that move your business
                forward. Thoughtfully designed. Built to last.
              </p>
              <div className="hero-actions">
                <a className="pill-button" href="#contact">
                  Start a conversation <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#work">
                  Explore our work <ArrowDown size={16} />
                </a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-grid" />
              <span className="art-caption">THINK / DESIGN / BUILD</span>
              <div className="duoph-sculpture">
                <div className="sculpture-loop loop-one" />
                <div className="sculpture-loop loop-two" />
              </div>
              <div className="art-footer">
                <span>
                  Different perspectives.
                  <br />
                  One way forward.
                </span>
                <span className="art-symbol">↗</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Small team. Big on the details.</span>
            <a href="#work">
              Scroll to discover <ArrowDown size={14} />
            </a>
          </div>
        </section>

        <section
          className="client-strip shell"
          aria-label="Brands and sample identities"
        >
          <div className="client-strip-heading">
            <p>
              In good company
              <span>A few familiar names. A shared ambition.</span>
            </p>
            <span className="client-strip-note">Built on collaboration.</span>
          </div>
          <div className="client-names">
            <div className="client-logo">
              <span className="client-finsl">
                <span aria-hidden="true">↗</span>finsl
                <span className="finsl-period">.</span>
              </span>
            </div>
            <div className="client-logo">
              <span className="client-product">
                productshare<span>®</span>
              </span>
            </div>
            <div className="client-logo">
              <span className="client-marhaba">marhaba</span>
            </div>
            <div className="client-logo">
              <span className="client-interio">
                I DESIGN <small>INTERIO</small>
              </span>
            </div>
            <div className="client-logo">
              <span className="client-hridya">
                hridya<span>✳</span>
              </span>
            </div>
            <div className="client-logo">
              <span className="client-momo">MOMO WAGON</span>
            </div>
            <div className="client-logo sample-logo">
              <span className="client-northline">
                northline<span aria-hidden="true">↗</span>
              </span>
              <small>Sample brand</small>
            </div>
            <div className="client-logo sample-logo">
              <span className="client-aven">aven & co.</span>
              <small>Sample brand</small>
            </div>
          </div>
        </section>

        <section className="work-section shell section-space" id="work">
          <SectionLabel number="01">Selected work</SectionLabel>
          <div className="section-top">
            <h2>
              Built with purpose.
              <br />
              <span>Made to make a difference.</span>
            </h2>
            <p>
              A few of the businesses we’ve helped
              <br className="desktop-break" /> turn ambition into something
              real.
            </p>
          </div>
          <div className="featured-grid">
            {projects.slice(0, 2).map((project, index) => (
              <article className="project-card" key={project.id}>
                <a
                  className={`project-art project-art-${project.id}`}
                  href={`#project-${project.id}`}
                  aria-label={`Read about ${project.name}`}
                >
                  <span className="project-art-index">
                    0{index + 1} / BRAND & DIGITAL
                  </span>
                  {index === 0 ? (
                    <div className="product-art">
                      <span className="product-emblem">
                        p<span>↗</span>
                      </span>
                      <strong>
                        Good products.
                        <br />
                        Great connections.
                      </strong>
                      <span className="product-wordmark">productshare®</span>
                    </div>
                  ) : (
                    <div className="seafood-art">
                      <span className="seafood-line" />
                      <span className="seafood-subtitle">
                        FRESH FROM THE SEA. MADE WITH SOUL.
                      </span>
                      <strong>marhaba</strong>
                      <span className="seafood-caption">S E A F O O D</span>
                      <span className="seafood-line bottom-line" />
                    </div>
                  )}
                  <span className="project-art-note">Brand exploration</span>
                  <span className="round-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </a>
                <div className="project-info" id={`project-${project.id}`}>
                  <div>
                    <h3>{project.name}</h3>
                    <span>{project.industry}</span>
                  </div>
                  <span className="project-services">
                    {project.services.join(" / ")}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                <a className="text-link project-discuss" href="#contact">
                  Discuss similar work <ArrowUpRight size={14} />
                </a>
              </article>
            ))}
          </div>
          <div className="more-projects">
            {projects.slice(2, 5).map((project, index) => (
              <article key={project.id}>
                <span className="row-index">0{index + 3}</span>
                <div>
                  <h3>{project.name}</h3>
                  <span className="small-meta">
                    {project.industry} · {project.services.join(" / ")}
                  </span>
                  <p>{project.description}</p>
                </div>
                <a
                  href="#contact"
                  className="small-project-link"
                  aria-label={`Discuss a project like ${project.name}`}
                >
                  <ArrowUpRight size={22} />
                </a>
              </article>
            ))}
          </div>
          <div className="work-footnote">
            <span>Your next project could be here.</span>
            <a href="#contact" className="text-link">
              Let’s build it together <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="services-section section-space" id="services">
          <div className="shell two-column">
            <div className="section-intro">
              <SectionLabel number="02">What we do</SectionLabel>
              <h2>
                Everything you need.
                <br />
                <span>Nothing you don’t.</span>
              </h2>
              <p>
                From the first idea to the next stage of growth. Strategy,
                design, and technology, working together.
              </p>
              <a href="#contact" className="text-link">
                Find the right fit <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <details
                  key={service.id}
                  className="service-item"
                  name="services"
                >
                  <summary>
                    <span className="row-index">0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <Plus className="detail-plus" size={20} />
                    <Minus className="detail-minus" size={20} />
                  </summary>
                  <div className="service-detail">
                    <p>{service.summary}</p>
                    <div className="tags">
                      {service.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <h4>Who it’s for</h4>
                    <p>{service.forWhom}</p>
                    <h4>What you gain</h4>
                    <p>{service.benefit}</p>
                    <a href="#contact" className="text-link">
                      Talk about {service.title.toLowerCase()}{" "}
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="why-duoph" className="about-section shell section-space">
          <SectionLabel number="03">A little about us</SectionLabel>
          <div className="about-heading">
            <h2>
              Good people.
              <br />
              Doing <span>good work.</span>
            </h2>
            <div>
              <p className="about-statement">
                We’re a small, hands-on team with a simple belief: technology
                should make business better.
              </p>
              <p>
                We design systems that attract customers, automate the busywork,
                and scale with you. From our first conversation to life after
                launch, we bring clear thinking, honest communication, and care
                for every detail.
              </p>
            </div>
          </div>
          <div className="stats-grid">
            {companyStats.map((stat) => (
              <div key={stat.label}>
                <strong>
                  {stat.value}
                  {stat.suffix}
                </strong>
                <span>{stat.label}</span>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="values-grid">
            {whyChoose.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="process-section section-space" id="process">
          <div className="shell">
            <SectionLabel number="04">How we work</SectionLabel>
            <div className="section-top">
              <h2>
                A clear process.
                <br />
                <span>A shared direction.</span>
              </h2>
              <p>
                No mystery. No disappearing acts.
                <br />
                Just steady progress, together.
              </p>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article key={step.id}>
                  <span className="process-number">
                    0{index + 1}
                    <ArrowRight size={17} />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="industries-section shell section-space"
          id="industries"
        >
          <div className="two-column">
            <div className="section-intro">
              <SectionLabel number="05">Who we work with</SectionLabel>
              <h2>
                Different industries.
                <br />
                <span>Same commitment.</span>
              </h2>
              <p>
                Every business has its own challenges. We take the time to
                understand yours.
              </p>
            </div>
            <div className="industry-list">
              {industries.map((industry) => (
                <details key={industry.id}>
                  <summary>
                    {industry.title}
                    <Plus className="detail-plus" size={17} />
                    <Minus className="detail-minus" size={17} />
                  </summary>
                  <p>{industry.description}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="tech-row">
            <p>
              Our toolkit.
              <br />
              <span>Chosen for the job.</span>
            </p>
            <div>
              {techStack.map((tech) => (
                <span key={tech.name} title={tech.category}>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial-section" id="testimonials">
          <div className="shell quote-layout">
            <div>
              <SectionLabel number="06">In their words</SectionLabel>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
            </div>
            <div>
              <div
                className="quote-content"
                aria-live="polite"
                aria-atomic="true"
              >
                <blockquote>“{testimonials[quote].quote}”</blockquote>
                <p className="quote-attribution">
                  {testimonials[quote].company}
                  <span>
                    {testimonials[quote].name} · {testimonials[quote].rating}/5
                    rating
                  </span>
                </p>
              </div>
              <div className="quote-controls">
                <div className="quote-dots">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.id}
                      aria-label={`Show testimonial from ${item.company}`}
                      aria-pressed={index === quote}
                      onClick={() => setQuote(index)}
                    />
                  ))}
                </div>
                <span>
                  0{quote + 1} / 0{testimonials.length}
                </span>
                <button
                  className="quote-next"
                  aria-label="Next testimonial"
                  onClick={() => setQuote((quote + 1) % testimonials.length)}
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="faq-section shell section-space two-column"
          id="faq"
        >
          <div className="section-intro">
            <SectionLabel number="07">Good questions</SectionLabel>
            <h2>
              A little clarity.
              <br />
              <span>Before we begin.</span>
            </h2>
            <p>
              Something else on your mind?
              <br />
              <a href={`mailto:${siteConfig.email}`} className="text-link">
                We’re happy to help <ArrowUpRight size={16} />
              </a>
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} name="faq">
                <summary>
                  {faq.question}
                  <Plus className="detail-plus" size={18} />
                  <Minus className="detail-minus" size={18} />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <footer className="studio-footer">
        <div className="shell">
          <div className="footer-top">
            <a href="#top" className="brand" aria-label="Duoph home">
              <Image src="/logo.png" alt="Duoph" width={128} height={44} />
            </a>
            <p>
              Thoughtful technology.
              <br />
              Lasting partnerships.
            </p>
            <a href="#top" className="text-link">
              Back to top <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="footer-grid">
            <div>
              <span className="footer-label">Say hello</span>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp <ArrowUpRight size={14} />
              </a>
            </div>
            <div>
              <span className="footer-label">Explore</span>
              <Link href="/careers">Careers</Link>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <div>
              <span className="footer-label">Follow along</span>
              {Object.entries(siteConfig.social).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  {name}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
            <div>
              <span className="footer-label">Where we work</span>
              <p>
                <Globe2 size={16} /> India · Connected worldwide
              </p>
              <p>
                India, UAE, Saudi Arabia,
                <br />
                Germany & the UK
              </p>
              <span className="footer-label founders-label">
                Meet the founders
              </span>
              <a
                href={siteConfig.founders.praveen}
                target="_blank"
                rel="noreferrer"
              >
                Praveen Prasad <ArrowUpRight size={14} />
              </a>
              <a
                href={siteConfig.founders.hadi}
                target="_blank"
                rel="noreferrer"
              >
                Hadi Razal <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Duoph Technologies. All rights
              reserved.
            </span>
            <span>Made with purpose. Built with care.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
