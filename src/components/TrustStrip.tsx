import React from 'react';
import { Leaf, ShieldCheck, Droplet, Award, Zap } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Leaf,
      title: 'Eco-Friendly Bio-Digestion',
      desc: 'Anaerobic bacteria break down 99% organic waste naturally'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Lorry Cleaning',
      desc: 'Non-filling design eliminates periodic vacuum truck expenses'
    },
    {
      icon: Droplet,
      title: 'Cleaner Groundwater',
      desc: 'Sealed leakproof engineering protects surrounding soil'
    },
    {
      icon: Zap,
      title: 'Multi-Material Tanks',
      desc: 'Available in RCC Concrete, FRP Fiberglass & PVC Polymer'
    },
    {
      icon: Award,
      title: 'Lifelong Performance',
      desc: 'Proven durability across residential, commercial & industrial sites'
    }
  ];

  return (
    <section id="trust-strip" className="relative z-20 bg-gradient-to-r from-brand-blueSoft via-blue-50 to-brand-blueSoft py-10 border-y border-brand-blueBorder shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3.5 p-5 rounded-2xl bg-white border border-brand-blueBorder/80 shadow-md hover:shadow-lg hover:border-brand-blue/50 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-brand-blueSoft text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors flex-shrink-0 shadow-sm border border-brand-blueBorder">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-extrabold text-xs sm:text-sm text-brand-dark tracking-tight leading-snug group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
