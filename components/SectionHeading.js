export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl';

  return (
    <div className={alignment}>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
