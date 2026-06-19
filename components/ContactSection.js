import { Download, Github, Linkedin, Mail, MessageCircleMore, Send } from 'lucide-react';
import { contactCards, siteMeta } from '@/data/siteData';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  const subject = encodeURIComponent(`来自个人网站的联系：${name}`);
  const body = encodeURIComponent(`姓名：${name}\n邮箱：${email}\n\n内容：${message}`);
  window.location.href = `mailto:${siteMeta.email}?subject=${subject}&body=${body}`;
}

export default function ContactSection() {
  const links = [
    { label: '邮箱', href: `mailto:${siteMeta.email}`, icon: Mail },
    { label: 'GitHub', href: siteMeta.github, icon: Github },
    { label: 'LinkedIn', href: siteMeta.linkedin, icon: Linkedin },
    { label: '微信', href: siteMeta.wechat, icon: MessageCircleMore }
  ].filter((item) => item.href);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-[2rem] border border-slate-200/70 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04]">
          <SectionHeading
            eyebrow="联系我"
            title="欢迎联系我聊 AI 产品、实习机会或项目合作。"
            description="你可以直接通过邮箱联系我，也可以先通过表单快速发送一封预填充邮件。"
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {contactCards.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-slate-900/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-4 transition hover:border-accent hover:text-accent dark:border-white/10 dark:bg-slate-900/40"
                >
                  <span className="inline-flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon size={18} />
                    </span>
                    {link.label}
                  </span>
                  <Send size={16} />
                </a>
              );
            })}
          </div>
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-accent dark:bg-white dark:text-slate-950"
          >
            <Download size={16} />
            一键下载简历
          </a>
        </Reveal>
        <Reveal
          delay={100}
          className="rounded-[2rem] border border-slate-200/70 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04]"
        >
          <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">快速留言</h3>
          <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
            提交后会打开一封预填充邮件，不需要后端服务也可以正常使用。
          </p>
          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">姓名</span>
              <input
                type="text"
                name="name"
                required
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white dark:border-white/10 dark:bg-slate-900/40 dark:text-white"
                placeholder="你的名字"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">邮箱</span>
              <input
                type="email"
                name="email"
                required
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white dark:border-white/10 dark:bg-slate-900/40 dark:text-white"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">留言内容</span>
              <textarea
                name="message"
                required
                rows="6"
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-accent focus:bg-white dark:border-white/10 dark:bg-slate-900/40 dark:text-white"
                placeholder="可以简单介绍岗位、团队或你想聊的话题。"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/20 bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              发送邮件
              <Send size={16} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
