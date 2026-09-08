import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Bring your curiosity, craft, and care to Duoph. Explore our disciplines and introduce yourself for future opportunities.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at Duoph",
    description: "Good people. Meaningful work. Explore a future with Duoph.",
    url: "/careers",
  },
};

const disciplines = [
  {
    title: "Engineering",
    skills: "Web · Software · Mobile",
    description:
      "Build thoughtful websites, useful applications, and reliable systems that solve real business problems.",
  },
  {
    title: "Design",
    skills: "UI/UX · Brand · Digital",
    description:
      "Turn complex ideas into clear experiences, distinctive identities, and details that feel just right.",
  },
  {
    title: "Growth & marketing",
    skills: "Content · SEO · Campaigns",
    description:
      "Help good businesses reach the right people through clear stories, considered campaigns, and measurable learning.",
  },
];
const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Career interest — Duoph")}&body=${encodeURIComponent("Hi Duoph team,\n\nMy name is:\nI’m interested in:\nMy location and availability:\nPortfolio / GitHub / LinkedIn:\n\nA little about me and the work I’m proud of:\n\nI’ve attached my CV.\n")}`;

export default function Careers() {
  return (
    <div className="studio-site careers-page" id="top">
      <a className="skip-link" href="#career-content">
        Skip to content
      </a>
      <header className="studio-header">
        <div className="shell header-inner">
          <Link href="/" className="brand" aria-label="Duoph home">
            <Image
              src="/logo.png"
              alt="Duoph"
              width={128}
              height={44}
              priority
            />
          </Link>
          <nav className="career-nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/careers" aria-current="page">
              Careers
            </Link>
          </nav>
          <a className="header-cta" href="#introduce">
            Introduce yourself <ArrowUpRight size={16} />
          </a>
        </div>
      </header>
      <main id="career-content">
        <section className="shell career-hero">
          <Link href="/" className="text-link">
            <ArrowLeft size={14} /> Back to Duoph
          </Link>
          <p className="section-label">
            <span>Careers</span>Good people make the difference
          </p>
          <h1>
            Bring your curiosity.
            <br />
            Make your <span>mark.</span>
          </h1>
          <div className="career-hero-bottom">
            <p>
              For people who care about what they make — and the people they
              make it with. Help us build technology that moves businesses
              forward.
            </p>
            <a className="pill-button" href="#opportunities">
              Explore opportunities <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section className="services-section section-space">
          <div className="shell two-column">
            <div>
              <p className="section-label">
                <span>01</span>Our way of working
              </p>
              <h2>
                Small team.
                <br />
                <span>Shared ownership.</span>
              </h2>
            </div>
            <div className="career-values">
              <article>
                <h3>Think beyond the brief.</h3>
                <p>
                  Start with the problem. Ask good questions. Connect the work
                  to what people and businesses actually need.
                </p>
              </article>
              <article>
                <h3>Care about the details.</h3>
                <p>
                  Clarity, usability, and maintainability matter. We value
                  considered decisions and work that holds up after launch.
                </p>
              </article>
              <article>
                <h3>Build together.</h3>
                <p>
                  Share your thinking, welcome feedback, and communicate
                  clearly. The best work comes from different perspectives.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section className="shell section-space" id="opportunities">
          <p className="section-label">
            <span>02</span>Find your space
          </p>
          <div className="section-top">
            <h2>
              Different strengths.
              <br />
              <span>One shared direction.</span>
            </h2>
            <p>
              The disciplines behind our work. Tell us where you’d like to
              contribute.
            </p>
          </div>
          <div className="career-disciplines">
            {disciplines.map((item, i) => (
              <article key={item.title}>
                <span className="row-index">0{i + 1}</span>
                <h3>{item.title}</h3>
                <span className="small-meta">{item.skills}</span>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="career-opening-note">
            <div>
              <h3>Looking for an opening?</h3>
              <p>
                No specific vacancies are listed right now. You’re welcome to
                introduce yourself for future opportunities in any of these
                areas.
              </p>
            </div>
            <a href="#introduce" className="text-link">
              Send an introduction <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
        <section className="contact-section section-space" id="introduce">
          <div className="shell two-column">
            <div className="contact-intro">
              <p className="section-label">
                <span>03</span>Start a conversation
              </p>
              <h2>
                Your next chapter
                <br />
                could start <span>here.</span>
              </h2>
              <p>
                Experienced, early in your career, or exploring a new direction
                — tell us what you’d like to bring to Duoph.
              </p>
              <a className="contact-email" href={emailHref}>
                {siteConfig.email}
                <ArrowUpRight size={22} />
              </a>
            </div>
            <div className="career-apply">
              <h3>A little about you. A glimpse of your work.</h3>
              <p>To help us get to know you, include:</p>
              <ul>
                <li>Your name and the kind of work you’re interested in.</li>
                <li>Your CV, plus a portfolio, GitHub, or LinkedIn link.</li>
                <li>A project you’re proud of and what you contributed.</li>
                <li>Your location and availability.</li>
              </ul>
              <a className="pill-button" href={emailHref}>
                Email your introduction <ArrowUpRight size={18} />
              </a>
              <p className="career-email-note">
                Opens your email app with a draft. Attach your CV before
                sending. You can also email the address directly.
              </p>
              <details className="career-faq">
                <summary>
                  What happens next?
                  <ArrowRight size={16} />
                </summary>
                <p>
                  This is an expression of interest, not an application for an
                  advertised role. If there’s a suitable opportunity, we’ll get
                  in touch to discuss the role, working arrangements, and next
                  steps. We can’t promise a response to every introduction.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <footer className="studio-footer">
        <div className="shell">
          <div className="footer-top">
            <Link href="/" className="brand" aria-label="Duoph home">
              <Image src="/logo.png" alt="Duoph" width={128} height={44} />
            </Link>
            <p>
              Thoughtful technology.
              <br />
              Lasting partnerships.
            </p>
            <Link href="/#work" className="text-link">
              Explore our work <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Duoph Technologies. All rights
              reserved.
            </span>
            <Link href="/#contact">Contact us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
