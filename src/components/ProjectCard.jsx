import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Image as ImageIcon,
  Monitor,
  Truck,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];
const SPRING = { type: "spring", stiffness: 340, damping: 26 };

const projectArtwork = {
  aiviate: { Icon: Truck, mark: "A" },
  "retail-bi": { Icon: BarChart3, mark: "R" },
  freightshift: { Icon: Monitor, mark: "F" },
};

const contentStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const riseItem = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

const featureList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const featureItem = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } },
};

const techList = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const techItem = {
  hidden: { opacity: 0, y: 6, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: EASE },
  },
};

function ProjectImage({ project, className = "" }) {
  const reduce = useReducedMotion();
  const [imageIndex, setImageIndex] = useState(0);
  const [failedImages, setFailedImages] = useState([]);
  const images = project.images?.length
    ? project.images
    : project.image
      ? [{ src: project.image, alt: project.imageAlt ?? `${project.name} project preview` }]
      : [];
  const image = images[imageIndex];
  const imageAvailable = image && !failedImages.includes(image.src);
  const artwork = projectArtwork[project.id] ?? {
    Icon: ImageIcon,
    mark: project.name.slice(0, 1),
  };
  const ArtworkIcon = artwork.Icon;

  return (
    <motion.div
      className={`group/image relative overflow-hidden bg-forest-soft ${images.length > 1 ? "project-image--gallery" : ""} ${className}`}
      initial={reduce ? false : { opacity: 0, scale: 1.03, filter: "blur(6px)" }}
      whileInView={
        reduce ? undefined : { opacity: 1, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {imageAvailable ? (
        <div className={`project-preview ${images.length > 1 ? "project-preview--gallery" : ""}`}>
          <div className="project-preview__frame">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              onError={() => {
                console.error(`Could not load project image: ${image.src}`);
                setFailedImages((failed) => [...failed, image.src]);
              }}
              className="project-preview__image transition-transform duration-700 ease-out group-hover/image:scale-[1.04]"
            />
          </div>
        </div>
      ) : (
        <div
          aria-hidden="true"
          className={`project-artwork project-artwork--${project.id} h-full w-full`}
        >
          <div className="project-artwork__top">
            <motion.span
              className="project-artwork__icon inline-flex"
              whileHover={reduce ? undefined : { rotate: -8, scale: 1.06 }}
              transition={SPRING}
            >
              <ArtworkIcon size={22} strokeWidth={1.6} />
            </motion.span>
            <span className="project-artwork__index">
              SELECTED WORK / {artwork.mark}
            </span>
          </div>
          <motion.span
            className="project-artwork__monogram"
            animate={reduce ? undefined : { opacity: [0.82, 1, 0.82] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {artwork.mark}
          </motion.span>
        </div>
      )}
      {images.length > 1 ? (
        <div className="project-gallery-controls">
          <span className="project-gallery-count" aria-live="polite" aria-atomic="true">
            Image {imageIndex + 1} of {images.length}
          </span>
          <div className="project-gallery-buttons">
            <button
              type="button"
              aria-label={`Previous ${project.name} image`}
              onClick={() => setImageIndex((index) => (index - 1 + images.length) % images.length)}
            >
              <ChevronLeft size={17} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={`Next ${project.name} image`}
              onClick={() => setImageIndex((index) => (index + 1) % images.length)}
            >
              <ChevronRight size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </motion.div>
  );
}

function ProjectContent({ project, featured = false }) {
  const reduce = useReducedMotion();
  const visibleCount = featured ? 6 : 4;
  const visibleFeatures = project.features.slice(0, visibleCount);
  const hiddenFeatures = project.features.slice(visibleCount);

  return (
    <motion.div
      className={featured ? "p-8 lg:p-10" : "p-6"}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, margin: "-60px" }}
      variants={contentStagger}
    >
      <motion.p
        variants={riseItem}
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-accent"
      >
        <motion.span
          className="h-1 w-1 bg-accent"
          animate={reduce ? undefined : { opacity: [1, 0.4, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        {project.category}
      </motion.p>

      <motion.h3
        variants={riseItem}
        className="mt-3 font-serif text-3xl font-medium tracking-tight text-ink-strong"
      >
        {project.name}
      </motion.h3>

      <motion.p
        variants={riseItem}
        className="mt-1 text-sm font-medium text-ink-muted"
      >
        {project.tagline}
      </motion.p>

      <motion.p
        variants={riseItem}
        className="mt-5 text-sm leading-relaxed text-ink-muted"
      >
        {project.description}
      </motion.p>

      <motion.ul
        variants={featureList}
        className="mt-5 grid gap-2 text-sm text-ink-muted sm:grid-cols-2"
      >
        {visibleFeatures.map((feature) => (
          <motion.li
            key={feature}
            variants={featureItem}
            className="flex gap-2"
          >
            <span
              className="mt-1.5 h-1 w-1 shrink-0 bg-accent"
              aria-hidden="true"
            />
            {feature}
          </motion.li>
        ))}
      </motion.ul>

      {hiddenFeatures.length > 0 ? (
        <motion.details
          variants={riseItem}
          className="mt-4 border-t border-line pt-3"
        >
          <summary className="project-feature-toggle">
            View {hiddenFeatures.length} more project features
          </summary>
          <ul className="mt-3 grid gap-2 text-sm text-ink-muted sm:grid-cols-2">
            {hiddenFeatures.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 bg-accent"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </motion.details>
      ) : null}

      <motion.ul
        variants={techList}
        className="mt-6 flex flex-wrap gap-2"
        aria-label="Technologies used"
      >
        {project.technologies.map((technology) => (
          <motion.li
            key={technology}
            variants={techItem}
            whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
            transition={SPRING}
            className="border border-line bg-canvas px-2 py-1 text-xs text-ink-muted"
          >
            {technology}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div variants={riseItem} className="mt-8 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary group/live px-4 py-2.5"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={SPRING}
          >
            Live Demo
            <ExternalLink
              size={15}
              className="transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
              aria-hidden="true"
            />
          </motion.a>
        ) : null}

        {project.githubUrl ? (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary group/gh px-4 py-2.5"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={SPRING}
          >
            <Github
              size={16}
              className="transition-transform duration-300 group-hover/gh:-rotate-6"
              aria-hidden="true"
            />
            GitHub
          </motion.a>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

export default function ProjectCard({ project, variant = "image-top" }) {
  const reduce = useReducedMotion();

  const hoverProps = reduce
    ? {}
    : { whileHover: { y: -6 }, transition: SPRING };

  const glow = (
    <div
      className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(520px circle at 50% 0%, color-mix(in oklab, var(--color-accent, #8b5cf6) 8%, transparent), transparent 70%)",
      }}
      aria-hidden="true"
    />
  );

  if (variant === "featured") {
    return (
      <motion.article
        {...hoverProps}
        className="premium-card group relative mt-12 grid gap-0 overflow-hidden lg:grid-cols-[1.1fr_0.9fr]"
      >
        {glow}
        <ProjectImage
          project={project}
          className="relative z-10 aspect-[4/3] lg:aspect-auto"
        />
        <div className="relative z-10">
          <ProjectContent project={project} featured />
        </div>
      </motion.article>
    );
  }

  if (variant === "image-right") {
    return (
      <motion.article
        {...hoverProps}
        className="premium-card group relative grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr]"
      >
        {glow}
        <ProjectImage
          project={project}
          className="relative z-10 order-first aspect-[16/9] border-b border-line lg:order-last lg:aspect-auto lg:border-b-0 lg:border-l"
        />
        <div className="relative z-10">
          <ProjectContent project={project} />
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      {...hoverProps}
      className="premium-card group relative overflow-hidden"
    >
      {glow}
      <ProjectImage
        project={project}
        className="relative z-10 aspect-[16/9] border-b border-line"
      />
      <div className="relative z-10">
        <ProjectContent project={project} />
      </div>
    </motion.article>
  );
}