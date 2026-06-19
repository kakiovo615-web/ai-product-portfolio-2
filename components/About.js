import Image from 'next/image';
import { siteMeta, values } from '@/data/siteData';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="关于我"
        title="把用户问题拆清楚，再把 AI 产品做明白。"
        description="我关注真实场景、清晰需求和可验证结果，希望做出有使用价值的 AI 产品。"
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/profile-placeholder.svg"
                alt="丁嘉琪个人形象占位图"
                fill
                sizes="(max-width: 1024px) 100vw, 36vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={100} className="space-y-8">
          <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>
              我是丁嘉琪 Kiki，目前是一名正在寻找 AI 产品实习机会的本科生，关注方向包括 AI 面试、垂直智能客服、知识库问答和 Agent 工作流。过去的实践里，我更习惯先从用户和场景出发，再去思考模型、Prompt、规则和产品流程如何配合。
            </p>
            <p>
              在美团实习和导师指导项目中，我参与过 AI 面试官与美甲行业 AI 客服两类产品实践，接触过竞品调研、用户访谈、需求梳理、原型设计、Prompt 调优、模型对比、评测集构建和灰度验证等环节。这些经历让我逐渐形成了一套更偏“先验证、再扩展”的产品思路。
            </p>
            <p>
              我希望加入愿意认真打磨 AI 产品体验的团队，在真实业务里继续提升自己对用户洞察、产品判断和 AI 落地细节的理解。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[1.75rem] border border-accent/20 bg-accent/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Job Status</p>
            <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-200">{siteMeta.status}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
