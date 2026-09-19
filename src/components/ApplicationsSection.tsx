import React from 'react';
import { Home, Building2, Factory, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ApplicationsSectionProps {
  onOpenQuoteModal: (applicationName?: string) => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ onOpenQuoteModal }) => {
  const applications = [
    {
      id: 'residential',
      title: 'Residential Solutions',
      subtitle: 'Single Houses, Villas & Residential Layouts',
      desc: 'Compact, zero-smell bio septic tanks engineered for tight plots and individual homes. Completely eliminates the nuisance of calling septic cleaning lorries.',
      icon: Home,
      image: 'https://nsrenterprises.in/wp-content/uploads/2025/01/155-420x380.jpg',
      features: [
        '1,000L to 3,000L Capacity Options',
        'Backyard or Garden Placement',
        'Zero Odor & No Groundwater Contamination',
        'Rapid 1-Day Installation Available'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Facilities',
      subtitle: 'Apartments, Hotels, Hospitals & Office Complexes',
      desc: 'Medium-to-large capacity bio digesters and decentralized STP units built to process high daily blackwater and greywater volumes safely.',
      icon: Building2,
      image: 'https://nsrenterprises.in/wp-content/uploads/2025/01/82f460c1c174e41ff8238e205bdbf458-420x380.jpg',
      features: [
        '5,000L to 15,000L Capacity Systems',
        'Multi-Chamber High Load Digestion',
        'Water Reuse Options for Flushing/Gardening',
        'Full Pollution Board Compliance'
      ]
    },
    {
      id: 'industrial',
      title: 'Industrial Projects',
      subtitle: 'Factories, Processing Units & Heavy Infrastructure',
      desc: 'Heavy-duty RCC Concrete & custom wastewater treatment plants engineered for demanding industrial organic loads and continuous heavy-vehicle overhead loads.',
      icon: Factory,
      image: 'https://nsrenterprises.in/wp-content/uploads/2025/01/a0933338bbf7356f0b8c4a68cce4bc46-420x380.jpg',
      features: [
        '20,000L to 50,000L+ Heavy Scale Plants',
        'Driveway / Heavy Traffic Load Bearing',
        'High COD & BOD Reduction Filtration',
        'Custom Biological Bio-Culture Dosing'
      ]
    }
  ];

  return (
    <section id="applications" className="py-20 lg:py-28 bg-brand-offwhite text-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold uppercase tracking-wider">SOLUTIONS FOR EVERY SCALE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight">
            Tailored Engineering for <span className="text-brand-emerald">All Sectors</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Whether you are building an independent house in Urapakkam or managing an industrial plant in Chengalpattu, NSR Enterprises provides certified bio-septic engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.id}
                className="group rounded-3xl bg-white border border-brand-soft overflow-hidden shadow-xl shadow-brand-emerald/5 hover:shadow-2xl hover:border-brand-emerald/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-3 text-white">
                      <div className="p-2.5 rounded-xl bg-brand-emerald text-white flex-shrink-0 shadow-lg">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-white">{app.title}</h3>
                        <span className="text-xs text-brand-accent">{app.subtitle}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {app.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-brand-soft">
                      {app.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-brand-black font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenQuoteModal(app.title)}
                    className="w-full py-3 px-4 text-xs font-semibold text-white bg-brand-dark hover:bg-brand-emerald rounded-xl transition-colors flex items-center justify-center space-x-2 group-hover:shadow-lg"
                  >
                    <span>Consult for {app.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
