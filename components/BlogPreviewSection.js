import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/siteData';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function BlogPreviewSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="思考记录"
          title="关于 AI 产品的一些复盘和思考。"
          description="这些内容用于补充我在项目之外的观察方式，也让作品集更完整。"
        />
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-accent dark:text-slate-300"
        >
          查看全部
          <ArrowRight size={16} />
        </Link>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Reveal
            key={post.slug}
            delay={index * 90}
            className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">{post.date}</p>
            <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{post.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
            >
              阅读更多
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
