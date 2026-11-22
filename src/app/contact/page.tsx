"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  /**
   * Submit the contact form through the existing Next.js email API.
   * The API contract is intentionally preserved.
   */
  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, msg }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMsg("");
    } catch (error) {
      console.error("Error sending contact message:", error);
      setStatus("error");
    }
  };

  return (
    <main className="inner-page contact-page">
      <section className="section-shell contact-layout">
        <div className="contact-copy">
          <p className="section-label">CONTACT / SAY HELLO</p>
          <h1>Have a good idea? Let’s <em>talk.</em></h1>
          <p className="contact-lead">
            Whether you’re building a product, exploring an AI use case, or
            simply want to connect, I’d be glad to hear from you.
          </p>
          <div className="contact-details">
            <a href="mailto:krishankantsen.bhumca22@gmail.com">
              <Mail size={17} />
              <span>krishankantsen.bhumca22@gmail.com</span>
              <ArrowUpRight size={15} />
            </a>
            <p>
              <MapPin size={17} />
              <span>Shivpuri, Madhya Pradesh, India</span>
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <p className="section-label">SEND A MESSAGE</p>
          <div className="form-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="What should I call you?"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              maxLength={100}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              maxLength={254}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Your message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me a little about what you have in mind..."
              value={msg}
              onChange={(event) => setMsg(event.target.value)}
              required
              rows={5}
              maxLength={5000}
            />
          </div>
          <button className="button button-dark contact-submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
            <ArrowUpRight size={16} />
          </button>
          {status === "success" && (
            <p className="form-feedback form-success" role="status">
              Thanks for reaching out. Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="form-feedback form-error" role="alert">
              Your message could not be sent. Please try again or email me directly.
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
