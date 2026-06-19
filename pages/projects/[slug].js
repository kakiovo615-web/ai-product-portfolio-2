import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, FileText } from 'lucide-react';
import Layout from '@/components/Layout';
import ProjectCover from '@/components/ProjectCover';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import SectionHeading from '@/components/SectionHeading';
import { getProjectBySlug, projects } from '@/data/siteData';

export default function ProjectDetailPage({ project }) {
  if (!project) {
    return null;
  }

  const relatedProjects = projects.filter(
    (item) =>
      item.slug !== project.slug &&
      ['ai-nail-assistant', 'huamei-ai-interviewer', 'ai-recruitment-research'].includes(item.slug)
  );

  return (
    <>
      <Seo title={project.name} path={`/projects/${project.slug}`} description={project.challenge} />
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
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.primaryLink}
                    target={project.primaryLink.endsWith('.html') || project.primaryLink.endsWith('.mp4') ? '_blank' : undefined}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent dark:bg-white dark:text-slate-950"
                  >
                    <FileText size={16} />
                    {project.primaryLabel}
                  </a>
                  <a
                    href={project.demo}
                    target={project.demo.endsWith('.html') || project.demo.endsWith('.mp4') ? '_blank' : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent dark:border-white/10 dark:text-slate-200"
                  >
                    <ArrowUpRight size={16} />
                    {project.demoLabel}
                  </a>
                </div>
              </div>
              <ProjectCover project={project} />
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal className="space-y-8">
              <div className="grid gap-4 lg:grid-cols-3">
                <div className="rounded-[1.75rem] border border-rose-200/60 bg-rose-50/90 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">Problem</p>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{project.challenge}</p>
                </div>
                <div className="rounded-[1.75rem] border border-sky-200/60 bg-sky-50/90 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">Approach</p>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{project.role}</p>
                </div>
                <div className="rounded-[1.75rem] border border-emerald-200/60 bg-emerald-50/90 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">Outcome</p>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{project.impact}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {project.metrics?.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.5rem] border border-slate-200/70 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <p className="text-3xl font-semibold text-slate-950 dark:text-white">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-7 dark:border-white/10 dark:bg-white/[0.04]">
                <SectionHeading
                  eyebrow="项目背景"
                  title="我当时面对的问题是什么"
                  description={project.challenge}
                />
              </div>

              <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-7 dark:border-white/10 dark:bg-white/[0.04]">
                <SectionHeading
                  eyebrow="我做了什么"
                  title="核心动作"
                  description="我在这个项目里承担的角色和主要工作内容。"
                />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{project.role}</p>
                <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.actions.map((action) => (
                    <p key={action}>{action}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-7 dark:border-white/10 dark:bg-white/[0.04]">
                <SectionHeading
                  eyebrow="推进过程"
                  title="这个项目是怎样一步步推进的"
                  description="把抽象项目拆成更清晰的阶段，会让招聘方更容易理解我的工作方法。"
                />
                <div className="mt-8 grid gap-4">
                  {project.workflow?.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-slate-900/40"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Step {index + 1}</p>
                      <h3 className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-8">
              <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-7 dark:border-white/10 dark:bg-white/[0.04]">
                <SectionHeading
                  eyebrow="项目结果"
                  title="结果与价值"
                  description={project.impact}
                />
                <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.outcomes?.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-200/70 bg-white p-7 dark:border-white/10 dark:bg-white/[0.04]">
                <SectionHeading
                  eyebrow="项目复盘"
                  title="我从这里学到了什么"
                  description="这些复盘更能体现我怎么看问题、怎么成长。"
                />
                <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.learnings?.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-accent/15 bg-accent/5 p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">产出关键词</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-accent/20 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 rounded-[2rem] border border-slate-200/70 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04]">
            <SectionHeading
              eyebrow="继续阅读"
              title="如果你还想继续看，我建议从这些案例接着了解。"
              description="它们分别对应不同类型的 AI 产品问题：垂直场景、招聘流程和研究沉淀。"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 transition hover:border-accent hover:bg-white dark:border-white/10 dark:bg-slate-900/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{item.phase}</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">{item.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const detailSlugs = projects
    .filter((project) => ['ai-nail-assistant', 'huamei-ai-interviewer', 'ai-recruitment-research'].includes(project.slug))
    .map((project) => ({
      params: { slug: project.slug }
    }));

  return {
    paths: detailSlugs,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug) || null;

  return {
    props: {
      project
    }
  };
}
