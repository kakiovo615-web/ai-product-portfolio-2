import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { timeline } from '@/data/siteData';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function TimelineSection() {
  return (
    <section id="timeline" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="经历时间线"
        title="从实习、项目到教育背景的成长轨迹。"
        description="把我在 AI 产品方向上的关键实践与学习节点按时间整理在一起。"
      />
      <div className="relative mt-12 space-y-8 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-white/10 sm:before:left-8">
        {timeline.map((entry, index) => {
          const isWork = entry.type === 'work';
          return (
            <Reveal key={`${entry.org}-${entry.role}`} delay={index * 90} className="relative pl-14 sm:pl-20">
              <span className="absolute left-0 top-2 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent sm:h-16 sm:w-16">
                {isWork ? <BriefcaseBusiness size={20} /> : <GraduationCap size={20} />}
              </span>
              <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{entry.org}</h3>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">{entry.role}</p>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{entry.range}</p>
                </div>
                <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {entry.achievements.map((achievement) => (
                    <p key={achievement}>{achievement}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
