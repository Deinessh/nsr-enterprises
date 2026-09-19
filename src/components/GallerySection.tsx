import React, { useState } from 'react';
import { Sparkles, Play, Image as ImageIcon, ExternalLink, X, Film, CheckCircle2, ShieldCheck } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'bio-septic' | 'stp' | 'installation' | 'videos';
  type: 'image' | 'video';
  thumbnailUrl: string;
  tag: string;
  location: string;
  description: string;
  capacity: string;
}

interface GallerySectionProps {
  showHeader?: boolean;
  onOpenQuoteModal?: (req?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ 
  showHeader = true,
  onOpenQuoteModal 
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'bio-septic' | 'stp' | 'installation' | 'videos'>('all');
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: '3D Multi-Chamber Bio Septic Digester Layout',
      category: 'bio-septic',
      type: 'image',
      thumbnailUrl: '/bio_septic_system_3d.jpg',
      tag: 'Bio Septic Tank',
      location: 'Urapakkam Site',
      description: 'Cross-section 3D visual of multi-chamber anaerobic bio-media digestion system with clean effluent output.',
      capacity: '3,000L - 10,000L'
    },
    {
      id: 'gal-2',
      title: 'RCC Underground Bio Tank Site Lowering',
      category: 'installation',
      type: 'image',
      thumbnailUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
      tag: 'RCC Concrete',
      location: 'Chengalpattu Villa',
      description: 'Heavy crane positioning pre-cast RCC reinforced bio septic tank unit for residential driveways.',
      capacity: '5,000 Litres'
    },
    {
      id: 'gal-3',
      title: 'FRP Fiberglass Digester Tank Inspection',
      category: 'bio-septic',
      type: 'image',
      thumbnailUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      tag: 'FRP Fiberglass',
      location: 'Kanchipuram Complex',
      description: 'Corrosion-proof lightweight FRP bio tank installed in high groundwater table terrain.',
      capacity: '2,500 Litres'
    },
    {
      id: 'gal-4',
      title: 'Commercial Sewage Treatment Plant (STP) Operational Walkthrough',
      category: 'videos',
      type: 'video',
      thumbnailUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      tag: 'Video Demo',
      location: 'Padappai Industrial Hub',
      description: 'Video walkthrough demonstrating air blower aeration and multi-stage media filtration in active STP unit.',
      capacity: '25 KLD Capacity'
    },
    {
      id: 'gal-5',
      title: 'Decentralized STP Aeration Tank & Biological Filter',
      category: 'stp',
      type: 'image',
      thumbnailUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
      tag: 'STP Plant',
      location: 'Guduvanchery Apartments',
      description: 'Active biological filter beds producing recycled water suitable for gardening and flushing.',
      capacity: '50 KLD Unit'
    },
    {
      id: 'gal-6',
      title: 'Turnkey Excavation & Underground Piping Connection',
      category: 'installation',
      type: 'image',
      thumbnailUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      tag: 'Installation',
      location: 'Vandalur Residential',
      description: 'Seamless inflow pipe connection from household drainage directly into anaerobic digestion chamber.',
      capacity: '1,500 Litres'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-brand-blueSoft text-brand-dark relative border-b border-brand-blueBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optional Header Title Block */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span className="text-xs font-extrabold uppercase tracking-wider">PROJECT MEDIA & SITE VISUALS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
              Installation <span className="text-brand-blue">Gallery & Demos</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted mt-3 leading-relaxed font-medium">
              Explore real site photos, RCC tank installations, FRP fiberglass digesters, and STP operational walkthrough videos across Tamil Nadu.
            </p>
          </div>
        )}

        {/* Future Admin Panel CMS Upload Sync Badge */}
        <div className="mb-10 p-4 rounded-2xl bg-white border border-brand-blueBorder shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-blue font-extrabold text-xs">
              ☁️ CMS READY
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-brand-dark">Admin Media Upload System Integrated</h4>
              <p className="text-xs text-brand-muted font-medium">
                Media gallery is structured to auto-sync with your future Admin Panel for easy photo & video uploads.
              </p>
            </div>
          </div>
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-brand-blueSoft text-brand-blue text-xs font-bold border border-brand-blueBorder">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Admin Portal Ready</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Visuals' },
            { id: 'bio-septic', label: 'Bio Septic Tanks' },
            { id: 'stp', label: 'STP Plants' },
            { id: 'installation', label: 'Site Installations' },
            { id: 'videos', label: 'Video Walkthroughs' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                activeTab === tab.id
                  ? 'bg-brand-blue text-white border-brand-blue shadow-md'
                  : 'bg-white text-brand-dark border-brand-blueBorder hover:bg-brand-blueSoft'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-brand-blueBorder shadow-md hover:shadow-2xl hover:border-brand-blue transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Badge Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-blue text-[11px] font-extrabold shadow-sm border border-brand-blueBorder">
                  {item.type === 'video' ? <Film className="w-3.5 h-3.5 text-red-500" /> : <ImageIcon className="w-3.5 h-3.5 text-brand-blue" />}
                  <span>{item.tag}</span>
                </div>

                {/* Video Play Overlay */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-brand-blue/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-0.5 fill-current" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] text-[#00D2FF] font-bold block">{item.location}</span>
                  <span className="text-xs font-semibold text-slate-200">{item.capacity}</span>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-brand-dark group-hover:text-brand-blue transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-muted mt-1.5 leading-relaxed line-clamp-2 font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-brand-blue font-bold border-t border-brand-blueBorder/60">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                    <span>Verified Installation</span>
                  </span>
                  <span className="inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>View Media</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox Popup for Photo/Video Preview */}
        {selectedMedia && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fadeIn">
            <div className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full border border-brand-blueBorder shadow-2xl relative animate-scaleUp">
              
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 sm:h-96 bg-slate-950 flex items-center justify-center">
                <img
                  src={selectedMedia.thumbnailUrl}
                  alt={selectedMedia.title}
                  className="w-full h-full object-cover"
                />
                {selectedMedia.type === 'video' && (
                  <div className="absolute inset-0 bg-slate-950/40 flex flex-col items-center justify-center text-white space-y-3">
                    <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl">
                      <Play className="w-8 h-8 ml-1 fill-current" />
                    </div>
                    <span className="text-xs font-bold bg-slate-900/80 px-4 py-1.5 rounded-full border border-white/20">
                      Sample Walkthrough Video Player
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-brand-blueBorder pb-3">
                  <div>
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">{selectedMedia.tag} • {selectedMedia.location}</span>
                    <h3 className="font-display font-extrabold text-xl text-brand-dark mt-0.5">{selectedMedia.title}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-blueSoft text-brand-blue text-xs font-bold border border-brand-blueBorder">
                    {selectedMedia.capacity}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-medium">
                  {selectedMedia.description}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-brand-green font-bold flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Tested & Certified by NSR Environmental Engineering</span>
                  </div>
                  {onOpenQuoteModal && (
                    <button
                      onClick={() => {
                        setSelectedMedia(null);
                        onOpenQuoteModal(`Enquiry about ${selectedMedia.title}`);
                      }}
                      className="px-5 py-2.5 bg-brand-blue hover:bg-brand-blueDark text-white font-bold text-xs rounded-xl shadow-md"
                    >
                      Request Similar Installation
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
