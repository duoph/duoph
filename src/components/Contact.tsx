"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-contact='left']",
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
        }
      );
      gsap.fromTo(
        "[data-contact='form']",
        { opacity: 0, y: 18, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%", once: true },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div data-contact="left">
            <h2 className="text-[#18704e] font-bold tracking-widest uppercase text-sm mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 text-black">Ready to grow your digital presence?</h3>
            <p className="text-black/60 mb-12 text-lg">
              Schedule a consultation today and let's discuss how we can help you achieve your business goals with modern tech solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-black/40 uppercase tracking-widest font-bold">Email us</p>
                  <p className="text-black font-medium">admin@duoph.in</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-black/40 uppercase tracking-widest font-bold">Call us</p>
                  <p className="text-black font-medium">+1 (234) 567-890</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-black/40 uppercase tracking-widest font-bold">Visit us</p>
                  <p className="text-black font-medium">Tech District, SF, CA</p>
                </div>
              </div> */}
            </div>
          </div>

          <div data-contact="form" className="glass p-8 md:p-12 rounded-[40px] border border-black/10 relative">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium     text-[#18704e] ml-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 transition-colors text-black"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-[#18704e] ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 transition-colors text-black"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-[#18704e] ml-1">Contact Number</label>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 transition-colors text-black"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

          

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#18704e] ml-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 transition-colors text-black resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button className="w-full py-4 bg-[#18704e] hover:brightness-110 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

