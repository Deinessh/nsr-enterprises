import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles, Building2, Factory, Home } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-36 sm:pt-44 lg:pt-48 pb-16 flex items-center bg-gradient-to-b from-white via-brand-blueSoft/30 to-white overflow-hidden">
      
      {/* Soft Ambient Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0080C808_1px,transparent_1px),linear-gradient(to_bottom,#0080C808_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-blueSoft border border-brand-blueBorder shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                NSR ENTERPRISES • GREENWAY BUILD & BIO SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-brand-dark tracking-tight leading-[1.1]">
              Smarter Sewage <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-blueDark to-brand-green">
                Solutions.
              </span> <br />
              Cleaner Future.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg lg:text-xl text-brand-muted max-w-2xl font-normal leading-relaxed">
              NSR Enterprises engineers non-filling <strong className="text-brand-dark font-semibold">Bio Septic Tanks (RCC, FRP, PVC)</strong> and wastewater treatment plants across Tamil Nadu. Permanently eliminate lorry suction pumping, protect groundwater, and achieve zero-maintenance sanitation.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blueDark hover:to-brand-greenDark rounded-2xl shadow-xl shadow-brand-blue/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Request WhatsApp Quote</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-dark bg-white hover:bg-brand-blueSoft border border-brand-blueBorder rounded-2xl shadow-sm hover:border-brand-blue/40 transition-all duration-200"
              >
                <span>Explore All Services</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-brand-blueBorder grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-brand-dark">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-green flex-shrink-0" />
                <span>Non-Filling Bio Digesters</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-green flex-shrink-0" />
                <span>No Lorry Cleaning Costs</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4.5 h-4.5 text-brand-green flex-shrink-0" />
                <span>100% Groundwater Safe</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden bg-white p-6 sm:p-8 shadow-2xl shadow-brand-blue/10 border border-brand-blueBorder group">
                
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-brand-blueBorder">
                  <img 
                    src="https://nsrenterprises.in/wp-content/uploads/2025/01/Untitled-design-12-1024x1024.png" 
                    alt="NSR Bio Septic Tank System" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs text-white bg-brand-dark/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                    <span className="font-semibold text-brand-blueLight">1,000L to 10,000L+ Capacity</span>
                    <span className="text-brand-greenAccent font-bold">Anaerobic Tech</span>
                  </div>
                </div>

                {/* Segment Badges */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-brand-blueSoft border border-brand-blueBorder hover:border-brand-blue/50 transition-colors">
                    <Home className="w-5 h-5 mx-auto text-brand-blue mb-1" />
                    <span className="text-xs text-brand-dark block font-bold">Residential</span>
                    <span className="text-[10px] text-brand-muted block">4 - 20 Users</span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-blueSoft border border-brand-blueBorder hover:border-brand-blue/50 transition-colors">
                    <Building2 className="w-5 h-5 mx-auto text-brand-blue mb-1" />
                    <span className="text-xs text-brand-dark block font-bold">Commercial</span>
                    <span className="text-[10px] text-brand-muted block">20 - 100 Users</span>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-blueSoft border border-brand-blueBorder hover:border-brand-blue/50 transition-colors">
                    <Factory className="w-5 h-5 mx-auto text-brand-blue mb-1" />
                    <span className="text-xs text-brand-dark block font-bold">Industrial</span>
                    <span className="text-[10px] text-brand-muted block">100+ Users</span>
                  </div>
                </div>

                {/* Contact Banner */}
                <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-brand-blueSoft to-white border border-brand-blueBorder flex items-center justify-between shadow-sm">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-blue font-extrabold block">Immediate Site Inspection?</span>
                    <span className="text-xs font-bold text-brand-dark block">Call {COMPANY_INFO.phone}</span>
                  </div>
                  <a 
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="px-4 py-2 bg-brand-blue hover:bg-brand-blueDark text-white font-bold text-xs rounded-xl shadow transition-colors"
                  >
                    Call Now
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-brand-muted hidden lg:block">
        <a href="#trust-strip" className="inline-flex flex-col items-center space-y-1 hover:text-brand-blue transition-colors">
          <span className="text-[10px] tracking-widest uppercase font-bold">Scroll to discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-brand-blue" />
        </a>
      </div>
    </section>
  );
};
