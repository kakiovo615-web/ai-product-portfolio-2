import Layout from '@/components/Layout';
import ProjectsSection from '@/components/ProjectsSection';
import Seo from '@/components/Seo';

export default function ProjectsPage() {
  return (
    <>
      <Seo
        title="项目经历"
        path="/projects"
        description="丁嘉琪的 AI 产品项目经历，包含 AI 面试官、垂直智能客服、Prompt 调优、行业研究与案例复盘。"
      />
      <Layout>
        <section className="mx-auto max-w-6xl px-4 pb-2 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Projects</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            我参与过的 AI 产品项目、研究实践与个人作品。
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            这里不仅有 AI 产品案例，也有创意互动和视频作品。核心 AI 项目可以继续点进案例页查看更完整的背景、动作、结果和复盘。
          </p>
        </section>
        <ProjectsSection standalone />
      </Layout>
    </>
  );
}
