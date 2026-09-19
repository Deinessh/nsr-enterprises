import React, { useState } from 'react';
import { FAQS, COMPANY_INFO } from '../data/companyData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-brand-blueSoft text-brand-dark relative border-y border-brand-blueBorder">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-brand-blue" />
            <span className="text-xs font-bold uppercase tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
            Got Questions About <span className="text-brand-blue">Bio Septic Tanks?</span>
          </h2>
          <p className="text-sm text-brand-muted leading-relaxed">
            Here are verified technical answers regarding installation, capacities, materials, and long-term biological maintenance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-brand-blueBorder shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex justify-between items-center space-x-4 focus:outline-none hover:bg-brand-blueSoft/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-bold text-brand-blue bg-brand-blueSoft px-2.5 py-1 rounded-lg border border-brand-blueBorder hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-brand-dark">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-brand-blue text-white shadow-sm' : 'bg-brand-blueSoft text-brand-blue'}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-brand-muted leading-relaxed border-t border-brand-blueBorder/60 pt-4 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp / Call Support Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-brand-blueBorder shadow-lg text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-base sm:text-lg text-brand-dark">Have a specific property question?</h4>
            <p className="text-xs text-brand-muted">Our engineering team is available for immediate phone & WhatsApp consultation.</p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-md transition-all flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 82481 27235)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
