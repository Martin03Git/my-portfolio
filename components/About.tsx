import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../types.ts';
import { ABOUT_ME } from '../constants.ts';

const About: React.FC = () => {
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
      id={SectionId.ABOUT} 
      ref={sectionRef}
      className="py-24 border-y border-zinc-900 bg-zinc-950"
    >
       <div className={`max-w-4xl mx-auto px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <img 
                src="https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/profile.jpg?raw=true" 
                alt="Martin"
                className="w-24 h-24 rounded-full border-4 border-zinc-900 p-1 object-cover shadow-xl ring-2 ring-accent-500/20"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">About Me</h2>
            <div className="w-16 h-1.5 bg-accent-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed text-center mb-16 font-light italic">
            "{ABOUT_ME}"
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
                { label: 'Years Learning', value: '1.5+' },
                { label: 'Projects Built', value: '7+' },
                { label: 'Experience', value: 'Junior' }
            ].map((stat, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center justify-center p-8 bg-zinc-900/30 rounded-3xl border border-zinc-800 hover:border-accent-500/30 transition-all group"
                >
                    <span className="text-4xl font-black text-white group-hover:text-accent-500 transition-colors">{stat.value}</span>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mt-3 font-bold">{stat.label}</span>
                </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default About;
