import React from 'react';
import { ServicesGrid } from '../components/ServicesGrid';
import { CapacityCalculator } from '../components/CapacityCalculator';
import { Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onOpenQuoteModal: (req?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-28 pb-16">
      {/* Services Banner */}
      <section className="bg-brand-dark text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-blue/30 border border-brand-blueLight/30 text-brand-blueLight mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold uppercase tracking-wider">SOLUTIONS CATALOG</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Bio Septic Tanks & <span className="text-brand-blueLight">Sewage Treatment</span>
          </h1>
          <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
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
