
import React, { useState } from 'react';
import { DEMO_EMAIL, ABOUT_CONTENT } from '../constants';

const DemoSubmission: React.FC = () => {
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    demoLink: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden bg-[#050505]">
      {/* Background Layer - Fixed for consistent sizing */}
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

      <div className="relative z-20 w-full max-w-3xl mx-auto px-6 pt-40 pb-24 animate-fadeIn">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 uppercase tracking-tighter">
            Send Your Demo
          </h2>
          <div className="inline-block bg-zinc-900/40 border border-white/10 px-6 py-4 rounded-sm text-left backdrop-blur-md">
            <p className="text-xs text-white/50 tracking-widest uppercase mb-2 font-bold">Important Notes:</p>
            <ul className="text-xs text-white/40 space-y-1 list-disc list-inside">
              <li>Private SoundCloud / Dropbox links only.</li>
              <li>Unsolicited files / attachments will not be accepted.</li>
              <li>Ensure tracks are downloadable for full review.</li>
            </ul>
          </div>
        </header>

        {submitted ? (
          <div className="bg-green-900/10 border border-green-500/20 p-12 text-center animate-fadeIn backdrop-blur-md">
            <h3 className="text-xl font-heading mb-4 text-emerald-400">Submission Received</h3>
            <p className="text-white/50 mb-6">Our A&R team will review your demo shortly. Thank you for your interest in THE GRID Records.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-xs tracking-widest uppercase border-b border-white"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 block">Artist / Project Name</label>
                <input
                  required
                  type="text"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleChange}
                  placeholder="Your artist name"
                  className="w-full bg-zinc-900/50 border border-white/5 p-4 focus:border-white/20 outline-none transition-all placeholder:text-white/10 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 block">Email Address</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-zinc-900/50 border border-white/5 p-4 focus:border-white/20 outline-none transition-all placeholder:text-white/10 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 block">Demo Link (SoundCloud / Private)</label>
              <input
                required
                type="url"
                name="demoLink"
                value={formData.demoLink}
                onChange={handleChange}
                placeholder="https://soundcloud.com/..."
                className="w-full bg-zinc-900/50 border border-white/5 p-4 focus:border-white/20 outline-none transition-all placeholder:text-white/10 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/40 block">Short Message / Description</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us a bit about your project..."
                className="w-full bg-zinc-900/50 border border-white/5 p-4 focus:border-white/20 outline-none transition-all placeholder:text-white/10 text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-white text-black text-xs font-bold tracking-[0.3em] uppercase hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Submit Demo
            </button>
            
            <p className="text-center text-[10px] text-white/20 uppercase tracking-widest">
              Direct Inquiries: <a href={`mailto:${DEMO_EMAIL}`} className="hover:text-white transition-colors">{DEMO_EMAIL}</a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default DemoSubmission;
