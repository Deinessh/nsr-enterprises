import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenQuoteModal: (requirement?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      
      {/* Top Information Strip (Light Blue Background) */}
      <div className="bg-brand-blueSoft text-brand-dark border-b border-brand-blueBorder text-xs py-1.5 hidden md:block transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center space-x-2 text-brand-dark font-semibold hover:text-brand-blue transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center space-x-2 text-brand-dark font-semibold hover:text-brand-blue transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-blue" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-brand-muted font-medium">
              <MapPin className="w-3.5 h-3.5 text-brand-green" />
              <span>Urapakkam, Chengalpattu, Tamil Nadu</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white text-brand-blue px-3 py-0.5 rounded-full border border-brand-blueBorder font-bold text-[11px] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
              <span>Greenway Build & Bio Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Clean White Background, Compact Py-2) */}
      <nav 
        className={`w-full bg-white transition-all duration-300 border-b border-brand-blueBorder ${
          isScrolled 
            ? 'py-2 shadow-md shadow-brand-blue/5' 
            : 'py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Sized to Fit Comfortably in Header */}
          <Link to="/" className="flex items-center group py-0.5">
            <img 
              src="/nsr_logo_official.png" 
              alt="NSR Enterprises Logo" 
              className="h-12 sm:h-14 lg:h-16 w-auto max-h-16 object-contain group-hover:scale-105 transition-transform duration-300" 
            />
          </Link>

          {/* Desktop Navigation Links (Includes FAQ) */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-xl text-sm font-bold transition-all duration-200 relative ${
                    active
                      ? 'text-brand-blue bg-brand-blueSoft border border-brand-blueBorder shadow-sm'
                      : 'text-brand-dark hover:text-brand-blue hover:bg-brand-blueSoft/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blueDark hover:to-brand-greenDark rounded-xl shadow-md shadow-brand-blue/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden text-xs bg-brand-blue text-white font-bold px-3 py-1.5 rounded-lg shadow-sm"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-brand-dark hover:bg-brand-blueSoft transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-brand-blueBorder px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  isActive(link.path)
                    ? 'text-brand-blue bg-brand-blueSoft border border-brand-blueBorder'
                    : 'text-brand-dark hover:text-brand-blue hover:bg-brand-blueSoft/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 text-white bg-gradient-to-r from-brand-blue to-brand-green font-bold rounded-xl shadow-md"
              >
                <span>Request a Quote via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="pt-3 flex flex-col space-y-2 text-xs text-brand-muted">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-semibold text-brand-dark">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-brand-blue" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-semibold text-brand-dark">{COMPANY_INFO.email}</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
