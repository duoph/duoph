import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return Response.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const user = process.env.GMAIL_USER || "duophmarketing@gmail.com";
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_RECEIVER || "admin@duoph.in";

  if (!pass) {
    return Response.json(
      { ok: false, error: "Server not configured" },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const subject = `New contact form submission — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      from: `Duoph Website <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
    });
  } catch {
    return Response.json(
      { ok: false, error: "Failed to send" },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

