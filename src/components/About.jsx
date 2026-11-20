"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const EASE = [0.22, 1, 0.36, 1];
const SPRING = { type: "spring", stiffness: 380, damping: 24 };

const leadParagraph =
  "I completed my Information Technology qualification at the University of Johannesburg in 2026, with a focus on software development and business information systems.";

const bodyParagraphs = [
  "My interests span software engineering, mobile applications, data analytics, and business intelligence.",
  "Coursework and independent projects have given me experience developing web and mobile applications, database-driven systems, and data analysis solutions.",
  "I value clear requirements, thoughtful user experiences, and technology that responds to practical needs.",
  "I am looking for internship, graduate, and collaborative opportunities where I can continue learning and contribute to a technology team.",
];

const metrics = [
  { label: "Qualification", value: "Completed 2026" },
  { label: "Study period", value: "2023–2026" },
  { label: "Focus", value: "Software & data" },
];

const relevantAreas = [
  "Software Development",
  "Communication Networks",
  "Business Analysis",
  "Information Systems",
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const rise = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

export default function About() {
  const reduce = useReducedMotion();
  const cardRef = useRef(null);
  const [glow, setGlow] = useState({
    x: 50,
    y: 50,
    on: false,
  });

  const handlePointer = (e) => {
    const el = cardRef.current;
    if (!el || reduce) return;
    const r = el.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      on: true,
    });
  };

  return (
    <section id="about" className="relative isolate scroll-mt-24 overflow-hidden border-b border-line">
      {/* animated ambient blobs */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]"
          animate={reduce ? undefined : { y: [0, -24, 0], x: [0, 16, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-forest/10 blur-[120px]"
          animate={reduce ? undefined : { y: [0, 20, 0], x: [0, -18, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-28">
        <AnimatedSection>
          <SectionHeading eyebrow="01 — About" title="A little about me" />

          <motion.div
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={rise}
              className="mt-8 max-w-3xl text-pretty font-serif text-2xl leading-9 text-ink sm:text-[1.65rem] sm:leading-10"
            >
              {leadParagraph}
            </motion.p>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-ink-muted">
              {bodyParagraphs.map((p) => (
                <motion.p key={p} variants={rise} className="text-pretty">
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.dl
              variants={rise}
              className="mt-10 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line"
            >
              {metrics.map((m) => (
                <motion.div
                  key={m.label}
                  whileHover={reduce ? undefined : { y: -3 }}
                  transition={SPRING}
                  className="group/metric bg-surface px-4 py-5 transition-colors hover:bg-surface-raised"
                >
                  <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                    {m.label}
                  </dt>
                  <dd className="mt-1.5 font-serif text-lg font-medium tracking-tight text-ink-strong">
                    {m.value}
                  </dd>
                  <span className="mt-3 block h-px w-6 origin-left scale-x-100 bg-line-strong transition-transform duration-300 group-hover/metric:scale-x-[2]" />
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <motion.article
            ref={cardRef}
            onPointerMove={handlePointer}
            onPointerLeave={() => setGlow((g) => ({ ...g, on: false }))}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="premium-card relative flex h-full flex-col overflow-hidden p-7 sm:p-8"
          >
            {/* mouse-following glow */}
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-500"
              style={{
                opacity: glow.on ? 1 : 0,
                background: `radial-gradient(340px circle at ${glow.x}% ${glow.y}%, color-mix(in oklab, var(--color-accent, #8b5cf6) 14%, transparent), transparent 70%)`,
              }}
              aria-hidden="true"
            />

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Education</p>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-ink-strong">
                  University of Johannesburg
                </h3>
                <p className="mt-2 text-sm font-medium leading-6 text-ink-muted">
                  Diploma in Information Technology
                </p>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent ring-1 ring-accent/10">
                <GraduationCap size={21} aria-hidden="true" />
              </span>
            </div>

            <div className="relative mt-5">
              <span className="pill pill--forest">Completed 2026 · 2023 – 2026</span>
            </div>
            <hr className="my-7 border-line" />
            <p className="eyebrow">Relevant Areas</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {relevantAreas.map((area) => (
                <li key={area}>
                  <span className="pill pill--accent">{area}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-auto pt-8">
              <a href="#contact" className="button-ghost group/cta w-fit text-sm">
                Let&rsquo;s collaborate
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.article>
        </AnimatedSection>
      </div>
    </section>
  );
}