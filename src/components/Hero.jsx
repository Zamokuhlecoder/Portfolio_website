import { ArrowRight, Download, MapPin } from "lucide-react";
import SocialLinks from "./SocialLinks";

const roles = [
  "Software Developer",
  "Mobile Application Developer",
  "Data & Business Intelligence Enthusiast",
];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-32">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted">
            <MapPin size={16} className="text-accent" aria-hidden="true" />
            Johannesburg, South Africa
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Zamokuhle Mazibuko.
          </h1>
          <p className="mt-5 max-w-xl text-xl font-semibold leading-snug text-ink-muted sm:text-2xl">
            Building Digital Solutions Through Software, Data &amp; Technology.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">
            I am a final-year Business Information Technology student at the
            University of Johannesburg, passionate about developing software
            applications, building intelligent systems, and transforming data
            into meaningful business insights.
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
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              View My Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="/cv/Zamokuhle-Mazibuko-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </div>
          <SocialLinks className="mt-8" />
        </div>

        <div
          aria-hidden="true"
          className="hidden aspect-square w-full max-w-md justify-self-end border border-line bg-surface p-8 lg:block"
        >
          <div className="flex h-full flex-col justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
              PORTFOLIO / 2026
            </p>
            <p className="text-[7rem] font-extrabold leading-none tracking-tighter text-accent">
              ZM
            </p>
            <div className="space-y-1 text-sm text-ink-muted">
              <p>Software · Data · Systems</p>
              <p>University of Johannesburg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
