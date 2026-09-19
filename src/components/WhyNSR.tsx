import React from 'react';
import { ShieldCheck, DollarSign, Award, Droplets, MapPin, Sparkles } from 'lucide-react';

export const WhyNSR: React.FC = () => {
  const differentiators = [
    {
      icon: DollarSign,
      title: "Eliminate Recurring Lorry Costs",
      desc: "Traditional septic tanks require periodic vacuum cleaning lorries costing thousands every year. NSR Bio Septic Tanks digest waste continuously, saving you money for life."
    },
    {
      icon: Droplets,
      title: "100% Groundwater Protection",
      desc: "Protects your well water and soil from harmful pathogens and contamination. Effluent is rendered non-polluting and odorless before discharging."
    },
    {
      icon: Award,
      title: "Certified Engineering Choice",
      desc: "Select from heavy-duty RCC Concrete (for driveways), lightweight FRP Fiberglass (for high water tables), or economical PVC Polymer (for homes)."
    },
    {
      icon: ShieldCheck,
      title: "Low Footprint & Maintenance",
      desc: "Compact underground installation requiring no large surface area. Operates self-sufficiently under standard residential and commercial usage."
    },
    {
      icon: MapPin,
      title: "Direct Regional Service",
      desc: "Headquartered in Urapakkam / Chengalpattu with quick site survey and installation teams serving Chennai, Kanchipuram, and across Tamil Nadu."
    }
  ];

  return (
    <section id="why-nsr" className="py-20 lg:py-28 bg-brand-offwhite text-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Header */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-semibold uppercase tracking-wider">THE NSR ADVANTAGE</span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight leading-[1.15]">
              Why Property Owners Choose <span className="text-brand-emerald">NSR Enterprises</span>
            </h2>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We don't just supply tanks — we deliver engineered, long-term environmental sanitation solutions that protect your property value and the local ecosystem.
            </p>

            <div className="p-5 rounded-2xl bg-brand-dark text-white space-y-3 border border-brand-emerald/30 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-brand-accent/20 text-brand-accent flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">Guaranteed Quality Standards</h4>
                  <span className="text-[11px] text-brand-accent">Chengalpattu & Urapakkam Hub</span>
                </div>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Contact our engineering team today for immediate site evaluation and custom capacity design.
              </p>
            </div>
          </div>

          {/* Right Cards List */}
          <div className="lg:col-span-7 space-y-4">
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-brand-soft shadow-md hover:shadow-xl hover:border-brand-emerald/40 transition-all duration-300 flex items-start space-x-4 group"
                >
                  <div className="p-3 rounded-xl bg-brand-emerald/10 text-brand-emerald group-hover:bg-brand-emerald group-hover:text-white transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-black group-hover:text-brand-emerald transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
