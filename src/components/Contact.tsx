"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send");
      }

      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send");
    }
  }

  return (
    <section ref={rootRef} id="contact" className="py-24 relative overflow-hidden md:px-[110px] px-[20px]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div data-contact="left">
            <h2 className="font-monument text-[#18704e] font-bold tracking-widest uppercase text-sm mb-4">Get in Touch</h2>
            <h3 className="font-monument text-4xl md:text-5xl font-bold mb-8 text-black">Ready to grow your digital presence?</h3>
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
                  <p className="text-black font-medium">+91 9400244731</p>
                </div>
              </div>
          
            </div>
          </div>

          <div data-contact="form" className="glass p-8 md:p-12 rounded-[40px] border border-black/10 relative">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium     text-[#18704e] ml-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 transition-colors text-black"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-[#18704e] ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 transition-colors text-black"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-[#18704e] ml-1">Contact Number</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    pattern="[0-9]*"
                    className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 transition-colors text-black"
                    placeholder="Your Contact Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        phone: e.target.value.replace(/\D/g, ""),
                      }))
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#18704e] ml-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 transition-colors text-black resize-none"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                />
              </div>

              {status !== "idle" ? (
                <div className="text-sm text-black/60">
                  {status === "sending" ? "Sending..." : null}
                  {status === "sent" ? "Sent. We’ll get back to you shortly." : null}
                  {status === "error" ? (error || "Failed to send") : null}
                </div>
              ) : null}

              <button
                disabled={status === "sending"}
                className="w-full py-4 bg-[#18704e] disabled:opacity-60 disabled:cursor-not-allowed hover:brightness-110 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20 group"
              >
                Send Message{" "}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

