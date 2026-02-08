import React, { useState, useEffect } from 'react';
import { SectionId } from '../types.ts';
import { RESUME_URL } from '../constants.ts';
import { ArrowRight, Download } from 'lucide-react';

const ROTATING_TEXTS = [
  "Frontend Development",
  "Backend Integration",
  "Workflow Automation"
];

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent-400/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content: Text */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-accent-400 text-[10px] font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
              Open to Internships
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-none">
              Exploring <br />
              <span 
                className={`inline-block text-accent-500 transition-all duration-500 transform min-h-[1.2em] ${
                  isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                 {ROTATING_TEXTS[currentTextIndex]}
              </span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-lg mb-10 leading-relaxed font-light">
              Hi, I'm Martin. A university student dedicated to mastering the art of building scalable, 
              beautiful web applications. Bridging the gap between design and code.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-accent-600 text-white font-bold rounded-xl hover:bg-accent-500 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto shadow-xl shadow-accent-600/20"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold rounded-xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Download className="w-5 h-5 text-accent-500" />
                Resume
              </a>
            </div>
          </div>

          {/* Right Content: Photo/Avatar with strictly controlled size */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-accent-500/20 rounded-[3rem] blur-3xl opacity-50"></div>
              
              {/* Image Container with fixed max size */}
              <div className="relative w-full max-w-[280px] sm:max-w-[360px] aspect-square rounded-[2.5rem] border-2 border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
                <img 
                  src="https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/profile.jpg?raw=true" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">Status</p>
                      <p className="text-xs text-white font-semibold">Available for hire</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
