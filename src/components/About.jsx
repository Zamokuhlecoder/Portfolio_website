import { ArrowUpRight, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const leadParagraph =
  "I am a final-year Information Technology student at the University of Johannesburg, with a focus on software development and business information systems.";

const bodyParagraphs = [
  "My interests span software engineering, mobile applications, data analytics, and business intelligence.",
  "Coursework and independent projects have given me experience developing web and mobile applications, database-driven systems, and data analysis solutions.",
  "I value clear requirements, thoughtful user experiences, and technology that responds to practical needs.",
  "I am looking for internship, graduate, and collaborative opportunities where I can continue learning and contribute to a technology team.",
];

const metrics = [
  { label: "Current stage", value: "Final year" },
  { label: "Study period", value: "2023–2026" },
  { label: "Focus", value: "Software & data" },
];

const relevantAreas = [
  "Software Development",
  "Communication Networks",
  "Business Analysis",
  "Information Systems",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-line"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-forest/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-28">
        <AnimatedSection>
          <SectionHeading eyebrow="01 — About" title="A little about me" />
          <p className="scroll-reveal mt-8 max-w-3xl text-pretty font-serif text-2xl leading-9 text-ink sm:text-[1.65rem] sm:leading-10">
            {leadParagraph}
          </p>

          <div className="scroll-stagger mt-8 max-w-3xl space-y-5 text-base leading-7 text-ink-muted">
            {bodyParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="scroll-stagger mt-10 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-surface px-4 py-5">
                <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  {metric.label}
                </dt>
                <dd className="mt-1.5 font-serif text-lg font-medium tracking-tight text-ink-strong">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <article className="premium-card lift group relative flex h-full flex-col overflow-hidden p-7 sm:p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Education</p>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-ink-strong">
                  University of Johannesburg
                </h3>
                <p className="mt-2 text-sm font-medium leading-6 text-ink-muted">
                  Diploma in Information Technology
                </p>
              </div>
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent ring-1 ring-accent/10"
                style={{ boxShadow: "var(--shadow-glow-accent)" }}
              >
                <GraduationCap size={21} aria-hidden="true" />
              </span>
            </div>

            <div className="relative mt-5">
              <span className="pill pill--forest">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-forest-soft"
                  aria-hidden="true"
                />
                2023 – 2026
              </span>
            </div>

            <hr className="my-7 border-line" />

            <p className="eyebrow">Relevant Areas</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {relevantAreas.map((area) => (
                <li key={area}>
                  <span className="pill pill--accent transition-transform hover:-translate-y-0.5">
                    {area}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative mt-auto pt-8">
              <a
                href="#contact"
                className="button-ghost group/cta w-fit text-sm"
              >
                Let&rsquo;s collaborate
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </article>
        </AnimatedSection>
      </div>
    </section>
  );
}
