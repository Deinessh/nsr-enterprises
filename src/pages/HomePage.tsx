import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustStrip } from '../components/TrustStrip';
import { AboutSection } from '../components/AboutSection';
import { ServicesGrid } from '../components/ServicesGrid';
import { MaterialComparison } from '../components/MaterialComparison';
import { CapacityCalculator } from '../components/CapacityCalculator';
import { ApplicationsSection } from '../components/ApplicationsSection';
import { HowItWorks } from '../components/HowItWorks';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { GallerySection } from '../components/GallerySection';
import { WhyNSR } from '../components/WhyNSR';

interface HomePageProps {
  onOpenQuoteModal: (requirement?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <HeroSection onOpenQuoteModal={onOpenQuoteModal} />
        <TrustStrip />
        <AboutSection onOpenQuoteModal={onOpenQuoteModal} />
        <ServicesGrid onOpenQuoteModal={onOpenQuoteModal} />
        
        {/* Integrated Materials Section */}
        <MaterialComparison onOpenQuoteModal={onOpenQuoteModal} />
        
        {/* Integrated How It Works Section */}
        <HowItWorks />
        
        <CapacityCalculator onOpenQuoteModal={onOpenQuoteModal} />
        <ApplicationsSection onOpenQuoteModal={onOpenQuoteModal} />
        
        {/* Featured Projects Showcase */}
        <FeaturedProjects onOpenQuoteModal={onOpenQuoteModal} />
        
        {/* Installation Gallery & Demos Section (Admin CMS Ready) */}
        <GallerySection onOpenQuoteModal={onOpenQuoteModal} />
        
        <WhyNSR />
      </div>
    </div>
  );
};
