import React from 'react';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { Sparkles } from 'lucide-react';

interface ProjectsPageProps {
  onOpenQuoteModal: (req?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-28 pb-16">
      {/* Projects Banner */}
      <section className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-blue/30 border border-brand-blueLight/30 text-brand-blueLight mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold uppercase tracking-wider">OUR PORTFOLIO</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Selected <span className="text-brand-blueLight">Projects & Installations</span>
          </h1>
          <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Browse our completed bio septic tank and sewage treatment installations across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Featured Projects with showAll enabled */}
      <FeaturedProjects onOpenQuoteModal={onOpenQuoteModal} showAll={true} />
    </div>
  );
};
