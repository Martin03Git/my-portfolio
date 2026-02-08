import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
        <div className="text-zinc-600 text-sm font-medium">
          © {new Date().getFullYear()} Martin Dev. Built with passion.
        </div>
        <div className="flex gap-8">
            <a href="https://github.com/Martin03Git/" className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">GitHub</a>
            <a href="https://id.linkedin.com/in/martin-eka-putra-joya" className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">LinkedIn</a>
            <a href="mailto:martinekaputrajoya@gmail.com" className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
