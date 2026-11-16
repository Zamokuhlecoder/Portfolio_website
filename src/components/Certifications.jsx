"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { certifications } from "../data/certifications";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const EASE = [0.22, 1, 0.36, 1];
const SPRING = { type: "spring", stiffness: 320, damping: 24 };

const card = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function Certifications() {
  const reduce = useReducedMotion();

  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-b border-line bg-accent-soft/25"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <AnimatedSection>
          <SectionHeading
            eyebrow="04 — Certifications"
            title="Learning & certifications"
            description="Google certificates and coursework in analytics, machine learning, statistics, and regression, alongside Microsoft Power BI training."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {certifications.map(({ name, issuer, credentialUrl, image }) => (
              <motion.article
                key={name}
                variants={card}
                initial={reduce ? false : "hidden"}
                whileInView={reduce ? undefined : "visible"}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={reduce ? undefined : { y: -6 }}
                transition={SPRING}
                className="premium-card group relative flex min-h-56 flex-col overflow-hidden p-6"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(420px circle at 50% 0%, color-mix(in oklab, var(--color-accent, #8b5cf6) 10%, transparent), transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <motion.span
                    whileHover={reduce ? undefined : { rotate: -8, scale: 1.06 }}
                    transition={SPRING}
                    className="certification-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-forest text-surface"
                  >
                    <BadgeCheck size={21} aria-hidden="true" />
                  </motion.span>

                  <span className="inline-flex items-center gap-2 border border-line bg-canvas px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-forest">
                    <motion.span
                      className="h-1 w-1 bg-accent"
                      animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      aria-hidden="true"
                    />
                    {issuer}
                  </span>
                </div>

                <h3 className="relative mt-5 font-serif text-lg font-medium leading-6 text-ink-strong">
                  {name}
                </h3>

                <div className="relative mt-auto pt-5">
                  <div className="h-px bg-line transition-colors duration-300 group-hover:bg-accent/40" />

                  {credentialUrl ? (
                    <motion.a
                      href={credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={reduce ? undefined : { x: 2 }}
                      transition={SPRING}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-deep"
                    >
                      View credential
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </motion.a>
                  ) : null}

                  {image ? (
                    <div className="mt-4 overflow-hidden border border-line">
                      <img
                        src={image}
                        alt={`${name} certificate`}
                        loading="lazy"
                        className="w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}