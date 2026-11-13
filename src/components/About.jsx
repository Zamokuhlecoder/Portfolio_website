import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const paragraphs = [
  "I am a driven and self-motivated final-year Diploma in Business Information Technology student at the University of Johannesburg.",
  "My interests lie at the intersection of software engineering, data analytics, business intelligence, and emerging technologies.",
  "Through academic projects and independent development, I have gained practical experience building web applications, mobile applications, database-driven systems, and data analytics solutions.",
  "I enjoy solving real-world problems through technology, developing user-friendly systems, and finding ways to improve business processes through automation and data-driven decision-making.",
  "I am continuously developing my technical skills and looking for opportunities to contribute to innovative technology teams through internships, graduate programmes, and collaborative projects.",
];

const relevantAreas = [
  "Software Development",
  "Communication Networks",
  "Business Analysis",
  "Information Systems",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <AnimatedSection>
          <SectionHeading eyebrow="01 — About" title="About Me" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="border border-line bg-surface p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Education
            </p>
            <h3 className="mt-4 text-xl font-bold text-ink">
              University of Johannesburg
            </h3>
            <p className="mt-1 text-sm font-medium text-ink-muted">
              Diploma in Business Information Technology
            </p>
            <p className="mt-1 text-sm text-ink-muted">2023 – 2026</p>
            <hr className="my-6 border-line" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Relevant Areas
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-muted">
              {relevantAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
