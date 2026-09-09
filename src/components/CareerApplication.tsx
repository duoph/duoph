"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Mail, X } from "lucide-react";

const recipient = "admin@duoph.in";

export default function CareerApplication({ role }: { role: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const submitButton = useRef<HTMLButtonElement>(null);
  const [emailHref, setEmailHref] = useState(`mailto:${recipient}`);
  const prefix = role.toLowerCase().replaceAll(" ", "-");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    // Native validation handles email format; reject whitespace-only text too.
    for (const key of ["name", "email", "phone", "noticePeriod"]) {
      const input = form.elements.namedItem(key) as HTMLInputElement;
      input.setCustomValidity(input.value.trim() ? "" : "Please fill in this field.");
    }
    if (!form.reportValidity()) return;
    const body = [
      "Hi Duoph team,", "", `I would like to apply for ${role}.`, "",
      `Name: ${String(fields.get("name")).trim()}`,
      `Email: ${String(fields.get("email")).trim()}`,
      `Phone: ${String(fields.get("phone")).trim()}`,
      `Notice period: ${String(fields.get("noticePeriod")).trim()}`,
      "", "Thank you.",
    ].join("\n");
    setEmailHref(`mailto:${recipient}?subject=${encodeURIComponent(`Application: ${role} — Duoph`)}&body=${encodeURIComponent(body)}`);
    dialog.current?.showModal();
  }

  return (
    <details className="career-application">
      <summary className="pill-button" aria-label={`Apply for ${role}`}>Apply for this role <ArrowUpRight size={17} /></summary>
      <div className="contact-form-wrap application-form">
        <h4>Apply for {role}</h4>
        <p className="application-note">Enter your details below. All four fields are required.</p>
        <form onSubmit={submit} aria-label={`Application for ${role}`}>
          <fieldset>
            <div className="form-pair">
              <label htmlFor={`${prefix}-name`}>Name *<input id={`${prefix}-name`} name="name" autoComplete="name" required maxLength={120} onInput={event => event.currentTarget.setCustomValidity("")} /></label>
              <label htmlFor={`${prefix}-email`}>Email *<input id={`${prefix}-email`} name="email" type="email" autoComplete="email" required maxLength={254} onInput={event => event.currentTarget.setCustomValidity("")} /></label>
            </div>
            <div className="form-pair">
              <label htmlFor={`${prefix}-phone`}>Phone *<input id={`${prefix}-phone`} name="phone" type="tel" autoComplete="tel" required maxLength={40} onInput={event => event.currentTarget.setCustomValidity("")} /></label>
              <label htmlFor={`${prefix}-notice`}>Notice period *<input id={`${prefix}-notice`} name="noticePeriod" required maxLength={160} placeholder="Immediately, 15 days, 30 days…" onInput={event => event.currentTarget.setCustomValidity("")} /></label>
            </div>
            <p className="application-note">After submitting, you can open an email draft with your details to send to {recipient}.</p>
            <button ref={submitButton} className="pill-button contact-submit" type="submit">Submit application <ArrowUpRight size={17} /></button>
          </fieldset>
        </form>
      </div>
      <dialog ref={dialog} className="application-dialog" aria-labelledby={`${prefix}-dialog-title`} aria-describedby={`${prefix}-dialog-description`} onClose={() => submitButton.current?.focus()} data-lenis-prevent>
        <button type="button" className="dialog-close" aria-label="Close email popup" onClick={() => dialog.current?.close()}><X size={22} /></button>
        <Mail size={30} className="dialog-icon" />
        <h3 id={`${prefix}-dialog-title`}>Send your application by email</h3>
        <p id={`${prefix}-dialog-description`}>Your details are ready for {role}. Open the draft below, review it, and send it to <strong>{recipient}</strong> to complete your application.</p>
        <a className="pill-button" href={emailHref}>Open email draft <ArrowUpRight size={17} /></a>
        <p className="application-note">Your application has not been sent yet. If no email app opens, email {recipient} with the role, your name, email, phone, and notice period.</p>
      </dialog>
    </details>
  );
}
