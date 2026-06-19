import { processSteps } from '@/data/siteData';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function ProcessSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="我的方法"
        title="我通常怎样把一个 AI 产品问题往前推进。"
        description="这部分不是流程图装饰，而是我在真实项目里逐渐形成的方法习惯。"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {processSteps.map((item, index) => (
          <Reveal
            key={item.step}
            delay={index * 90}
            className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{item.step}</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
