"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const rise = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

const titleRise = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};

export default function SectionHeading({ eyebrow, title, description, id }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      id={id}
      className="scroll-mt-24"
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-60px" }}
      variants={container}
    >
      <motion.p
        variants={rise}
        className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent"
      >
        <motion.span
          className="h-1.5 w-1.5 bg-accent"
          animate={
            reduce
              ? undefined
              : { opacity: [1, 0.35, 1], scale: [1, 0.85, 1] }
          }
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <span>{eyebrow}</span>
      </motion.p>

      <motion.h2
        variants={titleRise}
        className="mt-4 max-w-4xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-ink-strong sm:text-5xl"
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          variants={rise}
          className="mt-4 max-w-2xl text-base leading-7 text-ink-muted"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}