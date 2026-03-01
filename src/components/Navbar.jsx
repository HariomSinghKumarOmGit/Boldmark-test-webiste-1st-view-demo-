import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div 
      className="
        fixed -top-1 left-1/2 -translate-x-1/2 
        w-[95%] max-w-5xl 
        px-4 md:px-6 py-3 
        rounded-2xl 
        bg-white/10 
        backdrop-blur-xl 
        border border-white/20 
        shadow-lg 
        flex items-center justify-between 
        z-[110000000]
        bg-linear-to-b from-[#16525067] to-[#1b9c9c63]
      "
    >
      {/* Logo */}
      <div className="text-white font-semibold h-10">
        <a href="/" className="hover:text-white transition">
          <img 
            src="/BoldMarkLogo.png" 
            alt="BoldMark Logo" 
            className="h-16 md:h-20 w-24 md:w-30 object-cover align-center pb-6 md:pb-10" 
          />
        </a>
      </div>

      {/* Desktop nav links */}
      <div className="hidden md:flex gap-6 text-white/80">
        <a href="#" className="hover:text-white transition">About</a>
        <a href="#" className="hover:text-white transition">Services</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </div>

      {/* Mobile hamburger button */}
      <button 
        className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px] group"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile menu drawer */}
      <div 
        className={`
          md:hidden absolute top-full left-0 right-0 mt-2 
          rounded-2xl overflow-hidden
          bg-black/70 backdrop-blur-xl border border-white/10
          transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${menuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <div className="flex flex-col items-center gap-4 py-6 text-white/90 text-lg">
          <a href="#" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#" className="hover:text-white transition" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </div>
  );
}
