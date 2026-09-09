"use client";

import { useState } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: AbortSignal.timeout(20000),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error("Unable to send");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }
  return (
    <section id="contact" className="contact-section section-space">
      <div className="shell two-column">
        <div className="contact-intro">
          <p className="eyebrow">
            <span>06 / Contact</span>Let’s make it happen
          </p>
          <h2>
            Have something
            <br />
            in mind?
            <br />
            <span>Let’s build it.</span>
          </h2>
          <p>
            Tell us what you’re thinking. We’ll help you figure out the next
            step.
          </p>
          <a className="contact-email" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
            <ArrowUpRight size={22} />
          </a>
          <div className="contact-meta">
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> Chat on WhatsApp{" "}
              <ArrowUpRight size={14} />
            </a>
            <p>{siteConfig.officeHours}</p>
          </div>
        </div>
        <div className="contact-form-wrap">
          <p className="form-intro">A good conversation is where it starts.</p>
          <form onSubmit={onSubmit}>
            <div className="form-pair">
              <label htmlFor="name">
                Your name <span>*</span>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                  placeholder="Alex Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label htmlFor="email">
                Email address <span>*</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
            </div>
            <label htmlFor="phone">
              Phone number <span>(optional)</span>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                placeholder="Include your country code"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>
            <label htmlFor="message">
              What would you like to build? <span>*</span>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                maxLength={10000}
                placeholder="A little about your business, your idea, or the challenge you’re facing…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button
              className="pill-button contact-submit"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending your enquiry…"
                : "Book a free consultation"}
              <ArrowUpRight size={18} />
            </button>
            {status === "sent" && (
              <p role="status" className="form-status">
                <Check size={17} /> Your enquiry is sent. We’ll reply within one
                business day.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="form-status form-error">
                We couldn’t send your enquiry. Your message is still here —
                please try again, or email{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
            )}
            <p className="form-assurance">
              Free consultation · No obligation · Usually a reply within 24
              hours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
