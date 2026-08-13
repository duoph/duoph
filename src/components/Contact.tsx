"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Send,
  Shield,
  Timer,
  Handshake,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data/site";

const assurances = [
  { icon: Handshake, label: "Free Consultation" },
  { icon: Timer, label: "Response within 24 Hours" },
  { icon: Shield, label: "No obligation · Privacy guaranteed" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send");
    }
  }

  return (
    <Section id="contact" dark className="!bg-[#050f0b]" grid>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <FadeIn>
          <SectionHeading
            light
            eyebrow="Contact"
            title={
              <>
                Ready to grow?{" "}
                <span className="text-emerald-300">Let&apos;s talk.</span>
              </>
            }
            description="Tell us about your business goals. We'll reply with a clear next step — usually within one business day."
          />

          <div className="mt-10 space-y-1">
            <ContactRow
              icon={Mail}
              label="Email"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value={siteConfig.phone}
              href={siteConfig.phoneHref}
            />
            <ContactRow
              icon={MessageCircle}
              label="WhatsApp"
              value="Chat with us"
              href={siteConfig.whatsapp}
            />
            <ContactRow
              icon={Clock}
              label="Office Hours"
              value={siteConfig.officeHours}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
            <div className="mb-8 flex flex-wrap gap-2">
              {assurances.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 px-3 py-1.5 text-xs font-medium text-white/70"
                >
                  <Icon className="h-3.5 w-3.5 text-emerald-300" aria-hidden />
                  {label}
                </span>
              ))}
            </div>

            <form className="space-y-5" onSubmit={onSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  id="name"
                  required
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  placeholder="you@company.com"
                />
              </div>
              <Field
                label="Phone"
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(v) =>
                  setForm((f) => ({ ...f, phone: v.replace(/\D/g, "") }))
                }
                placeholder="Your contact number"
              />
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-emerald-300/90"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="What are you looking to build or improve?"
                  className="w-full resize-none rounded-2xl border border-white/12 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/30 transition focus:border-emerald-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/25 sm:px-5 sm:py-4"
                />
              </div>

              {status !== "idle" ? (
                <p
                  className={`text-sm ${
                    status === "error" ? "text-red-400" : "text-white/55"
                  }`}
                  role="status"
                >
                  {status === "sending" ? "Sending…" : null}
                  {status === "sent"
                    ? "Sent. We'll get back to you within 24 hours."
                    : null}
                  {status === "error" ? error || "Failed to send" : null}
                </p>
              ) : null}

              <MagneticButton
                type="submit"
                variant="primary"
                disabled={status === "sending"}
                className="w-full"
              >
                Book a Free Consultation
                <Send className="h-4 w-4" aria-hidden />
              </MagneticButton>
            </form>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 text-emerald-300">
        <Icon size={18} aria-hidden />
      </div>
      <div>
        <p className="text-[11px] font-bold tracking-widest text-white/35 uppercase">
          {label}
        </p>
        <p className="font-medium text-white">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-center gap-4 rounded-2xl py-3 transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-4 py-3">{content}</div>;
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-emerald-300/90">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-white/30 transition focus:border-emerald-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/25 sm:px-5 sm:py-4"
      />
    </div>
  );
}
