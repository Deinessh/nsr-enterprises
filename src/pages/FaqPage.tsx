import React from 'react';
import { FaqAccordion } from '../components/FaqAccordion';
import { Sparkles } from 'lucide-react';

export const FaqPage: React.FC = () => {
  return (
    <div className="pt-[88px] md:pt-[96px] bg-white text-brand-dark min-h-screen flex flex-col justify-between">
      <div>
        {/* Header Banner */}
        <section className="py-16 lg:py-20 section-header-bg border-b border-brand-blueBorder relative overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider">KNOWLEDGE BASE</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
            Frequently Asked <span className="text-brand-blue">Questions</span>
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-3 leading-relaxed max-w-2xl mx-auto font-medium">
            Find technical answers regarding bio septic tank sizes, anaerobic bacteria maintenance, RCC/FRP/PVC materials, and installation timelines.
          </p>
        </div>
      </section>

      {/* Accordion Component (Single Header) */}
      <FaqAccordion showHeader={false} />
      </div>
    </div>
  );
};
