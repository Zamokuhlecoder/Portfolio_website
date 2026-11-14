import {
  BarChart3,
  ExternalLink,
  Github,
  Image as ImageIcon,
  Monitor,
  Truck,
} from "lucide-react";
import { useState } from "react";

const projectArtwork = {
  aiviate: { Icon: Truck, mark: "A" },
  "retail-bi": { Icon: BarChart3, mark: "R" },
  freightshift: { Icon: Monitor, mark: "F" },
};

function ProjectImage({ project, className = "" }) {
  const [imageAvailable, setImageAvailable] = useState(Boolean(project.image));
  const artwork = projectArtwork[project.id] ?? {
    Icon: ImageIcon,
    mark: project.name.slice(0, 1),
  };
  const ArtworkIcon = artwork.Icon;

  return (
    <div className={`relative overflow-hidden bg-forest-soft ${className}`}>
      {imageAvailable ? (
        <img
          src={project.image}
          alt={project.imageAlt ?? `${project.name} project preview`}
          loading="lazy"
          onError={() => setImageAvailable(false)}
          className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
        />
      ) : (
        <div
          aria-hidden="true"
          className={`project-artwork project-artwork--${project.id} h-full w-full`}
        >
          <div className="project-artwork__top">
            <span className="project-artwork__icon">
              <ArtworkIcon size={22} strokeWidth={1.6} />
            </span>
            <span className="project-artwork__index">
              SELECTED WORK / {artwork.mark}
            </span>
          </div>
          <span className="project-artwork__monogram">{artwork.mark}</span>
        </div>
      )}
    </div>
  );
}

function ProjectContent({ project, featured = false }) {
  return (
    <div className={featured ? "p-8 lg:p-10" : "p-6"}>
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-accent">
        <span className="h-1 w-1 bg-accent" aria-hidden="true" />
        {project.category}
      </p>
      <h3 className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink-strong">
        {project.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-ink-muted">
        {project.tagline}
      </p>
      <p className="mt-5 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <ul className="mt-5 grid gap-2 text-sm text-ink-muted sm:grid-cols-2">
        {project.features.slice(0, featured ? 6 : 4).map((feature) => (
          <li key={feature} className="flex gap-2">
            <span
              className="mt-1.5 h-1 w-1 shrink-0 bg-accent"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      {project.features.length > (featured ? 6 : 4) ? (
        <details className="mt-4 border-t border-line pt-3">
          <summary className="project-feature-toggle">
            View {project.features.length - (featured ? 6 : 4)} more project
            features
          </summary>
          <ul className="mt-3 grid gap-2 text-sm text-ink-muted sm:grid-cols-2">
            {project.features.slice(featured ? 6 : 4).map((feature) => (
              <li key={feature} className="flex gap-2">
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 bg-accent"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </details>
      ) : null}

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="border border-line bg-canvas px-2 py-1 text-xs text-ink-muted"
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
            className="button-primary px-4 py-2.5"
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
            className="button-secondary px-4 py-2.5"
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
      <article className="premium-card mt-12 grid gap-0 overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
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
      <article className="premium-card grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
        <ProjectImage
          project={project}
          className="order-first aspect-[16/9] border-b border-line lg:order-last lg:aspect-auto lg:border-b-0 lg:border-l"
        />
        <ProjectContent project={project} />
      </article>
    );
  }

  return (
    <article className="premium-card overflow-hidden">
      <ProjectImage
        project={project}
        className="aspect-[16/9] border-b border-line"
      />
      <ProjectContent project={project} />
    </article>
  );
}
