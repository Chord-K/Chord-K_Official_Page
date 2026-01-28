
import React from 'react';
import { RELEASES, ABOUT_CONTENT } from '../constants';
import { Release } from '../types';

const ReleaseCard: React.FC<{ release: Release; index: number }> = ({ release, index }) => {
  return (
    <div className="group border-b border-white/10 py-12 flex flex-col lg:flex-row lg:items-start justify-between gap-12 animate-fadeIn transition-all hover:bg-white/[0.02] px-4 -mx-4">
      <div className="flex-1">
        <span className="text-xs text-white/30 font-mono mb-4 block">
          RELEASE {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 group-hover:text-white transition-colors">
          {release.title}
        </h3>
        <p className="text-sm text-white/60 tracking-widest mb-1">
          {release.artist}
        </p>
        <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase mb-6">
          Label: {release.label}
        </p>
      </div>

      <div className="w-full lg:w-[450px] space-y-4">
        <div className="aspect-video lg:h-[300px] overflow-hidden rounded-sm bg-zinc-900 border border-white/5 transition-all group-hover:border-white/20">
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={release.soundcloudEmbedUrl}
            title={`${release.title} SoundCloud`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const ReleasesList: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-[#050505]">
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
          <h2 className="text-4xl md:text-7xl font-heading font-bold mb-4 uppercase tracking-tighter">
            Releases
          </h2>
          <p className="text-white/40 tracking-wider">
            Each release, a journey through sound.
          </p>
          <div className="h-px w-24 bg-white/20 mt-8"></div>
        </header>

        <div className="space-y-4 mb-32">
          <h2 className="text-xl font-heading font-bold mb-8 uppercase tracking-widest text-white/40 flex items-center gap-4">
            Released Tracks
            <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></span>
          </h2>
          {RELEASES.map((release, idx) => (
            <ReleaseCard key={release.id} release={release} index={idx} />
          ))}
        </div>

        <div className="mt-20 p-12 border border-dashed border-white/10 rounded-sm text-center backdrop-blur-sm bg-black/20">
          <p className="text-white/30 text-sm tracking-widest uppercase mb-4">Are you a producer?</p>
          <a
            href="#/demo"
            className="inline-block px-10 py-4 border border-white/20 hover:border-white transition-all text-xs tracking-widest uppercase"
          >
            Submit for THE GRID Records
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReleasesList;
