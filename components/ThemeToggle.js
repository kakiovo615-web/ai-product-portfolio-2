import { MoonStar, SunMedium } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem('portfolio-theme');
    const nextTheme = stored || (root.classList.contains('dark') ? 'dark' : 'light');
    root.classList.toggle('dark', nextTheme === 'dark');
    setTheme(nextTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    root.classList.toggle('dark', nextTheme === 'dark');
    localStorage.setItem('portfolio-theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-white/10 dark:bg-white/5 dark:text-white"
    >
      {mounted && theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
    </button>
  );
}
