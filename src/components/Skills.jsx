import {
  BarChart3,
  Code2,
  Database,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";
import { skillGroups } from "../data/skills";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const groupIcons = [Code2, Smartphone, Server, Database, BarChart3, Wrench];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-line bg-forest-soft/25"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <AnimatedSection>
          <SectionHeading
            eyebrow="02 — Skills"
            title="My technical toolkit"
            description="The tools I use to build web and mobile applications, work with data, and create business intelligence reports."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(({ label, items }, index) => {
              const GroupIcon = groupIcons[index];
              const iconTone =
                index % 2 === 0
                  ? "bg-forest-soft text-forest"
                  : "bg-accent-soft text-accent";

              return (
                <article key={label} className="premium-card p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`skill-icon flex h-10 w-10 items-center justify-center rounded-md ${iconTone}`}
                    >
                      <GroupIcon size={19} aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.16em] text-forest/50">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-ink">
                    {label}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-ink-muted transition-colors hover:border-forest/35 hover:bg-forest-soft hover:text-forest"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
