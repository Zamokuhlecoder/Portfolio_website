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
    <section id="contact" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <AnimatedSection>
          <SectionHeading
            eyebrow="05 — Contact"
            title="Let's Build Something Together."
            description="I'm always interested in connecting with people, exploring new opportunities, and collaborating on technology-driven projects."
          />
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={17} className="text-accent" aria-hidden="true" />
              <a
                href="mailto:zamosibusiso6@gmail.com"
                className="text-ink-muted hover:text-ink"
              >
                zamosibusiso6@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-ink-muted">
              <MapPin size={17} className="text-accent" aria-hidden="true" />
              Johannesburg, South Africa
            </li>
            <li className="flex items-center gap-3">
              <Github size={17} className="text-accent" aria-hidden="true" />
              <a
                href="https://github.com/Zamokuhlecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-ink"
              >
                github.com/Zamokuhlecoder
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={17} className="text-accent" aria-hidden="true" />
              <a
                href="https://linkedin.com/in/zamokuhle-mazibuko-a571702a3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-ink"
              >
                linkedin.com/in/zamokuhle-mazibuko-a571702a3
              </a>
            </li>
          </ul>
          <SocialLinks className="mt-6" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="border border-line bg-surface p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-ink">
                Full Name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-2 w-full border border-line bg-canvas px-3 py-2.5 text-sm outline-none focus:border-accent"
                />
              </label>
              <label className="block text-sm font-medium text-ink">
                Email Address
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full border border-line bg-canvas px-3 py-2.5 text-sm outline-none focus:border-accent"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-ink">
              Subject
              <input
                name="subject"
                type="text"
                required
                className="mt-2 w-full border border-line bg-canvas px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </label>
            <label className="mt-5 block text-sm font-medium text-ink">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full resize-y border border-line bg-canvas px-3 py-2.5 text-sm outline-none focus:border-accent"
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} aria-hidden="true" />
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "success" ? (
              <p
                role="status"
                className="mt-4 text-sm font-medium text-green-700"
              >
                Your message has been sent. I&apos;ll respond as soon as
                possible.
              </p>
            ) : null}
            {status === "error" ? (
              <p role="alert" className="mt-4 text-sm font-medium text-red-700">
                The message could not be sent. Please verify your EmailJS
                environment variables or email me directly at
                zamosibusiso6@gmail.com.
              </p>
            ) : null}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
