import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, buildWhatsAppLink } from '../data/companyData';
import { MapPin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FeaturedProjectsProps {
  onOpenQuoteModal?: (title?: string) => void;
  showAll?: boolean;
  showHeader?: boolean;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ showAll = false, showHeader = true }) => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Industrial'>('All');

  const filteredProjects = PROJECTS.filter(p => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  const displayList = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-brand-blueSoft text-brand-dark relative border-b border-brand-blueBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header with Mild Background Image Overlay */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 p-8 sm:p-10 rounded-3xl section-header-bg border border-brand-blueBorder shadow-md space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-brand-blueBorder text-brand-blue shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-xs font-extrabold uppercase tracking-wider">SELECTED INSTALLATIONS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight">
              Featured <span className="text-brand-blue">Projects</span> & Installations
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed max-w-2xl mx-auto font-medium">
              Explore turnkey bio septic tank installations across residential villas, commercial complexes, and industrial sites in Tamil Nadu.
            </p>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {(['All', 'Residential', 'Commercial', 'Industrial'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20'
                  : 'bg-white text-brand-black hover:bg-brand-soft border border-brand-soft'
              }`}
            >
              {cat} Projects
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayList.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white border border-brand-soft overflow-hidden shadow-lg hover:shadow-2xl hover:border-brand-blue/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-brand-dark/90 text-brand-blueLight text-[11px] font-bold px-3 py-1 rounded-full border border-brand-blue/30 backdrop-blur-md">
                    {project.category}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-white block flex items-center">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-brand-greenAccent" />
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-xl text-brand-black group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="inline-block bg-brand-soft/80 text-brand-blueDark text-xs font-semibold px-2.5 py-1 rounded-lg">
                    ⚙️ {project.capacity}
                  </div>

                  <p className="text-xs text-brand-muted leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-brand-soft">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-[11px] text-brand-black font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <a
                  href={buildWhatsAppLink({
                    requirement: `Enquiry about project: ${project.title}`,
                    name: "Website Visitor",
                    phone: "",
                    message: `Hi NSR Enterprises, I am interested in a similar setup like your "${project.title}" (${project.capacity}) in ${project.location}.`
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-brand-blue hover:bg-brand-blueDark rounded-xl transition-all flex items-center justify-center space-x-2 shadow-md"
                >
                  <span>Enquire Similar Setup via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button on Home */}
        {!showAll && (
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-dark hover:bg-brand-blue text-white font-bold text-xs rounded-xl shadow-lg transition-all"
            >
              <span>Explore All Installation Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
