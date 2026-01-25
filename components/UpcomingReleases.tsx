
import React from 'react';
import { UPCOMING_RELEASES } from '../constants';

const UpcomingReleases: React.FC = () => {
  if (UPCOMING_RELEASES.length === 0) return null;

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-heading font-bold mb-8 uppercase tracking-widest text-white/90 flex items-center gap-4">
        Upcoming Releases
        <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {UPCOMING_RELEASES.map((track) => (
          <div 
            key={track.id} 
            className="bg-zinc-900/40 border border-white/5 p-8 group hover:border-white/20 transition-all duration-500 rounded-sm"
          >
            <div className="flex flex-col h-full">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] block mb-2">
                {track.releaseDate}
              </span>
              <h3 className="text-2xl font-heading font-bold mb-2">{track.title}</h3>
              <p className="text-base text-white/50 tracking-wide mb-6">{track.artist}</p>
              
              <div className="mt-auto">
                <div className="inline-block px-3 py-1 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-white/40">
                  Label: {track.label}
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.3em]">Stay tuned for release details</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingReleases;
