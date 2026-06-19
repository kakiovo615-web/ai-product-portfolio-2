import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import ProjectCover from '@/components/ProjectCover';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/SectionHeading';
import { getProjectBySlug } from '@/data/siteData';

const project = getProjectBySlug('aigc-case-pack');

const caseEntries = [
  {
    title: '案例 1：AI 校招海报文案',
    summary: '把 AI 产品实习生招聘需求转成更有吸引力、可直接投放的海报文案与视觉样稿。',
    prompt:
      '请生成一组适合校招海报的招聘文案，招聘对象为 AI 产品实习生。要求语气年轻、有未来感，但不要过度喊口号；突出真实业务、导师带教、快速试错和产品落地机会。',
    output: [
      '主标题：和真正的 AI 产品，一起长出来',
      '副标题：不是只做想法，不是只写文档，而是走进真实业务场景，把 AI 能力变成可以上线、可以验证、可以迭代的产品。',
      'CTA：AI 产品实习生招募中'
    ],
    visuals: ['/aigc-case-01-example-1.png', '/aigc-case-01-example-2.png']
  },
  {
    title: '案例 2：小红书种草内容',
    summary: '面向 AI 简历优化工具，生成一段更像真实用户分享而非硬广的小红书风格种草内容。',
    prompt:
      '请用小红书博主口吻，写一段关于“AI 帮我改简历和 Boss 打招呼语”的真实分享，语气自然，像朋友聊天，不要过度夸张，要带一点“本来不抱期待，结果有被惊到”的感觉。',
    output: [
      '强调“不是编故事，而是帮你把做过的事说清楚”。',
      '突出 Boss 打招呼语和简历表达两类高痛点场景。',
      '语气自然、有代入感、轻产品感。'
    ],
    visuals: ['/aigc-case-02-xiaohongshu-cover.svg']
  },
  {
    title: '案例 3：知识库标准答案',
    summary: '把“什么是 RAG 知识库”解释成适合新人理解和培训使用的标准答案型内容。',
    prompt:
      '请用通俗语言回答“什么是 RAG 知识库”，要求先一句话总结，再解释原理，再举一个工作中的应用例子，不要堆专业术语。',
    output: [
      '一句话结论：先帮 AI 找资料，再让它回答问题。',
      '解释为什么只靠模型记忆容易过时或失真。',
      '用 AI 客服回答门店预约规则的场景做示例。'
    ],
    visuals: ['/aigc-case-03-knowledge-base-card.svg']
  },
  {
    title: '案例 4：短视频口播脚本',
    summary: '面向 AI 求职表达产品，生成一段 30 秒内能讲清价值点的短视频口播脚本。',
    prompt:
      '请写一段 30 秒以内的短视频口播脚本，主题是“AI 如何帮求职者快速生成更像样的简历表达和 Boss 打招呼语”。语气自然、节奏快、前 3 秒要有抓人点。',
    output: [
      '前 3 秒先抓痛点：明明做过不少事，但一写简历就不会说话。',
      '中间讲价值：AI 不是简单润色，而是帮你按岗位语言重组经历。',
      '结尾落点：帮不会包装自己的人更快说清楚自己做过什么。'
    ],
    visuals: ['/aigc-case-04-video-storyboard.svg']
  }
];

export default function AigcCasePackPage() {
  return (
    <>
      <Seo
        title="AIGC 案例成品包"
        path="/projects/aigc-case-pack"
        description="一组正式接入网站的 AIGC 作品案例，包含招聘海报文案、小红书种草内容、知识库标准答案和短视频口播脚本。"
      />
      <Layout>
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-accent dark:text-slate-300"
          >
            <ArrowLeft size={16} />
            返回项目列表
          </Link>

          <div className="mt-8 rounded-[2rem] border border-slate-200/70 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">{project.phase}</p>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  {project.name}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-200">{project.tagline}</p>
                <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.challenge}</p>
              </div>
              <ProjectCover project={project} />
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.5rem] border border-slate-200/70 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <p className="text-3xl font-semibold text-slate-950 dark:text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            {caseEntries.map((entry, index) => (
              <Reveal
                key={entry.title}
                delay={index * 80}
                className="rounded-[2rem] border border-slate-200/70 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Case {index + 1}</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{entry.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{entry.summary}</p>

                <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-slate-900/40">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">案例亮点</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{entry.insight}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-slate-900/40">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">最终输出</p>
                      <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {entry.output.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {entry.visuals.map((src) => (
                      <div
                        key={src}
                        className="relative min-h-[260px] overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-slate-900/40"
                      >
                        <Image
                          src={src}
                          alt={entry.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
