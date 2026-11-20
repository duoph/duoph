import Image from "next/image";
import ClientStrip from "@/components/home/ClientStrip";
import HeroVideo from "@/components/home/HeroVideo";
import { ArrowIcon, PillLink, SectionHead, Tag } from "@/components/home/ui";
import { aboutPillars, differences, homeServices, products } from "@/data/home";
import { faqs } from "@/data/faq";

export function Hero() {
  return (
    <section className="dh-hero dh-frame" aria-labelledby="hero-title">
      <HeroVideo />
      <div className="dh-hero__shade" aria-hidden="true" />
      <div className="dh-hero__content">
        <Tag>Digital solutions. Real impact.</Tag>
        <h1 id="hero-title" className="dh-hero__title">
          Your Vision.Our Expertise.
          <br />
          Better Digital Experiences.
        </h1>
        <p className="dh-hero__lead">
          We transform ambitious ideas into powerful digital solutions. From websites and software to branding and
          marketing, we help businesses build, grow, and stand out.
        </p>
        <div className="dh-hero__actions">
          <PillLink href="#contact">Let&apos;s Build Something</PillLink>
          <PillLink href="#products">Explore Our Products</PillLink>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="dh-section dh-services" aria-labelledby="services-title">
      <div className="dh-wrap">
        <SectionHead
          id="services-title"
          tag="What we do"
          title="Everything you need to move your business forward."
          intro="From your first digital presence to complex business solutions, we bring design, technology, and strategy together under one roof."
        />
      </div>
      <ul className="dh-services__track" tabIndex={0} aria-label="Our services, scroll horizontally for more">
        {homeServices.map((service) => (
          <li key={service.id} className="dh-service" id={`service-${service.id}`}>
            <h3>
              {service.title[0]}
              <br />
              {service.title[1]}
            </h3>
            <p>{service.summary}</p>
            <div className="dh-service__media">
              <Image src={service.image} alt="" fill sizes="314px" />
              <a className="dh-chip" href="#contact" aria-label={`Explore ${service.title.join(" ")}`}>
                Explore <ArrowIcon variant="white" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="dh-section dh-wrap dh-about" aria-labelledby="about-title">
      <div className="dh-about__hero">
        <Image className="dh-about__img" src="/images/figma/team.png" alt="The Duoph team working together" fill sizes="(max-width: 1920px) 100vw, 1840px" />
        <div className="dh-about__shade" aria-hidden="true" />
        <div className="dh-about__content">
          <Tag>Who we are</Tag>
          <h2 id="about-title" className="dh-h2 dh-h2--light">
            Good people. Smart thinking.
            <br />
            Better digital solutions.
          </h2>
          <p>
            We&apos;re a team of designers, developers, and digital thinkers who believe technology should make business
            easier, not more complicated.
          </p>
          <p>
            At DUOPH, we combine creative thinking with technical expertise to build solutions that solve real problems.
            From understanding your vision to delivering the final product, we work alongside you at every step.
          </p>
        </div>
      </div>
      <ul className="dh-about__pillars">
        {aboutPillars.map((pillar) => (
          <li key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Difference() {
  return (
    <section id="why-duoph" className="dh-section dh-wrap" aria-labelledby="diff-title">
      <SectionHead
        id="diff-title"
        tag="The Duoph difference"
        title={
          <>
            More than a service provider.
            <br />A team invested in your growth.
          </>
        }
      />
      <ul className="dh-diff">
        {differences.map((item) => (
          <li key={item.title} className="dh-diff__card">
            <div className="dh-diff__art" aria-hidden="true">
              <Image src={item.image} alt="" width={288} height={288} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="dh-section dh-wrap dh-faq" aria-labelledby="faq-title">
      <div className="dh-faq__intro">
        <Tag>Got questions?</Tag>
        <h2 id="faq-title" className="dh-h2">
          A little clarity before we get started.
        </h2>
      </div>
      <div className="dh-faq__list">
        {faqs.map((faq, index) => (
          <details key={faq.question} name="faq" className="dh-faq__item">
            <summary>
              <span className="dh-num">{String(index + 1).padStart(2, "0")}</span>
              <span className="dh-faq__q">{faq.question}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="dh-faq__chev" src="/images/figma/faq-chevron.svg" alt="" width={45} height={45} />
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section id="products" className="dh-section dh-wrap" aria-labelledby="products-title">
      <SectionHead
        id="products-title"
        tag="Our products"
        title="Technology built for real-world business challenges."
        intro="At Duoph, we build digital products that simplify complex workflows, improve business efficiency, and create better ways to work."
      />
      <ul className="dh-products">
        {products.map((product) => (
          <li key={product.name} className="dh-product">
            <div className="dh-product__media">
              <Image src={product.image} alt={`${product.name} on laptop and mobile screens`} fill sizes="(max-width: 900px) 100vw, 563px" />
            </div>
            <h3>{product.name}</h3>
            <p className="dh-product__cat">{product.category}</p>
            <p className="dh-product__tagline">{product.tagline}</p>
            <p className="dh-product__desc">{product.description}</p>
            <ul className="dh-product__features" aria-label={`${product.name} features`}>
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <PillLink
              href={product.href}
              target="_blank"
              rel="noopener"
              aria-label={`Explore ${product.name} (opens in a new tab)`}
            >
              Explore {product.name}
            </PillLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Clients() {
  return (
    <section className="dh-section dh-clients" aria-labelledby="clients-title">
      <div className="dh-wrap">
        <SectionHead
          id="clients-title"
          tag="Trusted by businesses"
          title={
            <>
              Good partnerships create
              <br />
              great work.
            </>
          }
          intro={
            <>
              From growing startups to established businesses, we&apos;re proud to collaborate with clients across India,
              Germany, and the UAE.
              <br />
              Every partnership is built on trust, creativity, and a shared vision to create meaningful digital
              experiences.
            </>
          }
        />
      </div>
      <div className="dh-marquee">
        <div className="dh-marquee__track">
          <ClientStrip />
          <ClientStrip hidden />
        </div>
      </div>
    </section>
  );
}
