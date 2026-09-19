import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#0B2545] via-[#0A1C27] to-[#030D14] text-white pt-16 pb-20 border-t-4 border-[#00D2FF]/40 shadow-2xl relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info with Cutout Logo */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <img 
                src="/nsr_logo_official.png" 
                alt="NSR Enterprises Logo" 
                className="h-16 sm:h-20 lg:h-24 w-auto max-h-24 object-contain brightness-110" 
              />
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              NSR Enterprises (Greenway Build & Bio Solutions) is Tamil Nadu's leading provider of eco-friendly, non-filling Bio Septic Tanks (RCC, FRP, PVC) & Sewage Treatment Plants.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 hover:border-[#00D2FF] text-[#00D2FF] hover:bg-[#00D2FF] hover:text-white flex items-center justify-center shadow-md transition-all hover:scale-105"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 hover:border-[#00D2FF] text-[#00D2FF] hover:bg-[#00D2FF] hover:text-white flex items-center justify-center shadow-md transition-all hover:scale-105"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-[11px] font-bold text-[#10B981]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Certified Greenway Tech</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-white tracking-tight border-b border-white/10 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-300">
              <li><Link to="/" className="hover:text-[#00D2FF] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#00D2FF] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#00D2FF] transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-[#00D2FF] transition-colors">Projects</Link></li>
              <li><Link to="/faq" className="hover:text-[#00D2FF] transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-[#00D2FF] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Services Listing */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-white tracking-tight border-b border-white/10 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="hover:text-[#00D2FF] transition-colors flex items-center space-x-2">
                    <span className="text-[#10B981] font-extrabold">•</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-white tracking-tight border-b border-white/10 pb-2">
              Registered Office
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="font-medium text-slate-200 leading-snug">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-[#00D2FF] flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#00D2FF] transition-colors font-extrabold text-white">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4.5 h-4.5 text-[#00D2FF] flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#00D2FF] transition-colors font-bold text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 space-y-4 sm:space-y-0 font-medium">
          <p>© {new Date().getFullYear()} NSR Enterprises. All Rights Reserved. Bio Septic Tanks & STP Solutions Tamil Nadu.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-white font-bold hover:text-[#00D2FF] transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl border border-white/20 shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
