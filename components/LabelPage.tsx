
import React from 'react';
import { LABEL_INFO, ABOUT_CONTENT } from '../constants';

const LabelPage: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden">
      {/* Background Layer - Fixed for consistent sizing */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#050505] z-10"></div>
        <img
          src={ABOUT_CONTENT.imageUrl}
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-40 pb-24 animate-fadeIn">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase mb-4 block font-mono">
              Regional Powerhouse
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 uppercase leading-tight tracking-tighter">
              {LABEL_INFO.name}
            </h2>
            <div className="space-y-6 mb-12">
              {LABEL_INFO.details.map((detail, i) => (
                <div key={i} className="flex items-center gap-4 text-white/50 tracking-widest text-sm uppercase group">
                  <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-white/60 transition-colors"></span>
                  {detail}
                </div>
              ))}
            </div>
            <div className="h-px w-24 bg-white/20 mt-8 mb-4"></div>
          </div>

          <div className="bg-zinc-900/30 p-12 border border-white/5 backdrop-blur-md relative group rounded-sm">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-white/20 group-hover:border-white transition-all"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-white/20 group-hover:border-white transition-all"></div>
            
            <p className="text-xl md:text-2xl font-light italic leading-relaxed text-white/80">
              "{LABEL_INFO.mission}"
            </p>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-white/5 pt-16">
          <div className="group">
            <h4 className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-4 group-hover:text-white transition-colors">Innovation</h4>
            <p className="text-white/60 font-light text-sm tracking-wide">Setting new global standards in electronic sound.</p>
          </div>
          <div className="group">
            <h4 className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-4 group-hover:text-white transition-colors">Curation</h4>
            <p className="text-white/60 font-light text-sm tracking-wide">Meticulously selected Melodic Techno and progressive cuts.</p>
          </div>
          <div className="group">
            <h4 className="text-white/40 text-[10px] uppercase tracking-[0.4em] mb-4 group-hover:text-white transition-colors">Culture</h4>
            <p className="text-white/60 font-light text-sm tracking-wide">Elevating Middle Eastern artists onto the global stage.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabelPage;
