"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

const EASE = "power3.out";
const CLEAR = "transform,opacity,visibility";

/** Groups of cards that fade up in a stagger when they scroll into view. */
const CARD_GROUPS: { selector: string; from: gsap.TweenVars }[] = [
  { selector: ".dh-service", from: { x: 90, autoAlpha: 0 } },
  { selector: ".dh-about__pillars li", from: { y: 50, autoAlpha: 0 } },
  { selector: ".dh-process__steps li", from: { x: 60, autoAlpha: 0 } },
  { selector: ".dh-diff__card", from: { y: 70, autoAlpha: 0 } },
  { selector: ".dh-faq__item", from: { y: 40, autoAlpha: 0 } },
  { selector: ".dh-product", from: { y: 80, autoAlpha: 0 } },
  { selector: ".dh-footer__col", from: { y: 30, autoAlpha: 0 } },
  // careers page
  { selector: ".job-card, .values-list article", from: { y: 30, autoAlpha: 0 } },
];

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const media = gsap.matchMedia();

    media.add(
      "(prefers-reduced-motion: no-preference)",
      (context) => {
        // ---------- Lenis smooth scroll, driven by GSAP's ticker ----------
        const lenis = new Lenis({
          lerp: 0.09,
          smoothWheel: true,
          syncTouch: false,
          anchors: { offset: -100 },
          prevent: (node) => node.tagName === "TEXTAREA" || node.tagName === "DIALOG",
        });
        const tick = (seconds: number) => lenis.raf(seconds * 1000);
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        const q = gsap.utils.selector(scope);
        const splits: SplitText[] = [];
        const split = (el: Element) => {
          const s = SplitText.create(el, { type: "lines", mask: "lines", linesClass: "dh-line" });
          splits.push(s);
          return s;
        };

        // ---------- Hero: hide now, reveal once fonts are ready ----------
        const heroBits = q(".dh-hero__content > *, .hero-copy > *");
        gsap.set(heroBits, { autoAlpha: 0 });

        // ---------- Card groups: set hidden now, stagger in on enter ----------
        for (const group of CARD_GROUPS) {
          const els = q(group.selector);
          if (!els.length) continue;
          gsap.set(els, group.from);
          ScrollTrigger.batch(els, {
            start: "top 88%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration: 1,
                stagger: 0.12,
                ease: EASE,
                clearProps: CLEAR,
              }),
          });
        }

        // ---------- Scroll-linked parallax ----------
        const hero = q(".dh-hero")[0];
        if (hero) {
          gsap.to(".dh-hero__media", {
            yPercent: 14,
            ease: "none",
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
          });
          gsap.to(".dh-hero__content", {
            yPercent: -18,
            autoAlpha: 0.2,
            ease: "none",
            scrollTrigger: { trigger: hero, start: "40% top", end: "bottom top", scrub: true },
          });
        }
        const parallaxZoom = (target: string, trigger: string, from = 1.2) => {
          const t = q(trigger)[0];
          if (!t) return;
          gsap.fromTo(
            q(target),
            { scale: from },
            { scale: 1, ease: "none", scrollTrigger: { trigger: t, start: "top bottom", end: "center center", scrub: true } },
          );
        };
        parallaxZoom(".dh-about__img", ".dh-about__hero");
        parallaxZoom(".dh-contact__bg", ".dh-contact", 1.15);
        parallaxZoom(".dh-footer__bg", ".dh-footer", 1.12);

        // Process photo wipes in from the left.
        const processMedia = q(".dh-process__media")[0];
        if (processMedia) {
          gsap.from(processMedia, {
            clipPath: "inset(0 100% 0 0)",
            duration: 1.4,
            ease: "power4.inOut",
            clearProps: "clipPath",
            scrollTrigger: { trigger: processMedia, start: "top 80%", once: true },
          });
        }

        // Contact form card slides in from the right.
        const contactCard = q(".dh-contact__card")[0];
        if (contactCard) {
          gsap.from(contactCard, {
            x: 80,
            autoAlpha: 0,
            duration: 1.1,
            ease: EASE,
            clearProps: CLEAR,
            scrollTrigger: { trigger: contactCard, start: "top 80%", once: true },
          });
        }

        // Gentle float on the 3D icons in "The Duoph difference".
        q(".dh-diff__art").forEach((el, i) => {
          gsap.to(el, { y: -10, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: i * 0.3 });
        });

        // Marquee: speed up briefly with scroll velocity.
        const marquee = q(".dh-marquee__track")[0];
        if (marquee) {
          const speed = { rate: 1 };
          const apply = () => marquee.getAnimations().forEach((a) => (a.playbackRate = speed.rate));
          ScrollTrigger.create({
            trigger: marquee,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
              const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 500, 4);
              gsap.to(speed, {
                rate: boost,
                duration: 0.2,
                overwrite: true,
                onUpdate: apply,
                onComplete: () => {
                  gsap.to(speed, { rate: 1, duration: 1, ease: "power2.out", onUpdate: apply });
                },
              });
            },
          });
        }

        // ---------- Text animations need final font metrics ----------
        let alive = true;
        void document.fonts.ready.then(() => {
          if (!alive) return;
          context.add(() => {
            // Hero intro timeline
            const tl = gsap.timeline({ defaults: { ease: EASE } });
            const heroMedia = q(".dh-hero__media");
            if (heroMedia.length) tl.from(heroMedia, { scale: 1.18, duration: 2.2, ease: "power2.out" }, 0);
            const heroTitle = q(".dh-hero__title, .hero-copy h1")[0];
            gsap.set(heroBits, { autoAlpha: 1 });
            const otherBits = heroBits.filter((el) => el !== heroTitle);
            if (heroTitle) {
              const s = split(heroTitle);
              tl.from(s.lines, { yPercent: 110, duration: 1.1, stagger: 0.12, onComplete: () => s.revert() }, 0.25);
            }
            tl.from(otherBits, { y: 24, autoAlpha: 0, duration: 0.9, stagger: 0.1, clearProps: CLEAR }, 0.35);

            // Section headings: tag slides in, heading lines rise out of a mask, lead fades up.
            q(".dh-h2, .section-top h2, .two-column h2").forEach((h) => {
              if (h.closest(".dh-hero")) return;
              const s = split(h);
              gsap.from(s.lines, {
                yPercent: 110,
                duration: 1.1,
                stagger: 0.1,
                ease: EASE,
                // Restore the plain heading so the mask can't clip glyphs or break on resize.
                onComplete: () => s.revert(),
                scrollTrigger: { trigger: h, start: "top 88%", once: true },
              });
            });
            q(".dh-tag, .eyebrow").forEach((tag) => {
              if (tag.closest(".dh-hero, .hero-copy")) return;
              gsap.from(tag, {
                x: -24,
                autoAlpha: 0,
                duration: 0.8,
                ease: EASE,
                clearProps: CLEAR,
                scrollTrigger: { trigger: tag, start: "top 92%", once: true },
              });
            });
            q(".dh-lead, .dh-about__content p, .dh-contact__intro p, .dh-footer__intro p, .section-top > p").forEach((p) => {
              gsap.from(p, {
                y: 24,
                autoAlpha: 0,
                duration: 0.9,
                delay: 0.15,
                ease: EASE,
                clearProps: CLEAR,
                scrollTrigger: { trigger: p, start: "top 92%", once: true },
              });
            });
            ScrollTrigger.refresh();
          });
        });

        // Layout changes (accordions, late images) move trigger positions.
        const refresh = () => ScrollTrigger.refresh();
        const details = q("details") as HTMLDetailsElement[];
        details.forEach((el) => el.addEventListener("toggle", refresh));
        window.addEventListener("load", refresh);

        return () => {
          alive = false;
          splits.forEach((s) => s.revert());
          details.forEach((el) => el.removeEventListener("toggle", refresh));
          window.removeEventListener("load", refresh);
          gsap.ticker.remove(tick);
          lenis.off("scroll", ScrollTrigger.update);
          lenis.destroy();
        };
      },
      scope,
    );

    return () => media.revert();
  }, [pathname]);

  return <div ref={scope}>{children}</div>;
}
