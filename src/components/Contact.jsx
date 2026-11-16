"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EASE = [0.22, 1, 0.36, 1];
const SPRING = { type: "spring", stiffness: 380, damping: 24 };

const contactList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const contactItem = {
  hidden: { opacity: 0, x: -18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

const formStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const fieldRise = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function Contact() {
  const reduce = useReducedMotion();
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
        {/* ─── Left column ─────────────────────────────────────── */}
        <AnimatedSection>
          <SectionHeading
            eyebrow="05 — Contact"
            title="Let's start a conversation."
            description="Have an opportunity, a project idea, or a shared interest in technology? I’d be glad to hear from you."
          />

          <motion.ul
            className="mt-8 space-y-3 text-sm"
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, margin: "-60px" }}
            variants={contactList}
          >
            <motion.li
              variants={contactItem}
              className="flex items-center gap-3"
            >
              <motion.span
                whileHover={reduce ? undefined : { rotate: -8, scale: 1.05 }}
                transition={SPRING}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"
              >
                <Mail size={17} aria-hidden="true" />
              </motion.span>
              <a
                href="mailto:zamosibusiso6@gmail.com"
                className="min-w-0 break-all font-medium text-ink-muted transition-colors hover:text-accent"
              >
                zamosibusiso6@gmail.com
              </a>
            </motion.li>

            <motion.li
              variants={contactItem}
              className="flex items-center gap-3 text-ink-muted"
            >
              <motion.span
                whileHover={reduce ? undefined : { rotate: -8, scale: 1.05 }}
                transition={SPRING}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-forest text-surface"
              >
                <MapPin size={17} aria-hidden="true" />
              </motion.span>
              Johannesburg, South Africa
            </motion.li>

            <motion.li
              variants={contactItem}
              className="flex items-center gap-3"
            >
              <motion.span
                whileHover={reduce ? undefined : { rotate: -8, scale: 1.05 }}
                transition={SPRING}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"
              >
                <Github size={17} aria-hidden="true" />
              </motion.span>
              <a
                href="https://github.com/Zamokuhlecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 break-all font-medium text-ink-muted transition-colors hover:text-accent"
              >
                github.com/Zamokuhlecoder
              </a>
            </motion.li>

            <motion.li
              variants={contactItem}
              className="flex items-center gap-3"
            >
              <motion.span
                whileHover={reduce ? undefined : { rotate: -8, scale: 1.05 }}
                transition={SPRING}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent"
              >
                <Linkedin size={17} aria-hidden="true" />
              </motion.span>
              <a
                href="https://linkedin.com/in/zamokuhle-mazibuko-a571702a3"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 break-all font-medium text-ink-muted transition-colors hover:text-accent"
              >
                linkedin.com/in/zamokuhle-mazibuko-a571702a3
              </a>
            </motion.li>
          </motion.ul>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
          >
            <SocialLinks className="mt-6" />
          </motion.div>
        </AnimatedSection>

        {/* ─── Right column: form ──────────────────────────────── */}
        <AnimatedSection delay={0.1}>
          <motion.form
            onSubmit={handleSubmit}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, margin: "-60px" }}
            variants={formStagger}
            className="premium-card group relative overflow-hidden p-6 sm:p-8"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(500px circle at 50% -10%, color-mix(in oklab, var(--color-accent, #8b5cf6) 8%, transparent), transparent 70%)",
              }}
              aria-hidden="true"
            />

            <motion.div
              variants={fieldRise}
              className="relative mb-7 border-b border-line pb-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Get in touch
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">
                Send a message
              </h3>
            </motion.div>

            <div className="relative grid gap-5 sm:grid-cols-2">
              <motion.label
                variants={fieldRise}
                className="block text-sm font-medium text-ink"
              >
                Name
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input mt-2 text-sm transition-shadow duration-300 focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-accent,#8b5cf6)_18%,transparent)]"
                />
              </motion.label>
              <motion.label
                variants={fieldRise}
                className="block text-sm font-medium text-ink"
              >
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input mt-2 text-sm transition-shadow duration-300 focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-accent,#8b5cf6)_18%,transparent)]"
                />
              </motion.label>
            </div>

            <motion.label
              variants={fieldRise}
              className="relative mt-5 block text-sm font-medium text-ink"
            >
              Subject
              <input
                name="subject"
                type="text"
                required
                className="input mt-2 text-sm transition-shadow duration-300 focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-accent,#8b5cf6)_18%,transparent)]"
              />
            </motion.label>

            <motion.label
              variants={fieldRise}
              className="relative mt-5 block text-sm font-medium text-ink"
            >
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="textarea mt-2 resize-y text-sm transition-shadow duration-300 focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-accent,#8b5cf6)_18%,transparent)]"
              />
            </motion.label>

            <motion.div variants={fieldRise} className="relative">
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={reduce || status === "sending" ? undefined : { y: -2 }}
                whileTap={reduce || status === "sending" ? undefined : { scale: 0.98 }}
                transition={SPRING}
                className="button-primary mt-6 flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <motion.span
                  animate={
                    status === "sending" && !reduce
                      ? { rotate: 360 }
                      : { rotate: 0 }
                  }
                  transition={
                    status === "sending"
                      ? { duration: 1.1, repeat: Infinity, ease: "linear" }
                      : { duration: 0.3 }
                  }
                  className="inline-flex"
                >
                  <Send size={16} aria-hidden="true" />
                </motion.span>
                {status === "sending" ? "Sending…" : "Send Message"}
              </motion.button>
            </motion.div>

            {status === "success" ? (
              <motion.p
                role="status"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative mt-4 text-sm font-medium text-success"
              >
                Your message has been sent. I&apos;ll respond as soon as
                possible.
              </motion.p>
            ) : null}

            {status === "error" ? (
              <motion.p
                role="alert"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={reduce ? undefined : { opacity: 1, y: 0, x: [0, -4, 4, -3, 3, 0] }}
                transition={{ duration: 0.5, ease: EASE }}
                className="relative mt-4 text-sm font-medium text-danger"
              >
                Your message could not be sent. Please try again or email me
                directly at zamosibusiso6@gmail.com.
              </motion.p>
            ) : null}
          </motion.form>
        </AnimatedSection>
      </div>
    </section>
  );
}