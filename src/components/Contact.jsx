import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS message submission failed:", error);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line bg-forest-soft/40"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <AnimatedSection>
          <SectionHeading
            eyebrow="05 — Contact"
            title="Let's start a conversation."
            description="Have an opportunity, a project idea, or a shared interest in technology? I&rsquo;d be glad to hear from you."
          />
          <ul className="scroll-stagger mt-8 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                <Mail size={17} aria-hidden="true" />
              </span>
              <a
                href="mailto:zamosibusiso6@gmail.com"
                className="min-w-0 break-all font-medium text-ink-muted transition-colors hover:text-accent"
              >
                zamosibusiso6@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink-muted">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-forest text-surface">
                <MapPin size={17} aria-hidden="true" />
              </span>
              Johannesburg, South Africa
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                <Github size={17} aria-hidden="true" />
              </span>
              <a
                href="https://github.com/Zamokuhlecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 break-all font-medium text-ink-muted transition-colors hover:text-accent"
              >
                github.com/Zamokuhlecoder
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                <Linkedin size={17} aria-hidden="true" />
              </span>
              <a
                href="https://linkedin.com/in/zamokuhle-mazibuko-a571702a3"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 break-all font-medium text-ink-muted transition-colors hover:text-accent"
              >
                linkedin.com/in/zamokuhle-mazibuko-a571702a3
              </a>
            </li>
          </ul>
          <SocialLinks className="scroll-reveal mt-6" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="premium-card scroll-stagger p-6 sm:p-8"
          >
            <div className="mb-7 border-b border-line pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Get in touch
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">
                Send a message
              </h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-ink">
                Name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input mt-2 text-sm"
                />
              </label>
              <label className="block text-sm font-medium text-ink">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input mt-2 text-sm"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-ink">
              Subject
              <input
                name="subject"
                type="text"
                required
                className="input mt-2 text-sm"
              />
            </label>
            <label className="mt-5 block text-sm font-medium text-ink">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="textarea mt-2 resize-y text-sm"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="button-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} aria-hidden="true" />
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "success" ? (
              <p
                role="status"
                className="mt-4 text-sm font-medium text-success"
              >
                Your message has been sent. I&apos;ll respond as soon as
                possible.
              </p>
            ) : null}
            {status === "error" ? (
              <p role="alert" className="mt-4 text-sm font-medium text-danger">
                Your message could not be sent. Please try again or email me
                directly at zamosibusiso6@gmail.com.
              </p>
            ) : null}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
