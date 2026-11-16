"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  BarChart3,
  Code2,
  Database,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";
import { skillGroups } from "../data/skills";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const EASE = [0.22, 1, 0.36, 1];
const SPRING = { type: "spring", stiffness: 340, damping: 24 };

const groupIcons = [Code2, Smartphone, Server, Database, BarChart3, Wrench];

const cardRise = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

const pillStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.2 } },
};

const pillItem = {
  hidden: { opacity: 0, scale: 0.85, y: 6 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASE },
  },
};

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-line bg-forest-soft/25"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <AnimatedSection>
          <SectionHeading
            eyebrow="02 — Skills"
            title="My technical toolkit"
            description="The tools I use to build web and mobile applications, work with data, and create business intelligence reports."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(({ label, items }, index) => {
              const GroupIcon = groupIcons[index];
              const iconTone =
                index % 2 === 0
                  ? "bg-forest-soft text-forest"
                  : "bg-accent-soft text-accent";

              return (
                <motion.article
                  key={label}
                  variants={cardRise}
                  initial={reduce ? false : "hidden"}
                  whileInView={reduce ? undefined : "visible"}
                  viewport={{ once: true, margin: "-40px" }}
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={SPRING}
                  className="premium-card group relative overflow-hidden p-6"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(400px circle at 50% 0%, color-mix(in oklab, var(--color-accent, #8b5cf6) 8%, transparent), transparent 70%)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative flex items-center justify-between">
                    <motion.span
                      whileHover={reduce ? undefined : { rotate: -8, scale: 1.06 }}
                      transition={SPRING}
                      className={`skill-icon flex h-10 w-10 items-center justify-center rounded-md ${iconTone}`}
                    >
                      <GroupIcon size={19} aria-hidden="true" />
                    </motion.span>

                    <span className="text-xs font-semibold tracking-[0.16em] text-forest/50">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="relative mt-5 text-sm font-bold uppercase tracking-wide text-ink">
                    {label}
                  </h3>

                  <motion.ul
                    className="relative mt-4 flex flex-wrap gap-2"
                    initial={reduce ? false : "hidden"}
                    whileInView={reduce ? undefined : "visible"}
                    viewport={{ once: true, margin: "-40px" }}
                    variants={pillStagger}
                  >
                    {items.map((item) => (
                      <motion.li
                        key={item}
                        variants={pillItem}
                        whileHover={
                          reduce
                            ? undefined
                            : { y: -2, scale: 1.05 }
                        }
                        transition={SPRING}
                        className="cursor-default border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-ink-muted transition-colors duration-300 hover:border-forest/35 hover:bg-forest-soft hover:text-forest"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.article>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}