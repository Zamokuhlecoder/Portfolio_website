import { ArrowUp } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-line bg-surface"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-sm font-bold tracking-tight text-ink-strong">
            Zamokuhle Sibusiso Mazibuko
          </p>
          <p className="mt-1 text-xs text-ink-muted">
            Software · Mobile · Data
          </p>
        </div>
        <div className="flex items-center gap-5">
          <SocialLinks />
          <button
            type="button"
            aria-label="Back to top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              })
            }
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="border-t border-line-faint px-6 py-4 text-center text-xs text-ink-faint lg:px-8">
        © {new Date().getFullYear()} Zamokuhle Sibusiso Mazibuko. All rights
        reserved.
      </div>
    </motion.footer>
  );
}
