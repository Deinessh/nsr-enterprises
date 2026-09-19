import React from 'react';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Sparkles } from 'lucide-react';

interface ProjectsPageProps {
  onOpenQuoteModal: (req?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-[88px] md:pt-[96px] pb-16 bg-white text-brand-dark min-h-screen">
      {/* Projects Banner */}
      <section className="py-16 lg:py-20 section-header-bg border-b border-brand-blueBorder relative overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider">OUR PORTFOLIO</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
            Selected <span className="text-brand-blue">Projects & Installations</span>
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-3 leading-relaxed max-w-2xl mx-auto font-medium">
            Browse our completed bio septic tank and sewage treatment installations across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Featured Projects with showAll enabled and single header */}
      <FeaturedProjects onOpenQuoteModal={onOpenQuoteModal} showAll={true} showHeader={false} />
    </div>
  );
};
