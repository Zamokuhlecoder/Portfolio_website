"use client";

import { motion, useReducedMotion } from "motion/react";
import { Github, Linkedin } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];
const SPRING = { type: "spring", stiffness: 420, damping: 22 };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

const links = [
  {
    href: "https://github.com/Zamokuhlecoder",
    label: "GitHub profile",
    Icon: Github,
  },
  {
    href: "https://linkedin.com/in/zamokuhle-mazibuko-a571702a3",
    label: "LinkedIn profile",
    Icon: Linkedin,
  },
];

export default function SocialLinks({ className = "", size = 18 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`flex items-center gap-4 ${className}`}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-40px" }}
      variants={container}
    >
      {links.map(({ href, label, Icon }) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          variants={item}
          whileHover={reduce ? undefined : { y: -3, scale: 1.08 }}
          whileTap={reduce ? undefined : { scale: 0.94 }}
          transition={SPRING}
          className="group/social relative inline-flex text-ink-muted transition-colors duration-300 hover:text-accent focus-visible:text-accent"
        >
          {/* Ambient glow on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 rounded-full bg-accent/10 opacity-0 blur-md transition-opacity duration-300 group-hover/social:opacity-100"
          />

          <motion.span
            className="relative inline-flex"
            whileHover={reduce ? undefined : { rotate: -8 }}
            transition={SPRING}
          >
            <Icon size={size} aria-hidden="true" />
          </motion.span>

          {/* Underline accent */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover/social:scale-x-100"
          />
        </motion.a>
      ))}
    </motion.div>
  );
}