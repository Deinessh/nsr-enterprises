import React from 'react';
import { FaqAccordion } from '../components/FaqAccordion';
import { Sparkles } from 'lucide-react';

export const FaqPage: React.FC = () => {
  return (
    <div className="pt-32 sm:pt-36 pb-20 bg-white text-brand-dark min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-16 lg:py-20 relative overflow-hidden shadow-lg mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-extrabold uppercase tracking-wider">KNOWLEDGE BASE</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-4xl text-white tracking-tight">
            Frequently Asked <span className="text-yellow-300">Questions</span>
          </h1>
          <p className="text-xs sm:text-sm text-white/90 mt-3 leading-relaxed max-w-2xl mx-auto font-medium">
            Find technical answers regarding bio septic tank sizes, anaerobic bacteria maintenance, RCC/FRP/PVC materials, and installation timelines.
          </p>
        </div>
      </section>

      {/* Accordion Component */}
      <FaqAccordion />
    </div>
  );
};
