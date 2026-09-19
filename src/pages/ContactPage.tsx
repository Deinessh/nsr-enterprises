import React, { useState } from 'react';
import { COMPANY_INFO, buildWhatsAppLink } from '../data/companyData';
import { Phone, Mail, MapPin, Send, AlertCircle, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { FaqAccordion } from '../components/FaqAccordion';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Urapakkam, Chengalpattu',
    propertyType: 'Residential (House/Villa)',
    requirement: 'Bio Septic Tank',
    message: ''
  });

  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please fill in your name and phone number to proceed via WhatsApp.');
      return;
    }

    setError('');
    const waUrl = buildWhatsAppLink({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      propertyType: formData.propertyType,
      requirement: formData.requirement,
      message: formData.message
    });

    window.open(waUrl, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-white text-brand-dark min-h-screen">
      
      {/* Contact Header Banner */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-16 lg:py-20 relative overflow-hidden shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/20 border border-white/30 text-white mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-extrabold uppercase tracking-wider">GET IN TOUCH</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Contact <span className="text-yellow-300">NSR Enterprises</span>
          </h1>
          <p className="text-sm sm:text-base text-white/90 mt-3 leading-relaxed max-w-2xl mx-auto">
            Have questions about bio septic tank capacities or need an on-site survey? Our engineering team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Requirement #1: Dedicated FAQ Section BEFORE Contact Section */}
      <FaqAccordion />

      {/* Dedicated Contact Form & Info Section */}
      <section id="contact-details" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Main Grid: Contact Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-blueSoft border border-brand-blueBorder shadow-xl space-y-6">
              <h3 className="font-display font-bold text-2xl text-brand-dark border-b border-brand-blueBorder pb-4">
                Official Contact Info
              </h3>

              <div className="space-y-4 text-xs">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-brand-blueBorder hover:border-brand-blue transition-colors group shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-brand-blueSoft text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-muted block uppercase font-bold">Direct Phone & WhatsApp</span>
                    <span className="font-display font-bold text-base text-brand-dark group-hover:text-brand-blue transition-colors">
                      {COMPANY_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-brand-blueBorder hover:border-brand-blue transition-colors group shadow-sm"
                >
                  <div className="p-3 rounded-xl bg-brand-blueSoft text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-muted block uppercase font-bold">Email Address</span>
                    <span className="font-display font-semibold text-sm text-brand-dark group-hover:text-brand-blue transition-colors">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Office Address */}
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-brand-blueBorder shadow-sm">
                  <div className="p-3 rounded-xl bg-brand-blueSoft text-brand-green flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-muted block uppercase font-bold">Registered Location</span>
                    <p className="text-xs text-brand-dark leading-relaxed font-semibold mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white border border-brand-blueBorder shadow-sm">
                  <div className="p-3 rounded-xl bg-brand-blueSoft text-brand-blue flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-muted block uppercase font-bold">Working Hours</span>
                    <p className="text-xs text-brand-dark font-medium">
                      Monday – Saturday: 8:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp (+91 82481 27235)</span>
              </a>

            </div>

          </div>

          {/* Right WhatsApp Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-brand-blueBorder shadow-xl">
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl text-brand-dark">
                  Send Enquiry via WhatsApp
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Fill in your details below to open a formatted enquiry message directly in WhatsApp.
                </p>
              </div>

              {error && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-dark">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. R. Sundaram"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-blueBorder bg-brand-blueSoft/30 text-sm text-brand-dark focus:outline-none focus:border-brand-blue transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-dark">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-blueBorder bg-brand-blueSoft/30 text-sm text-brand-dark focus:outline-none focus:border-brand-blue transition-all"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-dark">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-blueBorder bg-brand-blueSoft/30 text-sm text-brand-dark focus:outline-none focus:border-brand-blue transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-dark">Site Location / Area</label>
                  <input
                    type="text"
                    placeholder="e.g. Urapakkam, Chengalpattu"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-blueBorder bg-brand-blueSoft/30 text-sm text-brand-dark focus:outline-none focus:border-brand-blue transition-all"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-dark">Property Type</label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-blueBorder bg-brand-blueSoft/30 text-sm text-brand-dark focus:outline-none focus:border-brand-blue transition-all"
                  >
                    <option value="Residential (House/Villa)">Residential (House / Villa)</option>
                    <option value="Apartment Complex">Apartment Complex</option>
                    <option value="Commercial Office/Hotel">Commercial Office / Hotel</option>
                    <option value="Industrial Factory">Industrial Factory / Plant</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-brand-dark">Primary Requirement</label>
                  <select
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-blueBorder bg-brand-blueSoft/30 text-sm text-brand-dark focus:outline-none focus:border-brand-blue transition-all"
                  >
                    <option value="Bio Septic Tank">Bio Septic Tank (Non-Filling)</option>
                    <option value="RCC Concrete Bio Septic Tank">RCC Concrete Bio Septic Tank</option>
                    <option value="FRP Bio Septic Tank">FRP Fiberglass Bio Septic Tank</option>
                    <option value="PVC Bio Septic Tank">PVC Polymer Bio Septic Tank</option>
                    <option value="Sewage Treatment Plant (STP)">Sewage Treatment Plant (STP)</option>
                    <option value="Wastewater Treatment">Wastewater Treatment</option>
                  </select>
                </div>

              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-brand-dark">Additional Requirements / Notes</label>
                <textarea
                  rows={4}
                  placeholder="Mention capacity needs, plot layout, or user count..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-brand-blueBorder bg-brand-blueSoft/30 text-sm text-brand-dark focus:outline-none focus:border-brand-blue transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blueDark hover:to-brand-greenDark rounded-2xl shadow-xl shadow-brand-blue/20 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Redirect to WhatsApp</span>
              </button>

            </form>

          </div>

        </div>

        {/* Interactive Location Map (Requirement #7: Exact Business Pin Marker) */}
        <div className="bg-brand-blueSoft p-6 sm:p-8 rounded-3xl border border-brand-blueBorder shadow-xl space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-brand-blue text-white shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-brand-dark">
                Exact Business Location Map
              </h3>
              <p className="text-xs text-brand-muted">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-brand-blueBorder shadow-md bg-white">
            <iframe
              title="NSR Enterprises Pinned Location Map"
              src={COMPANY_INFO.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </section>
    </div>
  );
};
