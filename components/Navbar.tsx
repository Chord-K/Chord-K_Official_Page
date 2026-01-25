
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ARTIST_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Releases', path: '/releases' },
    { name: 'Upcoming', path: '/upcoming' },
    { name: 'Label', path: '/label' },
    { name: 'Demos', path: '/demo' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-widest font-heading hover:opacity-70 transition-opacity uppercase">
          {ARTIST_NAME}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] tracking-[0.3em] uppercase transition-all hover:text-white ${location.pathname === link.path ? 'text-white border-b border-white/40 pb-1' : 'text-white/40'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black transition-transform duration-500 flex flex-col items-center justify-center space-y-8 z-40 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-2xl font-heading font-bold uppercase tracking-tighter ${location.pathname === link.path ? 'text-white' : 'text-white/40'}`}
          >
            {link.name}
          </Link>
        ))}
        <div className="pt-12">
          <Link 
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[10px] tracking-[0.5em] text-white/20 uppercase"
          >
            {ARTIST_NAME}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
