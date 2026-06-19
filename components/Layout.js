import Link from 'next/link';
import { Download, Github, Linkedin, Mail, MessageCircleMore } from 'lucide-react';
import { navItems, siteMeta } from '@/data/siteData';
import ThemeToggle from '@/components/ThemeToggle';

export default function Layout({ children }) {
  const socialLinks = [
    { label: '邮箱', href: `mailto:${siteMeta.email}`, icon: Mail },
    { label: 'GitHub', href: siteMeta.github, icon: Github },
    { label: 'LinkedIn', href: siteMeta.linkedin, icon: Linkedin },
    { label: '微信', href: siteMeta.wechat, icon: MessageCircleMore }
  ].filter((item) => item.href);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-ink dark:text-white">
      <div className="pointer-events-none fixed inset-0 bg-hero-grid bg-[size:100%_100%,32px_32px,32px_32px] opacity-60 dark:opacity-100" />
      <div className="relative">
        <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-ink/80">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-950 dark:text-white">
              {siteMeta.name}
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-600 transition hover:text-accent dark:text-slate-300 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t border-slate-200/70 bg-white/70 dark:border-white/10 dark:bg-white/[0.02]">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm text-slate-500 dark:text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
            <p>基于 Next.js 与 Tailwind CSS 搭建，当前版本已按 AI 产品实习求职场景做内容与结构优化。</p>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 hover:text-accent"
                  >
                    <Icon size={16} />
                    {item.label}
                  </a>
                );
              })}
              <a href="/resume.pdf" className="inline-flex items-center gap-2 hover:text-accent" download>
                <Download size={16} />
                简历
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
