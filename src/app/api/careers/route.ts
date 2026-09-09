import nodemailer from "nodemailer";
import { careerRoles } from "@/data/careers";

export const runtime = "nodejs";

const limits = { role: 80, name: 120, email: 254, phone: 40, location: 160, availability: 160, resume: 2000, portfolio: 2000, message: 5000 };
const required = ["role", "name", "email", "location", "availability", "resume", "message"] as const;

function webLink(value: string) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) && !url.username && !url.password;
  } catch { return false; }
}

export async function POST(req: Request) {
  // Bound the body before parsing; do not trust Content-Length alone.
  const reader = req.body?.getReader();
  if (!reader) return Response.json({ ok: false, error: "Missing application." }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let bytes = 0;
  let raw: unknown;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 32768) {
        await reader.cancel();
        return Response.json({ ok: false, error: "Application is too large." }, { status: 413 });
      }
      chunks.push(value);
    }
    raw = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return Response.json({ ok: false, error: "Invalid application." }, { status: 400 });
  }
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return Response.json({ ok: false, error: "Invalid application." }, { status: 400 });
  }
  const input = raw as Record<string, unknown>;
  const fields: Record<string, string> = {};
  for (const [key, limit] of Object.entries(limits)) {
    const value = input[key] ?? "";
    if (typeof value !== "string" || value.length > limit) {
      return Response.json({ ok: false, error: `Invalid ${key}.` }, { status: 400 });
    }
    fields[key] = value.trim();
  }
  if (required.some(key => !fields[key]) || !careerRoles.some(role => role === fields.role)) {
    return Response.json({ ok: false, error: "Please complete the required application fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || /[\r\n]/.test(fields.name)) {
    return Response.json({ ok: false, error: "Please provide a valid name and email address." }, { status: 400 });
  }
  if (!webLink(fields.resume) || (fields.portfolio && !webLink(fields.portfolio))) {
    return Response.json({ ok: false, error: "Please use valid https:// or http:// links." }, { status: 400 });
  }
  const user = process.env.GMAIL_USER || "duophmarketing@gmail.com";
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_RECEIVER || "admin@duoph.in";
  if (!pass) return Response.json({ ok: false, error: "Applications are temporarily unavailable. Please email us." }, { status: 503 });

  const transporter = nodemailer.createTransport({
    service: "gmail", auth: { user, pass },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
  });
  try {
    await transporter.sendMail({
      from: `Duoph Careers <${user}>`, to, replyTo: fields.email,
      subject: `Career application: ${fields.role} — ${fields.name}`,
      text: [
        `Role: ${fields.role}`, `Name: ${fields.name}`, `Email: ${fields.email}`,
        `Phone: ${fields.phone || "Not provided"}`, `Location: ${fields.location}`,
        `Availability: ${fields.availability}`, `CV: ${fields.resume}`,
        `Portfolio: ${fields.portfolio || "Not provided"}`, "", fields.message,
      ].join("\n"),
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Unable to send your application. Please try again or email us." }, { status: 502 });
  } finally { transporter.close(); }
}
