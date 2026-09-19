import React from 'react';
import { GallerySection } from '../components/GallerySection';
import { Sparkles } from 'lucide-react';

interface GalleryPageProps {
  onOpenQuoteModal: (req?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-[88px] md:pt-[96px] bg-white text-brand-dark min-h-screen flex flex-col justify-between">
      <div>
        {/* Header Hero Banner */}
        <section className="py-16 lg:py-20 section-header-bg border-b border-brand-blueBorder relative overflow-hidden shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl relative z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span className="text-xs font-extrabold uppercase tracking-wider">MEDIA & SITE INSTALLATIONS</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
              Project <span className="text-brand-blue">Installation Gallery</span>
            </h1>
            <p className="text-sm sm:text-base text-brand-muted mt-3 leading-relaxed max-w-3xl mx-auto font-medium">
              Browse real site photographs, concrete RCC digesters, lightweight FRP bio tanks, and operational sewage treatment plant (STP) videos across Tamil Nadu.
            </p>
          </div>
        </section>

        {/* Gallery Section Component */}
        <GallerySection showHeader={false} onOpenQuoteModal={onOpenQuoteModal} />
      </div>
    </div>
  );
};
