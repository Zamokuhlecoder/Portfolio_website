import { ArrowRight, Download, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

const roles = [
  "Software Development",
  "Mobile Application Development",
  "Data & Business Intelligence",
];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-8 lg:py-32">
        <div className="hero-intro">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-semibold tracking-wide text-ink-muted shadow-sm">
            <MapPin size={15} className="text-accent" aria-hidden="true" />
            Johannesburg, South Africa
          </p>
          <h1 className="mt-7 max-w-3xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-ink-strong sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Hi, I&apos;m{" "}
            <span className="text-accent">Zamokuhle Sibusiso Mazibuko.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-semibold leading-snug tracking-tight text-accent-deep sm:text-2xl">
            Where software, data and business meet.
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-ink-muted">
            I&rsquo;m a final-year Information Technology student at the
            University of Johannesburg, interested in building useful software
            and turning data into practical insight.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-muted">
            {roles.map((role) => (
              <li key={role} className="inline-flex items-center gap-2">
                <span className="h-1 w-1 bg-accent" aria-hidden="true" />
                {role}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View selected projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="/cv/Zamokuhle-Mazibuko-CV.pdf"
              download
              className="button-secondary"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </div>
          <SocialLinks className="mt-8" />
        </div>

        <figure className="hero-panel group relative mx-auto aspect-[4/5] w-full max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-md lg:justify-self-end">
          <div className="hero-portrait-frame">
            <img
              src="/profilepicture/ProfilePicture.jpg"
              alt="Portrait of Zamokuhle Sibusiso Mazibuko"
              fetchPriority="high"
              decoding="async"
              className="hero-portrait-image h-full w-full object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink-strong/35 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="hero-portrait-caption absolute inset-x-4 bottom-4 flex items-end gap-3 sm:inset-x-5 sm:bottom-5">
              <div className="min-w-0 flex-1 rounded-lg border border-white/75 bg-surface/90 px-4 py-3 shadow-md backdrop-blur-sm">
                <p className="text-sm font-bold text-ink-strong">
                  Information Technology
                </p>
                <p className="mt-1 text-xs text-ink-muted">
                  University of Johannesburg
                </p>
              </div>
              <span className="mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold tracking-wider text-white shadow-md">
                ZM
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
