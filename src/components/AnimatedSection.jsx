import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <motion.section
      className={`animated-section ${hasEntered ? "is-visible" : ""} ${className}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      onViewportEnter={() => setHasEntered(true)}
    >
      {children}
    </motion.section>
  );
}
