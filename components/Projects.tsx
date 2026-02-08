import React, { useEffect, useRef, useState } from 'react';
import { SectionId, Project } from '../types.ts';
import { PROJECTS } from '../constants.ts';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project; idx: number; isVisible: boolean }> = ({ project, idx, isVisible }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const hasMultipleImages = project.imageUrls.length > 1;

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % project.imageUrls.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + project.imageUrls.length) % project.imageUrls.length);
  };

  return (
    <div 
      className={`group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 flex flex-col transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        {/* Carousel Image */}
        <img 
          src={project.imageUrls[currentIdx]} 
          alt={`${project.title} - image ${currentIdx + 1}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Carousel Controls */}
        {hasMultipleImages && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 bg-zinc-950/60 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent-500 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-zinc-950/60 backdrop-blur-md text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent-500 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {project.imageUrls.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIdx ? 'bg-accent-500 w-4' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 pointer-events-none"></div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-500 transition-colors">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 bg-zinc-800/50 rounded border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-800">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
              <Github size={16} />
              <span>Source</span>
            </a>
          ) : (
             <div className="w-4"></div>
          )}
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-accent-500 hover:text-accent-400 font-bold transition-colors">
              <span>View Live</span>
              <ExternalLink size={16} />
            </a>
          ) : (
            <span className="text-xs text-zinc-600 italic">Work in progress</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={SectionId.PROJECTS} 
      ref={sectionRef}
      className="py-24 bg-zinc-900/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
            <div className="w-16 h-1 bg-accent-500 rounded-full"></div>
          </div>
          <p className="text-zinc-400 max-w-md text-sm md:text-right leading-relaxed">
            A showcase of my recent coding projects and automated workflows, from AI chatbots to system integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;