import React, { useState } from 'react';
import { Check, ArrowRight, Languages, Sparkles } from 'lucide-react';
import { TAMIL_SUMMARY } from '../data/companyData';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuoteModal }) => {
  const [showTamil, setShowTamil] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-offwhite text-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-soft group">
              <img 
                src="https://nsrenterprises.in/wp-content/uploads/2025/01/155-420x380.jpg" 
                alt="NSR Enterprises Bio Septic Engineering" 
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />
              
              {/* Overlay Content Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-card-dark text-white border border-brand-accent/20">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold text-sm">
                    NSR
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">NSR Enterprises</h4>
                    <span className="text-xs text-brand-accent">Chengalpattu & Urapakkam, Tamil Nadu</span>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed italic">
                  "Providing lifelong solutions for domestic & commercial sewage challenges while preserving pristine groundwater."
                </p>
              </div>
            </div>

            {/* Decorative Floating Accent Badge */}
            <div className="absolute -top-6 -right-6 hidden sm:flex items-center space-x-3 p-4 rounded-2xl bg-brand-dark text-white shadow-xl border border-brand-emerald/40 z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-emerald to-brand-accent flex items-center justify-center text-brand-dark font-black font-display text-lg">
                100%
              </div>
              <div>
                <span className="text-xs font-bold text-white block">Eco-Conscious Tech</span>
                <span className="text-[10px] text-brand-accent block">Groundwater Protection</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold uppercase tracking-wider">ABOUT NSR ENTERPRISES</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight leading-[1.15]">
              Engineered Sanitation for a <br className="hidden sm:block" />
              <span className="text-brand-emerald">Pollution-Free</span> Future.
            </h2>

            <p className="text-base text-brand-muted leading-relaxed">
              Managing conventional septic tanks is a recurring hassle involving overflowing sludge, noxious smells, and expensive lorry evacuations. At <strong className="text-brand-black">NSR Enterprises</strong>, we engineer biological non-filling bio septic tanks and bio digesters that solve these challenges at the root.
            </p>

            <p className="text-base text-brand-muted leading-relaxed">
              Our systems range from compact <strong className="text-brand-black">1,000 Litre bio tanks</strong> for individual residences to heavy-duty <strong className="text-brand-black">10,000+ Litre bio digesters</strong> designed to support commercial establishments and communities of up to 100+ users.
            </p>

            {/* Key Business Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Anaerobic Bio-Culture Digestion",
                "Non-Filling Lorry-Free Design",
                "Cleaner Groundwater & Zero Odor",
                "Compliance with Environmental Norms",
                "Capacity Options (1000L, 5000L, 10000L+)",
                "Turnkey Installation in Tamil Nadu"
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-emerald/15 flex items-center justify-center text-brand-emerald flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-medium text-brand-black">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tamil Language Information Card Toggle */}
            <div className="pt-4">
              <button
                onClick={() => setShowTamil(!showTamil)}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-emerald hover:text-brand-dark bg-brand-soft hover:bg-brand-emerald/10 px-4 py-2 rounded-xl transition-all border border-brand-emerald/20"
              >
                <Languages className="w-4 h-4" />
                <span>{showTamil ? "Hide Tamil Overview" : "தமிழ் விவரங்களுக்கு கிளிக் செய்யவும் (Tamil Overview)"}</span>
              </button>

              {showTamil && (
                <div className="mt-3 p-4 rounded-2xl bg-brand-dark text-white text-xs leading-relaxed border border-brand-emerald/30 animate-fadeIn">
                  <h4 className="font-bold text-brand-accent text-sm mb-1.5">{TAMIL_SUMMARY.title}</h4>
                  <p className="text-white/80">{TAMIL_SUMMARY.content}</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-brand-dark hover:bg-brand-emerald rounded-xl shadow-lg transition-all duration-200 group"
              >
                <span>Request Detailed Quote</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
