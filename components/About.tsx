
import React from 'react';
import { ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Layer - Fixed to ensure consistent alignment and size */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-[#050505] z-10"></div>
        <img
          src={ABOUT_CONTENT.imageUrl}
          alt="Background"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 pt-40 pb-24 animate-fadeIn">
        <header className="mb-12 text-center md:text-left">
          <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase mb-4 block font-mono">
            Artist Profile
          </span>
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter leading-none">
            {ABOUT_CONTENT.title}
          </h2>
          <div className="h-px w-24 bg-white/20 mt-8 mb-4 hidden md:block"></div>
        </header>

        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-8 text-white/80 leading-relaxed text-lg md:text-xl font-light">
            {ABOUT_CONTENT.bio.split('\n\n').map((paragraph, idx) => (
              <p 
                key={idx} 
                className="transition-all hover:text-white duration-500"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Info Bars */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-12 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase font-mono">Current Location</span>
            <span className="text-sm tracking-widest text-white/60 flex items-center gap-2">
              Muscat, Oman <span>🇴🇲</span>
            </span>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase font-mono">Core Sound</span>
            <span className="text-sm tracking-widest text-white/60">Melodic Techno</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default About;
