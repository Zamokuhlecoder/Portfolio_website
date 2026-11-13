import { skillGroups } from "../data/skills";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-line bg-white/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <AnimatedSection>
          <SectionHeading
            eyebrow="02 — Skills"
            title="Technical Expertise"
            description="A practical toolkit spanning software engineering, mobile development, databases, and business intelligence."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(({ label, items }) => (
              <div key={label} className="border border-line bg-surface p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
                  {label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
