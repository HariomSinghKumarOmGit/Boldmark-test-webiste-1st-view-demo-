import React, { useEffect, useRef, useState } from 'react';

const UNICORN_SDK_URL =
  'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js';

const HeroSection = () => {
  const wrapperRef = useRef(null);
  const sceneRef = useRef(null);
  const initAttempted = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we are on mobile (threshold: 768px like Tailwind's md)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // ONLY initialize Unicorn Studio if NOT on mobile
    if (isMobile) {
      // Clean up if it was previously initialized
      if (sceneRef.current && typeof sceneRef.current.destroy === 'function') {
        sceneRef.current.destroy();
        sceneRef.current = null;
      }
      return;
    }

    if (initAttempted.current) return;
    initAttempted.current = true;

    const initScene = async () => {
      if (!window.UnicornStudio || typeof window.UnicornStudio.addScene !== 'function') {
        await loadScript();
      }

      try {
        const scenes = await window.UnicornStudio.addScene({
          elementId: 'unicorn-hero',
          fps: 60,
          scale: 1,
          dpi: 1.5,
          projectId: 'W8jdnPlbnEXtUUNZAVsz',
          interactivity: {
            mouse: {
              disableMobile: true,
              disabled: false,
            },
          },
        });

        if (scenes) {
          sceneRef.current = scenes;
        }
      } catch (err) {
        console.warn('Unicorn Studio init error:', err);
      }
    };

    initScene();

    return () => {
      if (sceneRef.current && typeof sceneRef.current.destroy === 'function') {
        sceneRef.current.destroy();
        sceneRef.current = null;
      }
      initAttempted.current = false;
    };
  }, [isMobile]);

  return (
    <section className="bg-black w-full h-[80vh] md:h-screen relative overflow-hidden flex items-center justify-center">
      {/* Mobile Fallback: Boldmark Media text with green radial glow */}
      {isMobile && (
        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
          {/* The Green Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/20 rounded-full blur-[100px] pointer-events-none" />
          
          <h1 className="text-white text-5xl font-black tracking-tighter drop-shadow-2xl animate-in fade-in zoom-in duration-1000">
            Boldmark <span className="text-green-400">Media</span>
          </h1>
          <p className="mt-4 text-white/40 text-sm font-medium tracking-[0.2em] uppercase">
            Innovating Visual Excellence
          </p>
        </div>
      )}

      {/* Unicorn Scene (Desktop only) */}
      {!isMobile && (
        <div 
          className="w-full h-full"
          id="unicorn-hero"
          ref={wrapperRef}
        />
      )}
    </section>
  );
};

function loadScript() {
  return new Promise((resolve, reject) => {
    if (window.UnicornStudio && typeof window.UnicornStudio.addScene === 'function') {
      return resolve();
    }
    let script = document.querySelector(`script[src="${UNICORN_SDK_URL}"]`);
    if (script) {
      if (window.UnicornStudio && typeof window.UnicornStudio.addScene === 'function') {
        return resolve();
      }
      script.addEventListener('load', resolve);
      script.addEventListener('error', reject);
      return;
    }
    script = document.createElement('script');
    script.src = UNICORN_SDK_URL;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

export default HeroSection;