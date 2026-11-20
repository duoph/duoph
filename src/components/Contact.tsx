"use client";

import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ArrowIcon, Tag } from "@/components/home/ui";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

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

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [key]: e.target.value }),
  });

  return (
    <section id="contact" className="dh-section dh-wrap" aria-labelledby="contact-title">
      <div className="dh-contact">
        <Image className="dh-contact__bg" src="/images/figma/contact-bg.png" alt="" fill sizes="100vw" />
        <div className="dh-contact__shade" aria-hidden="true" />
        <div className="dh-contact__intro">
          <Tag tone="black">Let&apos;s build something</Tag>
          <h2 id="contact-title" className="dh-h2 dh-h2--light">
            Have an idea?
            <br />
            Let&apos;s bring
            <br />
            it to life.
          </h2>
          <p>
            Tell us what you&apos;re planning, what you&apos;re trying to solve, or where you want your business to go.
            We&apos;ll help you figure out the next step.
          </p>
        </div>
        <div className="dh-contact__card">
          <h3>
            A good conversation is
            <br />
            where it starts.
          </h3>
          <form onSubmit={onSubmit} className="dh-form">
            <label>
              Full name
              <input name="name" autoComplete="name" required maxLength={120} placeholder="Alex Smith" {...field("name")} />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="alex@company.com"
                {...field("email")}
              />
            </label>
            <label className="dh-form__wide">
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                placeholder="Include your country code"
                {...field("phone")}
              />
            </label>
            <label className="dh-form__wide">
              What would you like to build?
              <textarea
                name="message"
                rows={4}
                required
                maxLength={10000}
                placeholder="A little about your business, your idea, or the challenge you’re facing.."
                {...field("message")}
              />
            </label>
            <div className="dh-form__wide dh-form__footer">
              <button className="dh-pill" type="submit" disabled={status === "sending"}>
                <span>{status === "sending" ? "Sending…" : "Book a free Consultation"}</span>
                <ArrowIcon />
              </button>
              {status === "sent" && (
                <p role="status" className="dh-form__status">
                  <Check size={17} /> Thanks! We&apos;ll reply within one business day.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="dh-form__status">
                  We couldn&apos;t send that. Please try again, or email{" "}
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
