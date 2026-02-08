import React, { useState, useEffect, useRef } from 'react';
import { SectionId } from '../types.ts';
import { Mail, MapPin, Send, Github, Linkedin, AtSign } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <section id={SectionId.CONTACT} ref={sectionRef} className="py-24 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-zinc-900 border border-zinc-800 text-white p-4 rounded-xl shadow-2xl flex items-start gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="text-amber-500 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-sm mb-1">Feature Unavailable</h4>
            <p className="text-sm text-zinc-400">The message feature is currently under development. Please contact me directly via email or social media.</p>
          </div>
          <button 
            onClick={() => setShowToast(false)}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Let's connect.</h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-lg">
              If you have a question or just want to discuss web technology, feel free to drop a message!
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-accent-500 border border-zinc-800 group-hover:border-accent-500/50 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:martinekaputrajoya@gmail.com" className="text-white hover:text-accent-500 transition-colors">
                    martinekaputrajoya@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-accent-500 border border-zinc-800 group-hover:border-accent-500/50 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white">Indonesia</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
               {[
                 { icon: <Github size={20} />, label: 'GitHub', url: 'https://github.com/Martin03Git/' },
                 { icon: <Linkedin size={20} />, label: 'LinkedIn', url: 'https://id.linkedin.com/in/martin-eka-putra-joya' },
                 { icon: <AtSign size={20} />, label: 'Threads', url: 'https://www.threads.com/@martiiiiiiin.dev' }
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href={social.url} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-accent-500 hover:border-accent-500/50 transition-all"
                   aria-label={social.label}
                 >
                   {social.icon}
                 </a>
               ))}
            </div>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className={`bg-zinc-900/30 p-8 sm:p-10 rounded-3xl border border-zinc-800 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-500 transition-all placeholder-zinc-700"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-500 transition-all placeholder-zinc-700"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent-500 transition-all resize-none placeholder-zinc-700"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent-600 text-white font-black py-5 rounded-xl hover:bg-accent-500 transition-all flex items-center justify-center gap-3 group shadow-lg shadow-accent-600/20"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
