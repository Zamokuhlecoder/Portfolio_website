export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div id={id} className="scroll-mt-24 scroll-reveal">
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">
        <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 className="mt-4 max-w-4xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-ink-strong sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
