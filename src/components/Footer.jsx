import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111] text-gray-400 py-8 md:py-12 px-4 md:px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Company Name</h2>
          <p className="text-xs md:text-sm">Innovating the future, one step at a time.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>
      </div>
      <div className="mt-12 text-sm border-t border-gray-800 pt-6 w-full max-w-4xl text-center">
        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
}
