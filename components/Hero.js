import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { heroStats, siteMeta, targetRoles } from '@/data/siteData';
import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pt-24">
      <Reveal className="space-y-8">
        <div className="space-y-5">
          <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
            {siteMeta.title}
          </span>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              {siteMeta.name}
            </h1>
            <p className="max-w-2xl text-xl leading-8 text-slate-600 dark:text-slate-300 sm:text-2xl">
              {siteMeta.pitch}
            </p>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
            聚焦 AI 产品、用户洞察与场景化落地，擅长把模糊问题梳理成可验证的产品方案。
          </p>
          <div className="rounded-2xl border border-accent/15 bg-accent/5 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">现在想加入什么团队</p>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
              希望进入认真做 AI 产品的团队，参与用户研究、场景定义、Prompt / 知识库设计、评测与产品推进工作。
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {targetRoles.slice(0, 3).map((role) => (
              <span
                key={role}
                className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent dark:bg-white dark:text-slate-950"
          >
            查看项目经历
            <ArrowRight size={16} />
          </Link>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-white/15 dark:text-white"
          >
            下载简历
            <Download size={16} />
          </a>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-glow dark:border-white/10 dark:bg-white/[0.04]">
          <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {heroStats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-slate-900/40"
              >
                <p className="text-3xl font-semibold text-slate-950 dark:text-white">{value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Current focus</p>
            <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-200">
              当前重点关注 AI 招聘、垂直智能客服、知识库问答和 Agent 工作流等产品方向，持续积累从调研到灰度验证的完整实践。
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
