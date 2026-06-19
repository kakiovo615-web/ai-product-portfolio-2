export default function ProjectCover({ project, compact = false }) {
  const cover = project.cover || {
    eyebrow: 'AI Product',
    headline: project.name,
    accent: 'from-blue-500/25 via-cyan-400/10 to-transparent',
    glow: 'bg-blue-500/20'
  };

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-slate-200/80 bg-slate-950 dark:border-white/10">
      <div className={`absolute inset-0 bg-gradient-to-br ${cover.accent}`} />
      <div className={`absolute -right-16 top-8 h-40 w-40 rounded-full blur-3xl ${cover.glow}`} />
      <div className="absolute -left-10 bottom-6 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
      <div className="relative flex h-full flex-col justify-between p-5 text-white sm:p-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">{cover.eyebrow}</p>
          <h3 className={`${compact ? 'mt-3 text-2xl' : 'mt-3 text-3xl'} max-w-[11ch] font-semibold leading-tight`}>
            {cover.headline}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.deliverables?.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/85"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
