import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Manifesto from "@/components/Manifesto";
import FeaturedProjects from "@/components/FeaturedProjects";
import Statistics from "@/components/Statistics";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/footer/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f7f5] text-ink selection:bg-[#18704E]/25">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black focus:shadow-lg"
      >
        Skip to content
      </a>
      <JsonLd />
      <Header />
      <Hero />
      <TrustedBy />
      <Manifesto />
      <FeaturedProjects />
      <Statistics />
      <WhyChoose />
      <Services />
      <Process />
      <Industries />
      <TechStack />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
