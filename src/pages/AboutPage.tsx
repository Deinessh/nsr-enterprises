import React, { useState } from 'react';
import { COMPANY_INFO, TAMIL_SUMMARY } from '../data/companyData';
import { WhyNSR } from '../components/WhyNSR';
import { CheckCircle2, Languages, ArrowRight, Sparkles, Droplets } from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal: (req?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  const [showTamil, setShowTamil] = useState(false);

  return (
    <div className="pt-36 sm:pt-40 pb-16 bg-white text-brand-dark min-h-screen">
      
      {/* About Hero Banner (Centered Alignment) */}
      <section className="py-16 lg:py-24 section-header-bg border-b border-brand-blueBorder relative overflow-hidden shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span className="text-xs font-extrabold uppercase tracking-wider">ABOUT NSR ENTERPRISES</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight leading-tight">
              Pioneering <span className="text-brand-blue">Greenway Bio</span> Sanitation in Tamil Nadu
            </h1>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-2xl mx-auto font-medium">
              NSR Enterprises (Greenway Build & Bio Solutions) delivers non-filling bio septic tanks and decentralized sewage treatment systems engineered to protect groundwater and eliminate municipal lorry pumping permanently.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-16 lg:py-24 bg-brand-offwhite text-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-brand-soft shadow-2xl">
                <img 
                  src="https://nsrenterprises.in/wp-content/uploads/2025/01/155-420x380.jpg" 
                  alt="NSR Bio Septic Engineering" 
                  className="w-full h-[420px] object-cover"
                />
              </div>
              
              <div className="mt-4 p-4 rounded-2xl bg-brand-dark text-white flex items-center space-x-3 border border-brand-blue/30">
                <Droplets className="w-6 h-6 text-brand-blueLight flex-shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-white block">Registered Office Location</span>
                  <span className="text-white/70">{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-black">
                Solving Domestic & Commercial Sewage Challenges at the Root
              </h2>

              <p className="text-sm text-brand-muted leading-relaxed">
                Conventional septic tanks act purely as temporary holding units. They quickly fill up with thick sludge, release foul odors, and pollute surrounding soil and borewell water.
              </p>

              <p className="text-sm text-brand-muted leading-relaxed">
                At NSR Enterprises, our multi-chamber <strong className="text-brand-black">Bio Septic Tanks</strong> utilize specialized anaerobic bio-culture bacteria. Organic human waste is continuously digested into clear effluent and odorless gases, freeing property owners from the recurring costs of vacuum suction lorries.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "1,000L to 10,000L+ Sized Bio Digesters",
                  "RCC Concrete, FRP Fiberglass & PVC Polymer Material Options",
                  "Compliant with Tamil Nadu Pollution Control Board Norms",
                  "Turnkey Doorstep Installation in Urapakkam, Chengalpattu & Chennai"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs font-semibold text-brand-black">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tamil Toggle */}
              <div className="pt-4">
                <button
                  onClick={() => setShowTamil(!showTamil)}
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-blue bg-brand-soft hover:bg-brand-blue/10 px-4 py-2.5 rounded-xl transition-all border border-brand-blue/20"
                >
                  <Languages className="w-4 h-4" />
                  <span>{showTamil ? "Hide Tamil Summary" : "தமிழ் விவரங்களுக்கு கிளிக் செய்யவும் (Tamil Summary)"}</span>
                </button>

                {showTamil && (
                  <div className="mt-3 p-4 rounded-2xl bg-brand-dark text-white text-xs leading-relaxed border border-brand-blue/30 animate-fadeIn">
                    <h4 className="font-bold text-brand-blueLight text-sm mb-1.5">{TAMIL_SUMMARY.title}</h4>
                    <p className="text-white/80">{TAMIL_SUMMARY.content}</p>
                  </div>
                )}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenQuoteModal("About Us Consultation")}
                  className="px-6 py-3.5 bg-brand-blue hover:bg-brand-blueDark text-white font-bold text-xs rounded-xl shadow-lg flex items-center space-x-2"
                >
                  <span>Request Site Survey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Differentiators */}
      <WhyNSR />

    </div>
  );
};
