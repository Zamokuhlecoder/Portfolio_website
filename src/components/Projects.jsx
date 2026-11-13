import { projects } from "../data/projects";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <AnimatedSection>
          <SectionHeading
            eyebrow="03 — Projects"
            title="Selected Projects"
            description="A selection of applications and analytics work built to solve real operational and business problems."
          />
          {featuredProject ? (
            <ProjectCard project={featuredProject} variant="featured" />
          ) : null}
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant={
                  project.id === "freightshift" ? "image-right" : "image-top"
                }
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
