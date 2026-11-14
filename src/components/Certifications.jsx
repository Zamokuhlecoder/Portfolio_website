import { BadgeCheck } from "lucide-react";
import { certifications } from "../data/certifications";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-b border-line bg-accent-soft/25"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <AnimatedSection>
          <SectionHeading
            eyebrow="04 — Certifications"
            title="Learning & certifications"
            description="Google certificates and coursework in analytics, machine learning, statistics, and regression, alongside Microsoft Power BI training."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {certifications.map(({ name, issuer, credentialUrl, image }) => (
              <article
                key={name}
                className="premium-card flex min-h-56 flex-col p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="certification-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-forest text-surface">
                    <BadgeCheck size={21} aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-2 border border-line bg-canvas px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-forest">
                    <span className="h-1 w-1 bg-accent" aria-hidden="true" />
                    {issuer}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-lg font-medium leading-6 text-ink-strong">
                  {name}
                </h3>
                <div className="mt-auto pt-5">
                  <div className="h-px bg-line" />
                  {credentialUrl ? (
                    <a
                      href={credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-accent hover:text-accent-deep"
                    >
                      View credential
                    </a>
                  ) : null}
                  {image ? (
                    <img
                      src={image}
                      alt={`${name} certificate`}
                      loading="lazy"
                      className="mt-4 w-full border border-line object-contain"
                    />
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
