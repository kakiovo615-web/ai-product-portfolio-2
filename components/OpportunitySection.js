import { contributionAreas, targetRoles } from '@/data/siteData';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function OpportunitySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-[2rem] border border-slate-200/70 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04]">
          <SectionHeading
            eyebrow="求职目标"
            title="我现在在找什么样的机会。"
            description="如果你的团队正在做 AI 产品、智能体流程、垂直场景应用或智能工具方向，这会比较匹配我的成长路径。"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {targetRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
              >
                {role}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="rounded-[2rem] border border-slate-200/70 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04]">
          <SectionHeading
            eyebrow="我能帮什么"
            title="如果让我加入团队，我能先从这些事情做起。"
            description="我适合先在产品基础能力和 AI 落地细节之间承担连接角色，帮助团队把问题定义清楚、把方案推进扎实。"
          />
          <div className="mt-8 grid gap-4">
            {contributionAreas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 text-sm leading-7 text-slate-600 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
