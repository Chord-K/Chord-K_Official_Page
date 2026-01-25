
import React from 'react';
import { ARTIST_NAME, LABEL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-heading font-bold text-lg tracking-widest uppercase">{ARTIST_NAME}</span>
          <span className="text-[10px] text-white/20 tracking-widest uppercase mt-1">
            © {currentYear} | {LABEL_INFO.name}
          </span>
        </div>

        <div className="flex space-x-8">
          <a href="#" className="text-[10px] text-white/30 uppercase tracking-widest hover:text-white transition-colors">Terms</a>
          <a href="#" className="text-[10px] text-white/30 uppercase tracking-widest hover:text-white transition-colors">Privacy</a>
          <a href="mailto:chordkofficial@gmail.com" className="text-[10px] text-white/30 uppercase tracking-widest hover:text-white transition-colors">Management</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
