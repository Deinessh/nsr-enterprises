import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { QuoteModal } from './components/QuoteModal';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route change component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState<string>('Bio Septic Tank');

  const handleOpenQuoteModal = (requirement?: string) => {
    if (requirement) {
      setSelectedRequirement(requirement);
    }
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-offwhite text-brand-black flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      
      <ScrollToTop />

      {/* Header Navigation with logo and routing links */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Page Views Container */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/about" element={<AboutPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/services" element={<ServicesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons at bottom-right corner of every page */}
      <FloatingActions />

      {/* Quick WhatsApp Consultation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefilledRequirement={selectedRequirement}
      />

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
