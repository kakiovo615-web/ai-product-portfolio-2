import { proofCards, roleFitPoints } from '@/data/siteData';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function RoleFitSection() {
  return (
    <section id="fit" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="岗位匹配"
        title="如果用招聘视角看，我能为 AI 产品岗带来什么。"
        description="我会把用户研究、AI 实操、文档表达和推进执行串起来，而不是只停留在单一能力点。"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {roleFitPoints.map((point, index) => (
          <Reveal
            key={point.title}
            delay={index * 90}
            className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Fit {index + 1}</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{point.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{point.description}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {proofCards.map((card, index) => (
          <Reveal
            key={card.title}
            delay={index * 80}
            className="rounded-2xl border border-accent/15 bg-accent/5 p-5"
          >
            <h3 className="text-base font-semibold text-slate-950 dark:text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
