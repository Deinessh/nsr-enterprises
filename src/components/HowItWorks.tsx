import React from 'react';
import { PROCESS_STEPS } from '../data/companyData';
import { ShieldCheck, Activity } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white text-brand-dark relative overflow-hidden border-b border-brand-blueBorder">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header with Mild Background Image Overlay */}
        <div className="text-center max-w-3xl mx-auto mb-16 p-8 sm:p-10 rounded-3xl section-header-bg border border-brand-blueBorder shadow-md space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm">
            <Activity className="w-3.5 h-3.5 text-brand-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider">BIOLOGICAL PROCESS DIAGRAM</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
            How The Bio Septic System <span className="text-brand-blue">Works</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-2xl mx-auto font-medium">
            Our multi-chamber bio digester relies on natural anaerobic biological digestion. Organic matter is broken down into clear effluent without relying on expensive vacuum lorries.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-emerald via-brand-accent to-brand-emerald -translate-y-6 z-0" />

          {PROCESS_STEPS.map((item, index) => (
            <div
              key={index}
              className="relative z-10 bg-white rounded-3xl p-6 sm:p-8 border border-brand-blueBorder shadow-md hover:shadow-xl flex flex-col justify-between group hover:border-brand-blue/60 hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                {/* Step Pill */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blueSoft border border-brand-blueBorder text-brand-blue font-display font-extrabold text-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-blue font-bold px-2.5 py-1 rounded-full bg-brand-blueSoft border border-brand-blueBorder">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-brand-dark mb-3 group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-blueBorder flex items-center text-[11px] text-brand-green font-bold">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                <span>Continuous Automated Action</span>
              </div>

            </div>
          ))}

        </div>

        {/* Bio-Culture Explanation Box */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-brand-blueSoft border border-brand-blueBorder shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-left">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-wider block">HIGH-POTENCY BIO-CULTURE CHEMICAL</span>
            <h4 className="font-display font-bold text-lg text-brand-dark">How Bacterial Culture Prevents Sludge Accumulation</h4>
            <p className="text-xs text-brand-muted max-w-2xl leading-relaxed">
              NSR bio tanks are inoculated with active anaerobic bacterial cultures that break down human waste into water and carbon dioxide gas, leaving zero solid sludge buildup.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3 bg-brand-accent text-brand-dark font-bold text-xs rounded-xl shadow-lg hover:bg-emerald-400 transition-colors"
          >
            Ask Engineers About Bio-Culture
          </a>
        </div>

      </div>
    </section>
  );
};
