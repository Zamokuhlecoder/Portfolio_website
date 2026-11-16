"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Download, Menu, X } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];
const SPRING = { type: "spring", stiffness: 380, damping: 30 };

const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

const cvHref = "/cv/Zamokuhle-Mazibuko-CV.pdf";

function NavigationLinks({
  activeSection,
  onNavigate,
  mobile = false,
}) {
  return (
    <ul className={mobile ? "flex flex-col gap-1" : "flex items-center gap-7"}>
      {navigation.map(({ label, id }) => {
        const isActive = activeSection === id;
        return (
          <li key={id} className="relative">
            <a
              href={`#${id}`}
              aria-current={isActive ? "page" : undefined}
              onClick={onNavigate}
              className={`relative block py-2 text-sm font-medium transition-colors ${
                mobile ? "pl-4" : ""
              } ${isActive ? "text-accent" : "text-ink-muted hover:text-ink"}`}
            >
              {label}
              {isActive ? (
                <motion.span
                  layoutId={
                    mobile
                      ? "mobile-active-indicator"
                      : "desktop-active-indicator"
                  }
                  className={
                    mobile
                      ? "absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
                      : "absolute inset-x-0 -bottom-1 h-px bg-accent"
                  }
                  transition={SPRING}
                />
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

function DownloadButton({ mobile = false, reduce }) {
  return (
    <motion.a
      href={cvHref}
      download
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      transition={SPRING}
      className={`button-primary group/dl px-4 py-2.5 ${
        mobile ? "mt-4 flex w-full items-center justify-center gap-2" : ""
      }`}
    >
      <Download
        size={16}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover/dl:translate-y-0.5"
      />
      Download CV
    </motion.a>
  );
}

export default function Navbar() {
  const reduce = !!useReducedMotion();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="sticky top-0 z-50 border-b border-line bg-canvas/90 shadow-sm backdrop-blur-xl"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8"
      >
        <motion.a
          href="#home"
          onClick={() => setMenuOpen(false)}
          whileHover={reduce ? undefined : { x: 2 }}
          transition={SPRING}
          className="inline-flex items-center gap-2.5 text-xs font-bold tracking-tight text-ink sm:text-sm"
        >
          <motion.span
            whileHover={reduce ? undefined : { rotate: -6, scale: 1.06 }}
            transition={SPRING}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-forest text-[0.65rem] font-bold tracking-wide text-white"
          >
            ZM
          </motion.span>
          <span className="whitespace-nowrap">
            Zamokuhle Sibusiso Mazibuko
            <motion.span
              className="inline-block text-accent"
              animate={reduce ? undefined : { opacity: [1, 0.4, 1] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              .
            </motion.span>
          </span>
        </motion.a>

        <div className="hidden lg:block">
          <NavigationLinks activeSection={activeSection} />
        </div>

        <div className="hidden lg:block">
          <DownloadButton reduce={reduce} />
        </div>

        <motion.button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-ink-muted transition-colors hover:border-forest hover:text-forest lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          whileTap={reduce ? undefined : { scale: 0.92 }}
          transition={SPRING}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={reduce ? false : { rotate: -90, opacity: 0 }}
                animate={reduce ? undefined : { rotate: 0, opacity: 1 }}
                exit={reduce ? undefined : { rotate: 90, opacity: 0 }}
                transition={{ duration: 0.22, ease: EASE }}
                className="inline-flex"
              >
                <X size={20} aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={reduce ? false : { rotate: 90, opacity: 0 }}
                animate={reduce ? undefined : { rotate: 0, opacity: 1 }}
                exit={reduce ? undefined : { rotate: -90, opacity: 0 }}
                transition={{ duration: 0.22, ease: EASE }}
                className="inline-flex"
              >
                <Menu size={20} aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-line bg-canvas shadow-lg lg:hidden"
          >
            <div className="px-6 py-4">
              <NavigationLinks
                activeSection={activeSection}
                mobile
                onNavigate={() => setMenuOpen(false)}
              />
              <DownloadButton mobile reduce={reduce} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}