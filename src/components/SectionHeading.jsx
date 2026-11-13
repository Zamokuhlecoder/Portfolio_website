export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
