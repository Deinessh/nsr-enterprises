import React, { useState } from 'react';
import { MATERIAL_COMPARISON } from '../data/companyData';
import { Shield, Clock, Wrench, Scale, Sparkles, Check, ArrowRight } from 'lucide-react';

interface MaterialComparisonProps {
  onOpenQuoteModal: (materialName?: string) => void;
}

export const MaterialComparison: React.FC<MaterialComparisonProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState(MATERIAL_COMPARISON[0].id);
  const selectedMaterial = MATERIAL_COMPARISON.find(m => m.id === activeTab) || MATERIAL_COMPARISON[0];

  return (
    <section id="materials" className="py-20 lg:py-28 bg-brand-blueSoft text-brand-dark relative border-b border-brand-blueBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header with Mild Background Image Overlay */}
        <div className="text-center max-w-3xl mx-auto mb-14 p-8 sm:p-10 rounded-3xl section-header-bg border border-brand-blueBorder shadow-md space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider">TANK MATERIAL COMPARISON</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
            Which Tank Material is <span className="text-brand-blue">Right For You?</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-2xl mx-auto font-medium">
            NSR Enterprises supplies RCC Concrete, FRP Fiberglass, and PVC Polymer Bio Septic Tanks. Compare structural load, installation turnaround, and durability below.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12">
          {MATERIAL_COMPARISON.map((material) => {
            const isActive = material.id === activeTab;
            return (
              <button
                key={material.id}
                onClick={() => setActiveTab(material.id)}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl font-display font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isActive
                    ? 'bg-brand-dark text-white shadow-xl shadow-brand-dark/20 scale-[1.02]'
                    : 'bg-white text-brand-black hover:bg-brand-soft border border-brand-soft shadow-sm'
                }`}
              >
                <span>{material.name}</span>
                {isActive && <div className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />}
              </button>
            );
          })}
        </div>

        {/* Selected Material Showcase Card */}
        <div className="rounded-3xl bg-white border border-brand-soft p-6 sm:p-10 shadow-2xl shadow-brand-emerald/5 transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Visual */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-brand-soft shadow-md">
                <img
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold text-brand-accent tracking-widest block">
                    RECOMMENDED USE CASE
                  </span>
                  <p className="text-xs font-semibold text-white mt-0.5">
                    {selectedMaterial.bestFor}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Specifications Table */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold text-brand-emerald uppercase tracking-wider block">
                  TECHNICAL OVERVIEW
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-black mt-1">
                  {selectedMaterial.name}
                </h3>
                <p className="text-xs font-medium text-brand-muted mt-1 italic">
                  "{selectedMaterial.tagline}"
                </p>
              </div>

              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {selectedMaterial.description}
              </p>

              {/* Spec Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                
                <div className="p-3.5 rounded-2xl bg-brand-soft/60 border border-brand-soft">
                  <div className="flex items-center text-brand-emerald text-xs font-medium mb-1">
                    <Shield className="w-3.5 h-3.5 mr-1.5" />
                    <span>Durability</span>
                  </div>
                  <span className="font-display font-bold text-sm text-brand-black block">
                    {selectedMaterial.durability}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-brand-soft/60 border border-brand-soft">
                  <div className="flex items-center text-brand-emerald text-xs font-medium mb-1">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    <span>Install Time</span>
                  </div>
                  <span className="font-display font-bold text-sm text-brand-black block">
                    {selectedMaterial.installationSpeed}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-brand-soft/60 border border-brand-soft">
                  <div className="flex items-center text-brand-emerald text-xs font-medium mb-1">
                    <Wrench className="w-3.5 h-3.5 mr-1.5" />
                    <span>Maintenance</span>
                  </div>
                  <span className="font-display font-bold text-sm text-brand-black block">
                    {selectedMaterial.maintenance}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-brand-soft/60 border border-brand-soft">
                  <div className="flex items-center text-brand-emerald text-xs font-medium mb-1">
                    <Scale className="w-3.5 h-3.5 mr-1.5" />
                    <span>Structure Weight</span>
                  </div>
                  <span className="font-display font-bold text-xs text-brand-black block">
                    {selectedMaterial.weight}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-brand-soft/60 border border-brand-soft col-span-2 sm:col-span-2">
                  <div className="flex items-center text-brand-emerald text-xs font-medium mb-1">
                    <Check className="w-3.5 h-3.5 mr-1.5" />
                    <span>Waterproof Index</span>
                  </div>
                  <span className="font-display font-bold text-xs text-brand-black block">
                    {selectedMaterial.waterproofRating}
                  </span>
                </div>

              </div>

              {/* Consultation trigger for this material */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenQuoteModal(selectedMaterial.name)}
                  className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold text-white bg-brand-emerald hover:bg-brand-dark rounded-xl shadow-lg transition-all group"
                >
                  <span>Request Quote for {selectedMaterial.name}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
