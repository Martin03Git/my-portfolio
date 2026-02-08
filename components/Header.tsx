import React, { useState, useEffect } from 'react';
import { SectionId } from '../types.ts';
import { Menu, X, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: SectionId.HOME, label: 'Home' },
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.SKILLS, label: 'Skills' },
    { id: SectionId.PROJECTS, label: 'Projects' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-row items-center justify-between">
        {/* Brand/Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
          onClick={() => scrollToSection(SectionId.HOME)}
        >
          <div className="relative">
            <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-accent-500/50 transition-colors">
              <Terminal className="w-5 h-5 text-accent-500" />
            </div>
            <img 
              src="https://github.com/Martin03Git/public-foto/blob/main/martin-portfolio/profile.jpg?raw=true" 
              alt="Avatar"
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full border border-zinc-950 object-cover shadow-sm"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            Martin<span className="text-accent-500">.dev</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-zinc-400 hover:text-accent-500 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a 
            href="#" 
            className="ml-4 px-5 py-2.5 bg-accent-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-accent-500 transition-all shadow-lg shadow-accent-600/20"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 p-8 flex flex-col gap-6 shadow-2xl animate-fade-in-up">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-zinc-300 hover:text-accent-500 text-xl font-semibold border-b border-zinc-900 pb-2"
            >
              {link.label}
            </button>
          ))}
          <a 
            href="#" 
            className="mt-2 w-full text-center py-4 bg-accent-600 text-white font-bold rounded-xl"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
