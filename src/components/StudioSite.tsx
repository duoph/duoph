import Contact from "@/components/Contact";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import Process from "@/components/home/Process";
import { About, Clients, Difference, Faq, Hero, Products, Services } from "@/components/home/Sections";

export default function StudioSite() {
  return (
    <div className="duoph" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Process />
        <Difference />
        <Faq />
        <Contact />
        <Products />
        <Clients />
      </main>
      <SiteFooter />
    </div>
  );
}
