"use client";

import { motion, useReducedMotion } from "motion/react";
import { projects } from "../data/projects";
import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const EASE = [0.22, 1, 0.36, 1];

const cardRise = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

export default function Projects() {
  const reduce = useReducedMotion();
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <AnimatedSection>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <SectionHeading
              eyebrow="03 — Projects"
              title="Selected work"
              description="A closer look at projects across software, logistics, web design, and analytics—along with the tools and thinking behind each one."
            />
          </motion.div>

          {featuredProject ? (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 32, filter: "blur(8px)" }}
              whileInView={
                reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            >
              <ProjectCard project={featuredProject} variant="featured" />
            </motion.div>
          ) : null}

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardRise}
                initial={reduce ? false : "hidden"}
                whileInView={reduce ? undefined : "visible"}
                viewport={{ once: true, margin: "-40px" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}