import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, FileText, PlayCircle } from 'lucide-react';
import { useMemo, useState } from 'react';
import { aigcCaseEntries, projectFilters, projects } from '@/data/siteData';
import ProjectCover from '@/components/ProjectCover';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

function ProjectMedia({ project }) {
  if (project.mediaType === 'video' && project.video) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-slate-200/80 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
        <video
          src={project.video}
          className="h-full w-full object-cover"
          muted
          controls
          preload="metadata"
        />
      </div>
    );
  }

  return <ProjectCover project={project} compact />;
}

function ProjectCard({ project, delay = 0 }) {
  const PrimaryIcon = project.mediaType === 'video' ? PlayCircle : FileText;
  const isCaseStudy = project.primaryLink.startsWith('/projects/');

  return (
    <Reveal
      delay={delay}
      className="group rounded-[1.9rem] border border-slate-200/70 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow dark:border-white/10 dark:bg-white/[0.04]"
    >
      <ProjectMedia project={project} />
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">{project.phase}</p>
        <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{project.name}</h3>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">{project.tagline}</p>
        <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">{project.challenge}</p>
        <div className="mt-5 space-y-2">
          {project.actions.map((action) => (
            <p key={action} className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              {action}
            </p>
          ))}
        </div>
        <p className="mt-5 text-sm font-medium text-accent">{project.impact}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.deliverables.map((item) => (
            <span
              key={`${project.name}-${item}`}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={project.primaryLink}
            target={project.primaryLink.startsWith('http') || project.primaryLink.endsWith('.html') || project.primaryLink.endsWith('.mp4') ? '_blank' : undefined}
            rel={project.primaryLink.startsWith('http') ? 'noreferrer' : undefined}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-accent hover:text-accent dark:border-white/10 dark:text-slate-200"
          >
            <PrimaryIcon size={16} />
            {project.primaryLabel}
          </a>
          <a
            href={project.demo}
            target={project.demo.startsWith('http') || project.demo.endsWith('.html') || project.demo.endsWith('.mp4') ? '_blank' : undefined}
            rel={project.demo.startsWith('http') ? 'noreferrer' : undefined}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent dark:bg-white dark:text-slate-950"
          >
            <ArrowUpRight size={16} />
            {project.demoLabel}
          </a>
          {isCaseStudy ? (
            <Link
              href={project.primaryLink}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
            >
              进入完整案例
              <ArrowUpRight size={16} />
            </Link>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

function AigcCasePackInline() {
  return (
    <div id="aigc-case-pack" className="mt-8 rounded-[2rem] border border-accent/20 bg-white p-6 shadow-glow dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
      <SectionHeading
        eyebrow="AIGC 作品集"
        title="这组 AIGC 成品可以直接在网站里展开看。"
        description="不跳转页面，直接在这里查看海报文案、小红书种草、知识库标准答案和短视频脚本案例。"
      />
      <div className="mt-10 space-y-8">
        {aigcCaseEntries.map((entry, index) => (
          <Reveal
            key={entry.title}
            delay={index * 60}
            className="rounded-[1.75rem] border border-slate-200/70 bg-slate-50/80 p-6 dark:border-white/10 dark:bg-slate-900/40"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Case {index + 1}</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">{entry.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{entry.summary}</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Prompt 思路</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{entry.prompt}</p>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">最终成品要点</p>
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
                    className="relative min-h-[260px] overflow-hidden rounded-2xl border border-slate-200/70 bg-white dark:border-white/10 dark:bg-white/[0.04]"
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
    </div>
  );
}

export default function ProjectsSection({ standalone = false }) {
  const [activeFilter, setActiveFilter] = useState('全部');

  const filteredProjects = useMemo(() => {
    if (activeFilter === '全部') return projects;
    return projects.filter((project) => project.category.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className={`mx-auto max-w-6xl px-4 ${standalone ? 'py-16 sm:py-20' : 'py-20'} sm:px-6 lg:px-8`}>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="项目经历"
          title="不只是在列项目，而是在展示我如何做 AI 产品。"
          description="我把每个案例尽量整理成招聘方更容易判断的形式：背景、动作、产出、结果和复盘。"
        />
        {standalone ? (
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-accent dark:text-slate-300"
          >
            想进一步了解我？
            <ArrowUpRight size={16} />
          </Link>
        ) : null}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {projectFilters.map((filter) => {
          const selected = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selected
                  ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} delay={index * 80} />
        ))}
      </div>
      {filteredProjects.some((project) => project.slug === 'aigc-case-pack') ? <AigcCasePackInline /> : null}
    </section>
  );
}
