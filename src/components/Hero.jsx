"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

const EASE = [0.22, 1, 0.36, 1];
const SPRING = { type: "spring", stiffness: 380, damping: 24 };

const roles = [
  "Software Development",
  "Mobile Application Development",
  "Data & Business Intelligence",
];

const intro = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

const rolesStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const roleItem = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const panelReveal = {
  hidden: { opacity: 0, scale: 0.94, y: 32 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: EASE, delay: 0.15 },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="hero-section relative isolate scroll-mt-24 overflow-hidden border-b border-line">
      <div aria-hidden="true" className="hero-grid" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-8 lg:py-32">
        {/* ─── Left: intro ───────────────────────────────────── */}
        <motion.div
          className="hero-intro"
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "visible"}
          variants={intro}
        >
          <motion.p
            variants={rise}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-semibold tracking-wide text-ink-muted shadow-sm"
          >
            <motion.span
              animate={reduce ? undefined : { y: [0, -2, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex text-accent"
            >
              <MapPin size={15} aria-hidden="true" />
            </motion.span>
            Johannesburg, South Africa
          </motion.p>

          <motion.h1
            variants={rise}
            className="mt-7 max-w-3xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-ink-strong sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            Hi, I&apos;m{" "}
            <span className="relative inline-block text-accent">
              Zamokuhle Sibusiso Mazibuko.
              <motion.span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-accent/40"
                initial={reduce ? false : { scaleX: 0 }}
                animate={reduce ? undefined : { scaleX: 1 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.9 }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-xl text-xl font-semibold leading-snug tracking-tight text-accent-deep sm:text-2xl"
          >
            Where <span className="hero-flow-word">software,</span>{" "}
            <span className="hero-flow-word">data</span> and{" "}
            <span className="hero-flow-word">business</span> meet.
          </motion.p>

          <motion.p
            variants={rise}
            className="mt-6 max-w-xl text-base leading-7 text-ink-muted"
          >
            I completed my Information Technology qualification at the
            University of Johannesburg in 2026. I&rsquo;m interested in building
            useful software and turning data into practical insight.
          </motion.p>

          <motion.ul
            variants={rolesStagger}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-muted"
          >
            {roles.map((role) => (
              <motion.li
                key={role}
                variants={roleItem}
                className="inline-flex items-center gap-2"
              >
                <motion.span
                  className="h-1 w-1 bg-accent"
                  animate={reduce ? undefined : { opacity: [1, 0.4, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  aria-hidden="true"
                />
                <span className="hero-role-label">{role}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={rise}
            className="mt-9 flex flex-wrap gap-3"
          >
            <motion.a
              href="#projects"
              className="button-primary group/cta"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={SPRING}
            >
              View selected projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
                aria-hidden="true"
              />
            </motion.a>

            <motion.a
              href="/cv/Zamokuhle-Mazibuko-CV.pdf"
              download
              className="button-secondary group/dl"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={SPRING}
            >
              <Download
                size={16}
                className="transition-transform duration-300 group-hover/dl:translate-y-0.5"
                aria-hidden="true"
              />
              Download CV
            </motion.a>
          </motion.div>

          <motion.div variants={rise}>
            <SocialLinks className="mt-8" />
          </motion.div>
          <motion.p variants={rise} className="hero-signature mt-10">
            Software <span> / </span> Data <span> / </span> Business systems
          </motion.p>
        </motion.div>

        {/* ─── Right: portrait ───────────────────────────────── */}
        <motion.figure
          className="hero-panel group relative mx-auto aspect-[4/5] w-full max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-md lg:justify-self-end"
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "visible"}
          variants={panelReveal}
        >
          <div className="hero-sparkles" aria-hidden="true">
            <span className="hero-spark hero-spark--one" />
            <span className="hero-spark hero-spark--two" />
            <span className="hero-spark hero-spark--three" />
            <span className="hero-spark hero-spark--four" />
            <span className="hero-spark hero-spark--five" />
          </div>
          {/* Animated accent ring behind portrait */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-accent/25 via-accent/0 to-forest/25 blur-2xl"
            animate={
              reduce
                ? undefined
                : { opacity: [0.5, 0.9, 0.5], scale: [1, 1.02, 1] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="hero-portrait-frame relative"
            whileHover={reduce ? undefined : { y: -4 }}
            transition={SPRING}
          >
            <img
              src="/profilepicture/ProfilePicture.jpg"
              alt="Portrait of Zamokuhle Sibusiso Mazibuko"
              fetchPriority="high"
              decoding="async"
              className="hero-portrait-image h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink-strong/35 to-transparent"
              aria-hidden="true"
            />

            <motion.figcaption
              className="hero-portrait-caption absolute inset-x-4 bottom-4 flex items-end gap-3 sm:inset-x-5 sm:bottom-5"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
            >
              <div className="min-w-0 flex-1 rounded-lg border border-white/75 bg-surface/90 px-4 py-3 shadow-md backdrop-blur-sm">
                <p className="text-sm font-bold text-ink-strong">
                  Information Technology
                </p>
                <p className="mt-1 text-xs text-ink-muted">
                  University of Johannesburg
                </p>
              </div>
              <motion.span
                whileHover={reduce ? undefined : { rotate: -6, scale: 1.06 }}
                transition={SPRING}
                className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold tracking-wider text-white shadow-md"
              >
                ZM
              </motion.span>
            </motion.figcaption>
          </motion.div>
        </motion.figure>
      </div>
    </section>
  );
}