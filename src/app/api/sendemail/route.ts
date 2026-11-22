import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  msg?: unknown;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

/** Escape user-provided content before placing it in an HTML email. */
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function readContactPayload(payload: ContactPayload) {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.msg === "string" ? payload.msg.trim() : "";

  if (!name || name.length > MAX_NAME_LENGTH) {
    return { error: "Please provide a name of 1–100 characters." } as const;
  }

  if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(email)) {
    return { error: "Please provide a valid email address." } as const;
  }

  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return { error: "Please provide a message of 1–5000 characters." } as const;
  }

  return { value: { name, email, message } } as const;
}

export async function POST(request: NextRequest) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const validated = readContactPayload(payload);
  if ("error" in validated) {
    return NextResponse.json(
      { success: false, message: validated.error },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_TO_EMAIL || "krishankantsen.bhumca22@gmail.com";

  if (!smtpUser || !smtpPass || !Number.isInteger(smtpPort) || smtpPort <= 0) {
    console.error("Contact email is not configured: SMTP environment variables are missing.");
    return NextResponse.json(
      { success: false, message: "Email service is temporarily unavailable. Please email me directly." },
      { status: 503 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    const { name, email, message } = validated.value;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

    await transporter.sendMail({
      from: {
        name: "Portfolio Contact Form",
        address: smtpUser,
      },
      to: recipient,
      replyTo: {
        name,
        address: email,
      },
      subject: `Portfolio enquiry from ${name}`,
      text: [
        "New portfolio contact form submission",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#20211f">
          <h2>New portfolio enquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    // Log the operational error server-side without exposing credentials to the client.
    console.error("Failed to send portfolio contact email:", error);
    return NextResponse.json(
      { success: false, message: "Unable to send your message right now. Please try again later." },
      { status: 502 },
    );
  }
}
