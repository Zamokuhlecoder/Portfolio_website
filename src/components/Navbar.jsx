import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

const cvHref = "/cv/Zamokuhle-Mazibuko-CV.pdf";

function NavigationLinks({ activeSection, onNavigate, mobile = false }) {
  return (
    <ul className={mobile ? "flex flex-col gap-1" : "flex items-center gap-7"}>
      {navigation.map(({ label, id }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            aria-current={activeSection === id ? "page" : undefined}
            onClick={onNavigate}
            className={`relative block py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-accent after:transition-transform ${
              activeSection === id
                ? "text-accent after:scale-x-100"
                : "text-ink-muted after:scale-x-0 hover:text-ink hover:after:scale-x-100"
            }`}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function DownloadButton({ mobile = false }) {
  return (
    <a
      href={cvHref}
      download
      className={`button-primary px-4 py-2.5 ${mobile ? "mt-4 w-full" : ""}`}
    >
      <Download size={16} aria-hidden="true" />
      Download CV
    </a>
  );
}

export default function Navbar() {
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
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 shadow-sm backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8"
      >
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center gap-2.5 text-xs font-bold tracking-tight text-ink sm:text-sm"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-forest text-[0.65rem] font-bold tracking-wide text-white">
            ZM
          </span>
          <span className="whitespace-nowrap">
            Zamokuhle Sibusiso Mazibuko<span className="text-accent">.</span>
          </span>
        </a>

        <div className="hidden lg:block">
          <NavigationLinks activeSection={activeSection} />
        </div>

        <div className="hidden lg:block">
          <DownloadButton />
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-ink-muted transition-colors hover:border-forest hover:text-forest lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`${menuOpen ? "block" : "hidden"} border-t border-line bg-canvas px-6 py-4 shadow-lg lg:hidden`}
      >
        <NavigationLinks
          activeSection={activeSection}
          mobile
          onNavigate={() => setMenuOpen(false)}
        />
        <DownloadButton mobile />
      </div>
    </header>
  );
}
