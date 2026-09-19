import React, { useState } from 'react';
import { Calculator, Users, Building, Home, Factory, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink } from '../data/companyData';

interface CapacityCalculatorProps {
  onOpenQuoteModal: (details?: string) => void;
}

export const CapacityCalculator: React.FC<CapacityCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [propertyType, setPropertyType] = useState<'residential' | 'apartment' | 'commercial' | 'industrial'>('residential');
  const [occupants, setOccupants] = useState<number>(6);

  const calculateCapacity = () => {
    let multiplier = 150;
    if (propertyType === 'apartment') multiplier = 160;
    if (propertyType === 'commercial') multiplier = 80;
    if (propertyType === 'industrial') multiplier = 90;

    const rawCapacity = occupants * multiplier;

    if (rawCapacity <= 1200) return { size: "1,000 Litres Bio Septic Tank", code: "1000L", recommended: "PVC or FRP Bio Septic Tank" };
    if (rawCapacity <= 3000) return { size: "2,500 Litres Bio Septic Tank", code: "2500L", recommended: "FRP or RCC Concrete Bio Tank" };
    if (rawCapacity <= 6000) return { size: "5,000 Litres Bio Septic Tank", code: "5000L", recommended: "RCC Concrete or FRP Bio Tank" };
    if (rawCapacity <= 12000) return { size: "10,000 Litres Bio Septic Tank", code: "10000L", recommended: "Heavy-Duty RCC Concrete Bio Tank" };
    return { size: "Custom Multi-Tank System (15,000L+)", code: "CUSTOM", recommended: "Turnkey Modular RCC / STP System" };
  };

  const result = calculateCapacity();

  const handleWhatsAppCalculationQuote = () => {
    const waUrl = buildWhatsAppLink({
      requirement: `Capacity Enquiry: ${result.size}`,
      name: "Calculator User",
      phone: "",
      location: "Tamil Nadu",
      propertyType: propertyType,
      message: `I used your website calculator. Recommended tank size: ${result.size} (${result.recommended}) for ${occupants} daily users (${propertyType}). Please send exact quotation.`
    });
    window.open(waUrl, '_blank');
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-brand-blueSoft text-brand-dark relative overflow-hidden border-y border-brand-blueBorder">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header with Mild Background Image Overlay */}
        <div className="text-center max-w-3xl mx-auto mb-14 p-8 sm:p-10 rounded-3xl section-header-bg border border-brand-blueBorder shadow-md space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-brand-blue" />
            <span className="text-xs font-extrabold uppercase tracking-wider">ONLINE SIZING TOOL</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
            Bio Septic Tank <span className="text-brand-blue">Capacity Calculator</span>
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-2xl mx-auto font-medium">
            Select your building type and user count below to calculate recommended tank volume and materials.
          </p>
        </div>

        {/* Clean White + Light Blue Calculator Container (Requirement #6) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Inputs Box (Clean White) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-brand-blueBorder shadow-xl space-y-8 flex flex-col justify-between">
            
            {/* Step 1: Select Property Type */}
            <div className="space-y-4">
              <label className="text-xs font-extrabold text-brand-blue uppercase tracking-wider block">
                STEP 1: SELECT PROPERTY TYPE
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'residential', label: 'Residence', icon: Home },
                  { id: 'apartment', label: 'Apartment', icon: Building },
                  { id: 'commercial', label: 'Commercial', icon: Users },
                  { id: 'industrial', label: 'Industrial', icon: Factory },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = propertyType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPropertyType(item.id as any)}
                      className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center space-y-2 ${
                        isSelected
                          ? 'bg-brand-blue text-white border-brand-blue shadow-md scale-[1.02]'
                          : 'bg-brand-blueSoft/60 text-brand-dark border-brand-blueBorder hover:bg-brand-blueSoft'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-bold">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Occupant Count Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-extrabold text-brand-blue uppercase tracking-wider">
                  STEP 2: NUMBER OF DAILY USERS / OCCUPANTS
                </label>
                <span className="font-display font-extrabold text-2xl text-brand-blue bg-brand-blueSoft px-4 py-1 rounded-xl border border-brand-blueBorder shadow-sm">
                  {occupants} {occupants === 150 ? '+' : ''} Users
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="150"
                step="2"
                value={occupants}
                onChange={(e) => setOccupants(parseInt(e.target.value))}
                className="w-full h-3 bg-brand-blueSoft rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[11px] text-brand-muted font-mono font-medium">
                <span>2 Users (Villa)</span>
                <span>50 Users (Commercial)</span>
                <span>150+ Users (Industrial)</span>
              </div>
            </div>

            {/* Zero Lorry Guarantee Note */}
            <div className="p-4 rounded-2xl bg-brand-blueSoft/80 border border-brand-blueBorder text-xs text-brand-dark space-y-1.5">
              <div className="flex items-center text-brand-green font-bold">
                <ShieldCheck className="w-4 h-4 mr-1.5" />
                <span>Zero Lorry Cleaning Guarantee</span>
              </div>
              <p className="text-[11px] text-brand-muted leading-relaxed">
                Unlike traditional tanks requiring ₹3,000–₹6,000 suction lorry pumping every 6–12 months, NSR Bio Septic Tanks digest waste continuously with zero overflow.
              </p>
            </div>

          </div>

          {/* Right Calculated Output Box (Light Blue Gradient) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-white via-brand-blueSoft to-blue-50 p-6 sm:p-10 rounded-3xl border border-brand-blueBorder shadow-xl flex flex-col justify-between relative overflow-hidden">
            
            <div className="relative z-10 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white text-brand-blue text-xs font-bold border border-brand-blueBorder shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                <span>ESTIMATED SYSTEM RECOMMENDATION</span>
              </div>

              <div>
                <span className="text-xs text-brand-muted block uppercase font-bold">Recommended Bio Septic Tank</span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-dark mt-1 leading-tight">
                  {result.size}
                </h3>
              </div>

              <div className="space-y-3 pt-4 border-t border-brand-blueBorder">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-brand-muted font-medium">Recommended Material:</span>
                  <span className="font-bold text-brand-blue">{result.recommended}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-brand-muted font-medium">Lorry Pumping Required:</span>
                  <span className="font-bold text-brand-green">0% (Lorry Free)</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-brand-muted font-medium">Groundwater Safety:</span>
                  <span className="font-bold text-brand-dark">100% Contamination Safe</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                {["Anaerobic biological digestion", "Customized inlet/outlet plumbing", "Turnkey setup in Tamil Nadu"].map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-brand-dark font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Direct WhatsApp Quote Trigger & Callback Request */}
            <div className="pt-8 relative z-10 space-y-3">
              <button
                onClick={handleWhatsAppCalculationQuote}
                className="w-full py-4 px-6 text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blueDark hover:to-brand-greenDark rounded-2xl shadow-lg shadow-brand-blue/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Request Price Quote via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onOpenQuoteModal(`Calculator Estimate: ${result.size} (${result.recommended})`)}
                className="w-full py-2.5 px-4 text-xs font-bold text-brand-dark bg-white hover:bg-brand-blueSoft border border-brand-blueBorder rounded-xl transition-all text-center"
              >
                Request Free Engineering Callback
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
