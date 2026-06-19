import Image from 'next/image';
import { testimonials } from '@/data/siteData';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="个人评价"
        title="如果把我的做事方式总结成几句话。"
        description="这里用更接近能力印象的方式，概括我在协作和项目推进中的表现。"
        align="center"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal
            key={testimonial.name}
            delay={index * 100}
            className="rounded-[1.75rem] border border-slate-200/70 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-950 dark:text-white">{testimonial.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.title}</p>
              </div>
            </div>
            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
