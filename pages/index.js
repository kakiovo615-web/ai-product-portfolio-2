import About from '@/components/About';
import BlogPreviewSection from '@/components/BlogPreviewSection';
import ContactSection from '@/components/ContactSection';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import OpportunitySection from '@/components/OpportunitySection';
import ProcessSection from '@/components/ProcessSection';
import ProjectsSection from '@/components/ProjectsSection';
import QuickOverviewSection from '@/components/QuickOverviewSection';
import RoleFitSection from '@/components/RoleFitSection';
import Seo from '@/components/Seo';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TimelineSection from '@/components/TimelineSection';

export default function HomePage() {
  return (
    <>
      <Seo />
      <Layout>
        <Hero />
        <QuickOverviewSection />
        <About />
        <RoleFitSection />
        <OpportunitySection />
        <ProjectsSection />
        <ProcessSection />
        <SkillsSection />
        <TimelineSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <ContactSection />
      </Layout>
    </>
  );
}
