import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import { blogPosts } from '@/data/siteData';

export default function BlogPage() {
  return (
    <>
      <Seo title="思考记录" path="/blog" description="丁嘉琪关于 AI 产品、用户研究、垂直场景与交互体验的阶段性思考记录。" />
      <Layout>
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-accent dark:text-slate-300"
          >
            <ArrowLeft size={16} />
            返回首页
          </Link>
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Blog</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              关于 AI 产品实践的一些阶段性复盘。
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
              这些内容更像作品集的延伸，展示我如何观察问题、总结经验，并把实践沉淀成可表达的思考。
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">{post.date}</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{post.title}</h2>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
                <Link href="/" className="mt-5 inline-block text-sm font-semibold text-accent">
                  更多内容持续补充中
                </Link>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
