
import React from 'react';
import { UPCOMING_RELEASES, ABOUT_CONTENT } from '../constants';

const UpcomingPage: React.FC = () => {
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
        <header className="mb-16">
          <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase mb-4 block font-mono">
            Forward Planning
          </span>
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter leading-none mb-6">
            Upcoming
          </h2>
          <p className="text-white/40 tracking-wider max-w-xl">
            A glimpse into the future of sound. Currently in development and scheduled for release.
          </p>
          <div className="h-px w-24 bg-white/20 mt-8"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {UPCOMING_RELEASES.map((track, idx) => (
            <div 
              key={track.id} 
              className="bg-zinc-900/30 border border-white/5 p-10 group hover:border-white/20 transition-all duration-500 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
                    0{idx + 1}
                  </span>
                  <span className={`px-2 py-1 text-[8px] uppercase tracking-widest font-bold border rounded-full ${
                    track.status === 'Upcoming' 
                      ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/5' 
                      : 'border-orange-600/50 text-orange-500 bg-orange-600/5'
                  }`}>
                    {track.status}
                  </span>
                </div>
                
                <h3 className="text-3xl font-heading font-bold mb-3 group-hover:text-white transition-colors">{track.title}</h3>
                <p className="text-lg text-white/60 font-light mb-1">{track.artist}</p>
                <p className="text-xs text-white/30 tracking-[0.2em] uppercase mb-8">Label: {track.label}</p>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] block mb-1">Release Date</span>
                  <span className="text-sm text-white/80 tracking-widest uppercase">{track.releaseDate}</span>
                </div>
                
                {track.beatportUrl && track.beatportUrl !== '#' ? (
                  <a 
                    href={track.beatportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border border-white/10 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                  >
                    Beatport 
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <div className="flex items-center gap-2 px-6 py-3 border border-white/5 text-[10px] uppercase tracking-[0.2em] text-white/20 cursor-not-allowed select-none">
                    TBA
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Placeholder for future empty state or call to action */}
        <div className="mt-24 border-t border-white/5 pt-12 flex flex-col items-center">
          <p className="text-white/20 text-[10px] tracking-[0.5em] uppercase text-center mb-8">Stay updated for private previews</p>
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10 animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10 animate-pulse delay-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10 animate-pulse delay-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingPage;
