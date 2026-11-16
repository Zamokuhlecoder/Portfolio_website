"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const DEFAULT_EASE = [0.16, 1, 0.3, 1];

function directionalOffset(direction, distance) {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    case "none":
    default:
      return {};
  }
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.65,
  direction = "up",
  distance = 18,
  blur = 6,
  margin = "-80px",
  once = true,
  respectReducedMotion = true,
  onEntered,
}) {
  const prefersReducedMotion = useReducedMotion();
  const skip = respectReducedMotion && !!prefersReducedMotion;

  const [hasEntered, setHasEntered] = useState(false);

  const initial = skip
    ? false
    : {
        opacity: 0,
        ...(blur > 0 ? { filter: `blur(${blur}px)` } : null),
        ...directionalOffset(direction, distance),
      };

  const animate = skip
    ? undefined
    : {
        opacity: 1,
        ...(blur > 0 ? { filter: "blur(0px)" } : null),
        ...directionalOffset(direction, 0),
      };

  return (
    <motion.section
      className={
        `animated-section ${hasEntered ? "is-visible" : ""} ${className}`.trim()
      }
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin }}
      transition={{ duration, ease: DEFAULT_EASE, delay }}
      onViewportEnter={() => {
        if (!hasEntered) {
          setHasEntered(true);
          onEntered?.();
        }
      }}
    >
      {children}
    </motion.section>
  );
}