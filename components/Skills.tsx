import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../types.ts';
import { SKILLS } from '../constants.ts';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Layout': <Layout className="w-6 h-6" />,
  'Database': <Database className="w-6 h-6" />,
  'Terminal': <Terminal className="w-6 h-6" />,
  'Code2': <Code2 className="w-6 h-6" />,
};

const Skills: React.FC = () => {
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
      id={SectionId.SKILLS} 
      ref={sectionRef}
      className="py-24 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Stack</h2>
          <div className="w-16 h-1 bg-accent-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, idx) => (
            <div 
              key={idx} 
              className={`p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-accent-500/30 transition-all duration-500 group transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-accent-500 mb-6 group-hover:scale-110 transition-transform border border-zinc-800">
                {iconMap[category.icon] || <Code2 />}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-zinc-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent-500/50 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;