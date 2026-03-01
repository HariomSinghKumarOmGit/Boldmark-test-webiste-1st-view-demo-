import React, { useEffect } from 'react';

export default function UnicornHero() {
  useEffect(() => {
    const initUnicorn = () => {
      if (window.UnicornStudio) {
        window.UnicornStudio.init();
      }
    };

    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js';
      script.onload = () => {
        initUnicorn();
      };
      document.body.appendChild(script);
    } else {
      initUnicorn();
    }
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div
        className="unicorn-wrapper w-full h-full"
        data-us-project="W8jdnPlbnEXtUUNZAVsz"
      ></div>
      {/* The water div from the user's example */}
      <div className="absolute bottom-0 h-[80px] left-0 right-0 bg-cyan-400 z-[500000000]"></div>
    </div>
  );
}
