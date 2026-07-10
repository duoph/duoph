import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import JsonLd from "@/components/JsonLd";

const FeaturedProjects = dynamic(() => import("@/components/FeaturedProjects"));
const Statistics = dynamic(() => import("@/components/Statistics"));
const WhyChoose = dynamic(() => import("@/components/WhyChoose"));
const Services = dynamic(() => import("@/components/Services"));
const Process = dynamic(() => import("@/components/Process"));
const Industries = dynamic(() => import("@/components/Industries"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/footer/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[#18704E]/25">
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
