
import React from 'react';
import { Link } from 'react-router-dom';
import { ARTIST_NAME, TAGLINE, ABOUT_CONTENT } from '../constants';

const MusicWave: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 800 200"
        className="w-full max-w-4xl animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 Q100,20 200,100 T400,100 T600,100 T800,100"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          className="wave-path-1"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,100 Q100,20 200,100 T400,100 T600,100 T800,100;
              M0,100 Q100,180 200,100 T400,100 T600,100 T800,100;
              M0,100 Q100,20 200,100 T400,100 T600,100 T800,100
            "
          />
        </path>
        <path
          d="M0,100 Q100,180 200,100 T400,100 T600,100 T800,100"
          fill="none"
          stroke="white"
          strokeWidth="0.2"
          className="wave-path-2"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,100 Q100,180 200,100 T400,100 T600,100 T800,100;
              M0,100 Q100,20 200,100 T400,100 T600,100 T800,100;
              M0,100 Q100,180 200,100 T400,100 T600,100 T800,100
            "
          />
        </path>
      </svg>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background - Fixed to ensure consistent alignment and size across all pages */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-[#050505] z-10"></div>
        <img
          src={ABOUT_CONTENT.imageUrl}
          alt="Atmosphere"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="relative z-20 text-center px-6 animate-fadeIn">
        <div className="relative inline-block">
          <MusicWave />
          <h1 className="relative z-10 text-6xl md:text-9xl font-bold font-heading tracking-tighter mb-4 uppercase drop-shadow-2xl">
            {ARTIST_NAME}
          </h1>
        </div>
        
        <p className="text-lg md:text-2xl font-light tracking-[0.2em] text-white/60 mb-8 uppercase">
          Melodic Techno Producer
        </p>
        <p className="text-sm md:text-base italic text-white/40 max-w-lg mx-auto tracking-wide mb-12">
          "{TAGLINE}"
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link
            to="/releases"
            className="group relative px-8 py-3 overflow-hidden border border-white/20 transition-all hover:border-white"
          >
            <span className="relative z-10 text-xs tracking-widest uppercase">Latest Releases</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="absolute inset-0 z-20 flex items-center justify-center text-black text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">Latest Releases</span>
          </Link>
          <Link
            to="/demo"
            className="text-xs tracking-widest uppercase border-b border-transparent hover:border-white transition-all py-1 opacity-60 hover:opacity-100"
          >
            Submit Demos
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Home;
