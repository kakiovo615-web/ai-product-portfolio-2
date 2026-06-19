import { quickFacts, siteMeta } from '@/data/siteData';
import Reveal from '@/components/Reveal';

export default function QuickOverviewSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Reveal className="rounded-[2rem] border border-slate-200/70 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-accent">HR Quick View</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              一页快速看清我是谁、想做什么、能做什么。
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {siteMeta.name}，{siteMeta.title}。我目前更适合加入认真做 AI 产品的团队，从用户研究、AI 场景拆解、Prompt /
              知识库设计到文档与推进协作这几块开始承担工作。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:w-[440px]">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-900/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{fact.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
