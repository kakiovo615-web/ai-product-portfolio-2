import { iconMap } from '@/components/icons';
import { skillGroups } from '@/data/siteData';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

function SkillIcon({ icon }) {
  const Icon = iconMap[icon];
  return Icon ? <Icon size={18} /> : null;
}

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="技能"
        title="围绕 AI 产品实习逐步搭起来的能力组合。"
        description="这些不是空泛罗列，而是我在实际项目里已经用过、正在持续加深的能力。"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <Reveal
            key={group.title}
            delay={groupIndex * 80}
            className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{group.title}</h3>
            <div className="mt-6 grid gap-4">
              {group.skills.map((skill) => (
                <div
                  key={`${group.title}-${skill.label}`}
                  className="flex gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-900/40"
                >
                  <div className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <SkillIcon icon={skill.icon} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white">{skill.label}</h4>
                      <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                        实践中
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{skill.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
