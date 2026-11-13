import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

function ProjectImage({ project, className = "" }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-canvas ${className}`}>
      {imageAvailable ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          onError={() => setImageAvailable(false)}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full min-h-48 flex-col items-center justify-center gap-2 p-6 text-center text-ink-muted">
          <span className="text-sm font-semibold text-ink">{project.name}</span>
          <span className="text-sm">Screenshot coming soon</span>
        </div>
      )}
    </div>
  );
}

function ProjectContent({ project, featured = false }) {
  return (
    <div className={featured ? "p-8 lg:p-10" : "p-6"}>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {project.category}
      </p>
      <h3 className="mt-3 text-2xl font-bold text-ink">{project.name}</h3>
      <p className="mt-1 text-sm font-medium text-ink-muted">
        {project.tagline}
      </p>
      <p className="mt-5 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <ul className="mt-5 grid gap-2 text-sm text-ink-muted sm:grid-cols-2">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span
              className="mt-1.5 h-1 w-1 shrink-0 bg-accent"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="border border-line px-2 py-1 text-xs text-ink-muted"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Live Demo
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default function ProjectCard({ project, variant = "image-top" }) {
  if (variant === "featured") {
    return (
      <article className="mt-12 grid gap-0 border border-line bg-surface lg:grid-cols-[1.1fr_0.9fr]">
        <ProjectImage
          project={project}
          className="aspect-[4/3] lg:aspect-auto"
        />
        <ProjectContent project={project} featured />
      </article>
    );
  }

  if (variant === "image-right") {
    return (
      <article className="grid border border-line bg-surface lg:grid-cols-[1.1fr_0.9fr]">
        <ProjectImage
          project={project}
          className="order-first aspect-[16/9] border-b border-line lg:order-last lg:aspect-auto lg:border-b-0 lg:border-l"
        />
        <ProjectContent project={project} />
      </article>
    );
  }

  return (
    <article className="border border-line bg-surface">
      <ProjectImage
        project={project}
        className="aspect-[16/9] border-b border-line"
      />
      <ProjectContent project={project} />
    </article>
  );
}
