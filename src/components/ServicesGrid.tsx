import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/companyData';
import { ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';

interface ServicesGridProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white text-brand-dark relative overflow-hidden border-b border-brand-blueBorder">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header with Mild Background Image Overlay */}
        <div className="text-center max-w-3xl mx-auto mb-14 p-8 sm:p-10 rounded-3xl section-header-bg border border-brand-blueBorder shadow-md space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider">PRIMARY OFFERINGS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
            Our Bio & STP <span className="text-brand-blue">Services</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-2xl mx-auto font-medium">
            NSR Enterprises supplies certified Bio Septic Tanks (RCC, FRP, PVC) and Sewage Treatment Systems engineered for long-term reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl bg-white border border-brand-blueBorder hover:border-brand-blue/60 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-md hover:shadow-xl"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-brand-blueSoft">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/95 border border-brand-blueBorder backdrop-blur-md flex items-center justify-center font-display font-extrabold text-brand-blue text-sm shadow-sm">
                    {service.number}
                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-lg"
                    aria-label={`View details for ${service.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className="p-6 space-y-4">
                  <Link to={`/services/${service.id}`}>
                    <h3 className="font-display font-bold text-xl text-brand-dark group-hover:text-brand-blue transition-colors">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-brand-blueBorder">
                    {service.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-brand-dark">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center space-x-3">
                <Link
                  to={`/services/${service.id}`}
                  className="flex-1 py-2.5 px-4 text-center text-xs font-bold text-brand-blue bg-brand-blueSoft hover:bg-brand-blue hover:text-white rounded-xl border border-brand-blueBorder transition-all"
                >
                  View Details
                </Link>
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blueDark hover:to-brand-greenDark rounded-xl shadow-md transition-all flex items-center justify-center"
                >
                  <span>Quote</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
