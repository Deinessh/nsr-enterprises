import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, Sparkles, Clock, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    propertyType: 'Residential (House/Villa)',
    requirement: initialService || 'Bio Septic Tank',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number so our team can reach you.');
      return;
    }

    setError('');
    setLoading(true);

    // Simulate submission state
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-offwhite text-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold uppercase tracking-wider">GET A FREE CONSULTATION</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight">
            Request an Engineering <span className="text-brand-emerald">Quote</span>
          </h2>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Fill out the form below or contact our team directly for site survey scheduling and custom bio septic tank estimates across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-dark text-white space-y-6 border border-brand-emerald/30 shadow-2xl">
              <h3 className="font-display font-bold text-2xl text-white border-b border-white/10 pb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-start space-x-4 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-brand-accent/20 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/50 block uppercase font-medium">Direct Phone & WhatsApp</span>
                    <span className="font-display font-bold text-base text-white group-hover:text-brand-accent transition-colors">
                      {COMPANY_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start space-x-4 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-brand-accent/20 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/50 block uppercase font-medium">Official Email</span>
                    <span className="font-display font-semibold text-sm text-white group-hover:text-brand-accent transition-colors">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Office Address */}
                <div className="flex items-start space-x-4 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="p-3 rounded-xl bg-brand-accent/20 text-brand-accent flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/50 block uppercase font-medium">Registered Office</span>
                    <p className="text-xs text-white/90 leading-relaxed font-medium mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="p-3 rounded-xl bg-brand-accent/20 text-brand-accent flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/50 block uppercase font-medium">Working Hours</span>
                    <p className="text-xs text-white/90 font-medium">
                      Monday – Saturday: 8:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick WhatsApp Consultation</span>
              </a>
            </div>

            {/* Regional Map Location Card */}
            <div className="p-6 rounded-3xl bg-white border border-brand-soft shadow-md text-xs space-y-2">
              <span className="font-bold text-brand-black block">Service Coverage Area</span>
              <p className="text-brand-muted leading-relaxed">
                Primary hubs in Urapakkam and Chengalpattu with doorstep installation services covering Tambaram, Kanchipuram, Chennai, and all districts in Tamil Nadu.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {COMPANY_INFO.locationAreas.map((area, idx) => (
                  <span key={idx} className="bg-brand-soft text-brand-black px-2.5 py-1 rounded-md text-[11px] font-medium">
                    📍 {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-brand-soft shadow-2xl">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-brand-emerald/15 text-brand-emerald mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display font-extrabold text-2xl text-brand-black">
                  Consultation Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-brand-black">{formData.name}</strong>. An NSR Enterprises engineer will call you shortly at <strong className="text-brand-black">{formData.phone}</strong> to discuss your site requirements and provide an accurate quote.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', location: '', propertyType: 'Residential', requirement: 'Bio Septic Tank', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 bg-brand-dark text-white text-xs font-semibold rounded-xl hover:bg-brand-emerald transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-brand-black">
                    Send Us Your Requirement
                  </h3>
                  <p className="text-xs text-brand-muted mt-1">
                    Receive technical advice and pricing within 24 hours.
                  </p>
                </div>

                {error && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-black">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. R. Sundaram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-soft bg-brand-soft/30 text-sm focus:outline-none focus:border-brand-emerald focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-black">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-soft bg-brand-soft/30 text-sm focus:outline-none focus:border-brand-emerald focus:bg-white transition-all"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-black">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-soft bg-brand-soft/30 text-sm focus:outline-none focus:border-brand-emerald focus:bg-white transition-all"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-black">Site Location / Area</label>
                    <input
                      type="text"
                      placeholder="e.g. Urapakkam, Chengalpattu"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-soft bg-brand-soft/30 text-sm focus:outline-none focus:border-brand-emerald focus:bg-white transition-all"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Property Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-black">Property Type</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-soft bg-brand-soft/30 text-sm focus:outline-none focus:border-brand-emerald focus:bg-white transition-all"
                    >
                      <option value="Residential (House/Villa)">Residential (House / Villa)</option>
                      <option value="Apartment Complex">Apartment Complex</option>
                      <option value="Commercial Office/Hotel">Commercial Office / Hotel</option>
                      <option value="Industrial Factory">Industrial Factory / Plant</option>
                    </select>
                  </div>

                  {/* Primary Requirement */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-brand-black">Primary Requirement</label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-soft bg-brand-soft/30 text-sm focus:outline-none focus:border-brand-emerald focus:bg-white transition-all"
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

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-brand-black">Additional Requirement Details</label>
                  <textarea
                    rows={4}
                    placeholder="Mention number of residents/users or plot layout details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-soft bg-brand-soft/30 text-sm focus:outline-none focus:border-brand-emerald focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 text-sm font-bold text-brand-dark bg-brand-accent hover:bg-emerald-400 rounded-2xl shadow-xl shadow-brand-accent/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Free Site Consultation</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-brand-muted">
                  🔒 Your contact info is strictly used for quote calculation. No spam.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
