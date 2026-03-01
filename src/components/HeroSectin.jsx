import React, { useEffect, useRef } from 'react';

const UNICORN_SDK_URL =
  'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js';

const HeroSection = () => {
  const wrapperRef = useRef(null);
  const sceneRef = useRef(null);
  const initAttempted = useRef(false);

  useEffect(() => {
    // Guard against double-init in React StrictMode
    if (initAttempted.current) return;
    initAttempted.current = true;

    const initScene = async () => {
      // Wait for the SDK to be available
      if (!window.UnicornStudio || typeof window.UnicornStudio.addScene !== 'function') {
        await loadScript();
      }

      try {
        // Use the addScene API for explicit, per-element initialization
        const scenes = await window.UnicornStudio.addScene({
          elementId: 'unicorn-hero', // targets the div by its ID
          fps: 60,
          scale: 1,
          dpi: 1.5,
          projectId: 'W8jdnPlbnEXtUUNZAVsz',
          interactivity: {
            mouse: {
              disableMobile: false,
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
      // Clean up the scene when the component unmounts
      if (sceneRef.current && typeof sceneRef.current.destroy === 'function') {
        sceneRef.current.destroy();
        sceneRef.current = null;
      }
      initAttempted.current = false;
    };
  }, []);

  return (
    <section  style={styles.heroContainer}>
      <div 
        className=" relative "
        id="unicorn-hero"
        ref={wrapperRef}
        style={styles.unicornWrapper}
      />
    </section>
  );
};

/**
 * Loads the Unicorn Studio SDK script once.
 * Returns a promise that resolves when the script is ready.
 */
function loadScript() {
  return new Promise((resolve, reject) => {
    // If SDK already loaded, resolve immediately
    if (window.UnicornStudio && typeof window.UnicornStudio.addScene === 'function') {
      return resolve();
    }

    // Check if script tag already exists
    let script = document.querySelector(`script[src="${UNICORN_SDK_URL}"]`);

    if (script) {
      // Script tag exists but SDK may not be loaded yet – wait for it
      if (window.UnicornStudio && typeof window.UnicornStudio.addScene === 'function') {
        return resolve();
      }
      script.addEventListener('load', resolve);
      script.addEventListener('error', reject);
      return;
    }

    // Create and inject the script
    script = document.createElement('script');
    script.src = UNICORN_SDK_URL;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const styles = {
  heroContainer: {
    background: '#000',
    width: '100%',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
  },
  unicornWrapper: {
    width: '100%',
    height: '100%',
  },
};

export default HeroSection;