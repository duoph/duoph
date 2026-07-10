"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Badge } from "@/components/ui/Badge";
import { heroStats } from "@/data/site";
import { useLiteMotion } from "@/hooks/useLiteMotion";

const Hero = () => {
  const lite = useLiteMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pt-24 pb-16 text-white sm:px-5 sm:pt-28 sm:pb-20 md:px-10 lg:px-12">
      <HeroBackground lite={lite} />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <div>
            <Badge light>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Duoph Technologies
            </Badge>
          </div>

          <h1 className="font-monument mt-6 text-[2rem] leading-[1.08] font-bold tracking-tight xs:text-4xl sm:mt-8 sm:text-5xl md:text-6xl lg:text-[4.35rem]">
            Technology That Moves{" "}
            <span className="text-emerald-300">Businesses</span> Forward.
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70 sm:mt-6 sm:text-base md:text-lg">
            We help businesses attract customers, automate operations, and build
            software that scales — so you grow revenue without drowning in
            manual work.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <MagneticButton
              href="#contact"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </MagneticButton>
            <MagneticButton
              href="#work"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              View Our Work
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </MagneticButton>
          </div>

          <div
            className="mt-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-8 sm:mt-14 sm:gap-8 sm:pt-10 sm:grid-cols-4"
            aria-label="Company trust metrics"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-monument text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                  {lite ? (
                    <>
                      {stat.value}
                      {stat.suffix}
                    </>
                  ) : (
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  )}
                </p>
                <p className="mt-1 text-[11px] font-medium tracking-wide text-white/50 uppercase sm:mt-1.5 sm:text-xs md:text-sm md:normal-case md:tracking-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function HeroBackground({ lite }: { lite: boolean }) {
  return (
    <div className="absolute inset-0 z-0" aria-hidden>
      <div className="hero-dark-gradient absolute inset-0" />
      {/* Heavy blurs only on desktop — major mobile GPU cost */}
      {!lite ? (
        <>
          <div className="hero-aurora absolute inset-0 opacity-80" />
          <div className="absolute top-[12%] left-[4%] h-[480px] w-[480px] rounded-full bg-[#18704E]/28 blur-[120px]" />
          <div className="absolute right-[2%] bottom-[8%] h-[520px] w-[520px] rounded-full bg-emerald-400/12 blur-[130px]" />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-[22%] right-[12%] h-24 w-24 rounded-3xl border border-white/10 bg-white/5" />
            <div className="absolute bottom-[28%] left-[8%] h-16 w-16 rounded-full border border-emerald-400/20 bg-emerald-400/10" />
          </div>
          <div className="noise pointer-events-none absolute inset-0 opacity-[0.12]" />
        </>
      ) : (
        <div className="absolute top-1/4 right-0 h-48 w-48 rounded-full bg-[#18704E]/25 blur-3xl" />
      )}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/55" />
    </div>
  );
}

export default Hero;
