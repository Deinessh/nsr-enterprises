import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface MobileQuickBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-brand-dark/95 backdrop-blur-lg border-t border-brand-accent/30 py-2.5 px-4 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center">
        
        {/* Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-brand-accent mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95 transition-all shadow-md"
        >
          <MessageSquare className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
        </a>

        {/* Get Quote Button */}
        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-brand-accent text-brand-dark font-bold hover:bg-emerald-400 active:scale-95 transition-all shadow-md"
        >
          <Send className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Get Quote</span>
        </button>

      </div>
    </div>
  );
};
