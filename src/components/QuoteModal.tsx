import React, { useState, useEffect } from 'react';
import { X, Send, AlertCircle, ShieldCheck } from 'lucide-react';
import { buildWhatsAppLink } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledRequirement?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefilledRequirement }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    requirement: prefilledRequirement || 'Bio Septic Tank',
    notes: ''
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (prefilledRequirement) {
      setFormData(prev => ({ ...prev, requirement: prefilledRequirement }));
    }
  }, [prefilledRequirement]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number to proceed via WhatsApp.');
      return;
    }

    setError('');
    
    // Build WhatsApp URL with validated details and redirect
    const waUrl = buildWhatsAppLink({
      name: formData.name,
      phone: formData.phone,
      location: formData.location,
      requirement: formData.requirement,
      message: formData.notes
    });

    onClose();
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-brand-dark text-white rounded-3xl border border-brand-blue/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-all"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-1.5 text-[10px] uppercase font-bold tracking-wider text-brand-blueLight bg-brand-blue/30 px-2.5 py-0.5 rounded-full border border-brand-blueLight/30">
              <ShieldCheck className="w-3 h-3 text-brand-greenAccent" />
              <span>INSTANT WHATSAPP QUOTE REQUEST</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Get a Customized Quote
            </h3>
            <p className="text-xs text-white/60">
              Enter your details below to send a pre-formatted WhatsApp quote request to our engineering team.
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-900/40 border border-red-500/50 text-red-200 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-3 pt-2">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-white/80">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. S. Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-blueLight"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-white/80">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 82481 27235"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-blueLight"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-white/80">Site Location / District</label>
              <input
                type="text"
                placeholder="e.g. Urapakkam / Chengalpattu"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-blueLight"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-white/80">Selected Requirement</label>
              <input
                type="text"
                value={formData.requirement}
                onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-blueLight"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-white/80">Additional Notes / Capacity Need</label>
              <textarea
                rows={2}
                placeholder="e.g. Need 5000L tank for 20 residential users..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-blueLight"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-5 mt-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Enquiry via WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
};
