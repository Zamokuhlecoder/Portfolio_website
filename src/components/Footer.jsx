"use client";

import { ArrowUp } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import SocialLinks from "./SocialLinks";

const EASE = [0.16, 1, 0.3, 1];
const SPRING = { type: "spring", stiffness: 380, damping: 24 };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const rise = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export default function Footer() {
  const reduce = useReducedMotion();

  const scrollToTop = () => {
    const isReduced =
      reduce ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: isReduced ? "instant" : "smooth" });
  };

  return (
    <motion.footer
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="relative border-t border-line bg-surface"
    >
      {/* Animated accent line under top border */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        initial={reduce ? false : { scaleX: 0, opacity: 0 }}
        whileInView={
          reduce ? undefined : { scaleX: 1, opacity: 1 }
        }
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <motion.div variants={rise}>
          <motion.p
            className="text-sm font-bold tracking-tight text-ink-strong"
            whileHover={reduce ? undefined : { x: 2 }}
            transition={SPRING}
          >
            Zamokuhle Sibusiso Mazibuko
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="mt-1 inline-flex items-center gap-2 text-xs text-ink-muted"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              animate={
                reduce
                  ? undefined
                  : { opacity: [1, 0.35, 1], scale: [1, 0.85, 1] }
              }
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />
            Software · Mobile · Data
          </motion.p>
        </motion.div>

        <motion.div
          variants={rise}
          className="flex items-center gap-5"
        >
          <motion.div variants={fadeIn}>
            <SocialLinks />
          </motion.div>

          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            whileHover={reduce ? undefined : { y: -3, scale: 1.05 }}
            whileTap={reduce ? undefined : { scale: 0.94 }}
            transition={SPRING}
            className="group/back inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-strong text-ink-muted transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <motion.span
              className="inline-flex"
              whileHover={reduce ? undefined : { y: -1.5 }}
              transition={SPRING}
            >
              <ArrowUp size={16} aria-hidden="true" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn}
        className="border-t border-line-faint px-6 py-4 text-center text-xs text-ink-faint lg:px-8"
      >
        © {new Date().getFullYear()} Zamokuhle Sibusiso Mazibuko. All rights
        reserved.
      </motion.div>
    </motion.footer>
  );
}