import React from 'react';
import { ServicesGrid } from '../components/ServicesGrid';
import { CapacityCalculator } from '../components/CapacityCalculator';
import { Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onOpenQuoteModal: (req?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-16 bg-white text-brand-dark min-h-screen">
      {/* Services Banner */}
      <section className="py-16 lg:py-20 section-header-bg border-b border-brand-blueBorder relative overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider">SOLUTIONS CATALOG</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
            Bio Septic Tanks & <span className="text-brand-blue">Sewage Treatment</span>
          </h1>
          <p className="text-xs sm:text-sm text-brand-muted mt-3 leading-relaxed max-w-2xl mx-auto font-medium">
            Select a service below to explore detailed technical specifications, suitable applications, and capacity options.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid onOpenQuoteModal={onOpenQuoteModal} />

      {/* Embedded Sizing Calculator */}
      <CapacityCalculator onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
