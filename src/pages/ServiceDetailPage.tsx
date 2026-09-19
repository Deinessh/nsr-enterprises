import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, buildWhatsAppLink } from '../data/companyData';
import { ArrowLeft, CheckCircle2, ShieldCheck, Send, AlertCircle, Phone } from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = SERVICES.find(s => s.id === serviceId) || SERVICES[0];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    capacity: '1,000L to 2,500L',
    notes: ''
  });

  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please enter your name and phone number.');
      return;
    }

    setError('');
    const waUrl = buildWhatsAppLink({
      name: formData.name,
      phone: formData.phone,
      location: formData.location,
      requirement: service.title,
      message: `Capacity: ${formData.capacity}. Notes: ${formData.notes}`
    });

    window.open(waUrl, '_blank');
  };

  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-20 bg-white min-h-screen text-brand-dark">
      
      {/* Top Breadcrumb Header */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-14 relative overflow-hidden shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-blueLight hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
          
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xs font-bold text-brand-blueLight uppercase bg-brand-blue/30 px-3 py-0.5 rounded-full border border-brand-blueLight/30">
              SERVICE #{service.number}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            {service.title}
          </h1>
          <p className="text-sm text-white/80 mt-2 max-w-2xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Image Banner */}
            <div className="h-72 sm:h-96 rounded-3xl overflow-hidden border border-brand-soft shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-brand-soft shadow-md">
              <h2 className="font-display font-bold text-2xl text-brand-black">
                Overview & Engineering Principle
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed">
                {service.fullDesc}
              </p>
            </div>

            {/* Technical Highlights */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-soft shadow-md space-y-4">
              <h3 className="font-display font-bold text-xl text-brand-black flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-brand-blue" />
                Key Technical Advantages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-brand-soft/60 border border-brand-soft flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-brand-black">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suitable Applications */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-soft shadow-md space-y-3">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-brand-muted">
                Recommended Applications
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-brand-soft text-brand-black font-semibold text-xs border border-brand-soft"
                  >
                    🏢 {app}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Direct WhatsApp Form */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-brand-dark text-white p-6 sm:p-8 rounded-3xl border border-brand-blue/30 shadow-2xl space-y-6">
              
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blueLight bg-brand-blue/30 px-2.5 py-0.5 rounded-full border border-brand-blueLight/30">
                  INSTANT QUOTE FOR {service.title}
                </span>
                <h3 className="font-display font-bold text-2xl text-white mt-2">
                  Request Service Pricing
                </h3>
                <p className="text-xs text-white/60">
                  Submit your site details to receive a pre-formatted WhatsApp quote directly.
                </p>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-900/40 border border-red-500/50 text-red-200 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-white/80">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. S. Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-blueLight"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-white/80">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 82481 27235"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-blueLight"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-white/80">Site Location / District</label>
                  <input
                    type="text"
                    placeholder="e.g. Urapakkam, Chengalpattu"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-blueLight"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-white/80">Capacity Required</label>
                  <select
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-xs text-white focus:outline-none focus:border-brand-blueLight"
                  >
                    <option value="1,000L Bio Tank (4-8 users)">1,000L Bio Tank (4-8 users)</option>
                    <option value="2,500L Bio Tank (10-20 users)">2,500L Bio Tank (10-20 users)</option>
                    <option value="5,000L Bio Tank (20-40 users)">5,000L Bio Tank (20-40 users)</option>
                    <option value="10,000L+ Industrial STP System">10,000L+ Industrial STP System</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Quote Request on WhatsApp</span>
                </button>
              </form>

              <div className="pt-4 border-t border-white/10 text-center">
                <a
                  href={`tel:918248127235`}
                  className="inline-flex items-center text-xs text-brand-blueLight hover:underline font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 mr-1" />
                  <span>Or Call Directly: +91 82481 27235</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
