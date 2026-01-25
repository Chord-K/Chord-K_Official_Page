
import React from 'react';
import { SOCIAL_LINKS, CONTACT_EMAIL, ABOUT_CONTENT } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-[#050505]">
      {/* Background Layer - Fixed for consistent alignment and size */}
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

      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 pt-40 pb-24 text-center animate-fadeIn">
        <h2 className="text-5xl md:text-8xl font-heading font-bold mb-16 uppercase tracking-tighter">
          Contact
        </h2>

        <div className="mb-24">
          <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase mb-4">General Inquiries</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-2xl md:text-5xl font-light hover:text-white/60 transition-all border-b border-white/10 pb-4 inline-block tracking-tight"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-10 border border-white/5 hover:border-white/20 transition-all bg-zinc-900/20 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <p className="relative z-10 text-[10px] tracking-[0.5em] text-white/30 uppercase group-hover:text-white transition-colors">
                {social.platform}
              </p>
            </a>
          ))}
        </div>
        
        <div className="mt-32 pt-16 border-t border-white/5">
          <p className="text-white/20 text-[10px] tracking-widest uppercase">
            Designed for late-night systems and deep listening.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
