import { BadgeCheck } from "lucide-react";
import { certifications } from "../data/certifications";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-b border-line bg-white/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <AnimatedSection>
          <SectionHeading
            eyebrow="04 — Certifications"
            title="Certifications & Professional Development"
            description="Formal training and credentials supporting my work in data analytics and business intelligence."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {certifications.map(({ name, issuer, credentialUrl, image }) => (
              <article
                key={name}
                className="flex gap-5 border border-line bg-surface p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-line bg-canvas text-accent">
                  <BadgeCheck size={22} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-ink">{name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{issuer}</p>
                  {credentialUrl ? (
                    <a
                      href={credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
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
