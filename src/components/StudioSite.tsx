import { ArrowRight, ArrowUpRight, Code2, Monitor, Smartphone, PenTool, LayoutTemplate, Megaphone } from "lucide-react";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { faqs } from "@/data/faq";
import Contact from "@/components/Contact";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const icons = [Monitor, Code2, Smartphone, PenTool, LayoutTemplate, Megaphone];
const steps = [
  { title: "Understand", description: "We start with your business, your customers, and the problem you want to solve." },
  { title: "Plan & design", description: "Together, we agree on the scope and milestones, then design an experience around your users." },
  { title: "Build & refine", description: "We develop and test your solution, with regular demos and space for your feedback." },
  { title: "Launch & support", description: "We handle the launch and handover, then help you maintain and improve what we’ve built." },
];

export default function StudioSite() {
  return <div className="studio-site" id="top">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content">
      <section className="hero shell">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Your digital partner, from idea to growth</p>
            <h1>Good ideas deserve<br /><span>great execution.</span></h1>
            <div className="hero-bottom">
              <p>We create websites, software, and brands that help your business grow. A small, hands-on team with a clear focus on what you need.</p>
              <div className="hero-actions"><a className="pill-button" href="#contact">Let’s build something <ArrowUpRight size={18} /></a><a className="text-link" href="#services">Explore our services <ArrowRight size={17} /></a></div>
            </div>
          </div>

        </div>
        <div className="hero-note"><span>Design with purpose. Build with care.</span><span>India · Working worldwide</span></div>
      </section>
      <section id="services" className="section-space soft-section">
        <div className="shell">
          <p className="eyebrow">01 / Services</p>
          <div className="section-top"><h2>What can we help<br />you build?</h2><p>From a stronger online presence to smoother operations. Find the right service for your next step.</p></div>
          <div className="service-grid">{services.map((service, index) => {
            const Icon = icons[index];
            return <article className="service-card" key={service.id} id={`service-${service.id}`}>
              <div className="service-card-top"><Icon size={24} strokeWidth={1.5} /><span>0{index + 1}</span></div>
              <h3>{service.title}</h3><p>{service.summary}</p>
              <ul className="service-includes" aria-label={`${service.title} includes`}>{service.items.map(item => <li key={item}>{item}</li>)}</ul>
              <a className="text-link" href="#contact">Discuss {service.title.toLowerCase()} <ArrowUpRight size={16} /></a>
            </article>;
          })}</div>
          <p className="section-note">Not sure where to start? <a href="#contact">Let’s work it out together <ArrowRight size={16} /></a></p>
        </div>
      </section>
      <section id="why-duoph" className="shell section-space two-column">
        <div><p className="eyebrow">02 / About Duoph</p><h2>A small team.<br />On your side.</h2></div>
        <div className="about-copy"><p className="lead">We believe technology should make running your business easier.</p><p>We bring design, development, and digital marketing together to solve practical business problems. You work directly with the people doing the work, from our first conversation to life after launch.</p><div className="values-list"><article><h3>Clear communication</h3><p>Know what’s happening, what comes next, and where your feedback makes a difference.</p></article><article><h3>Made for your business</h3><p>Thoughtful solutions shaped around your customers, your team, and your goals.</p></article><article><h3>Support beyond launch</h3><p>A reliable partner to maintain, improve, and grow your digital presence.</p></article></div></div>
      </section>
      <section id="process" className="section-space soft-section"><div className="shell"><p className="eyebrow">03 / Our approach</p><div className="section-top"><h2>Clear steps.<br />Steady progress.</h2><p>Shared expectations from day one. Room for feedback at every stage.</p></div><div className="process-grid">{steps.map((step, index) => <article key={step.title}><span className="process-number">0{index + 1}<ArrowRight size={18} /></span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>
      <section id="industries" className="shell section-space two-column"><div><p className="eyebrow">04 / Who we work with</p><h2>Your industry.<br />Our full attention.</h2><p className="intro-copy">Every business works differently. We take the time to understand yours.</p></div><div className="faq-list">{industries.map(industry => <details key={industry.id}><summary>{industry.title}<span aria-hidden="true">+</span></summary><p>{industry.description}</p></details>)}</div></section>
      <section id="faq" className="soft-section section-space"><div className="shell two-column"><div><p className="eyebrow">05 / Common questions</p><h2>A little clarity,<br />before we begin.</h2></div><div className="faq-list">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>
      <Contact />
    </main><SiteFooter />
  </div>;
}
