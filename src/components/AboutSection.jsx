import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScroll, useTransform, useMotionValueEvent, useSpring } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 240;

export default function AboutSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const indexStr = i.toString().padStart(3, '0');
      img.src = `/logoAnimate/ezgif-frame-${indexStr}.jpg`;
      img.onload = () => {
        loadedCount++;
        // Draw the first frame when ready
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          canvasRef.current.width = img.width || 1920;
          canvasRef.current.height = img.height || 1080;
          ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Apply spring for smooth interpolation (prevents stuttering)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    mass: 0.1
  });

  // Map progress (0 to 1) to frame index (1 to 240)
  const frameIndex = useTransform(smoothProgress, [0, 1], [1, FRAME_COUNT]);

  // Keep track of time for 30fps throttling constraint
  const lastDrawTimeRef = useRef(0);

  // Draw current frame to canvas on every scroll tick
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    if (!canvasRef.current || images.length === 0) return;
    
    // Throttle canvas draw to ~30 FPS
    const now = performance.now();
    if (now - lastDrawTimeRef.current < 33) return;
    lastDrawTimeRef.current = now;

    let currentIndex = Math.floor(latest) - 1;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= FRAME_COUNT) currentIndex = FRAME_COUNT - 1;

    const img = images[currentIndex];
    if (img && img.complete) {
      const ctx = canvasRef.current.getContext('2d');
      if (canvasRef.current.width !== img.width && img.width > 0) {
        canvasRef.current.width = img.width;
        canvasRef.current.height = img.height;
      }
      ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  });

  useGSAP(() => {
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom 20%',
        scrub: true,
        // toggleActions: 'play none none reverse',
      },
      // y: 50,
      opacity: 0,
      // duration: 1,
      // ease: 'power3.out',
    });

    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom 20%',
        // toggleActions: 'play none none reverse',
      },
      // scale: 0.8,
      opacity: 0,
      // duration: 1.2,
      // ease: 'back.out(1.7)',
    });
  }, { scope: containerRef });
  
  gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top middle ',
      end: 'bottom 20%',
    },
  }).to(imgRef.current, {
    // scale: 0.8,
    opacity: 1,
    duration: 8,
    ease: 'easeinout',
  })

  return (
    <>
    <div className="absolute bottom-0 h-[80px] left-0 right-0 bg-linear-to-b from-[#16251c] to-[#000000] z-100000000"></div>
    <div className="min-h-screen bg-black text-white text-base md:text-2xl px-4 md:px-8 leading-relaxed">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quaerat hic, amet rem eveniet ea magni sunt temporibus, commodi eos illum magnam perspiciatis assumenda? Repellat voluptatum quos blanditiis cupiditate, eum provident velit mollitia adipisci! Rem animi rerum sit nulla illo consectetur nihil, vero, modi dolorum facere necessitatibus. Sed nam nobis quidem dolorum minus similique libero quos in hic facere temporibus dignissimos, omnis beatae eaque aliquam debitis autem! Eveniet libero corporis atque eos velit consectetur, illo neque accusamus deleniti ab, a sit, molestias ut quis voluptas excepturi minima. Qui facilis consectetur expedita, voluptates similique blanditiis quod repellendus itaque voluptatum, veritatis iste sunt accusantium quas aliquid quos, dicta repudiandae omnis ullam id nostrum sapiente assumenda. Voluptates explicabo deserunt, ipsum atque suscipit quod assumenda laborum aut eum nostrum repudiandae saepe vero. Hic minus dignissimos, fugit labore incidunt, laudantium placeat consequatur aperiam sunt omnis, ad quam! Ipsa, obcaecati labore ducimus maiores quas cumque facilis libero, aliquam architecto sint nesciunt dolore ut molestiae amet voluptatem omnis tenetur? Vel, autem praesentium nesciunt illum dolorem mollitia veniam id itaque cum nihil iusto nisi fugit impedit assumenda in earum necessitatibus molestias! Doloremque, fugiat! Vitae itaque, deleniti iusto quidem delectus error harum eius aperiam sunt voluptates velit fugit mollitia quos quisquam nisi, tenetur ullam ipsam explicabo autem, id earum labore veniam unde adipisci. Doloribus delectus dolores saepe dolorem, nostrum natus non quod porro perspiciatis dolore totam esse unde adipisci iste mollitia nemo sequi amet quas dolor dolorum neque. Obcaecati voluptatum voluptas vel, corrupti, officiis esse incidunt est porro asperiores, perferendis iusto? Natus, hic, quisquam culpa quaerat cum unde incidunt possimus voluptatem sequi blanditiis odit reprehenderit recusandae quia saepe, repellat error beatae quasi necessitatibus tempore nesciunt dolorem totam quas ducimus? Ut odio ipsum accusantium, necessitatibus quae itaque voluptatibus neque possimus rerum perferendis ipsam reprehenderit aliquam natus officiis quas quaerat tempore dolor sapiente delectus! Commodi ut doloremque, aliquid exercitationem magnam reprehenderit perferendis, laborum itaque deleniti incidunt dolorem adipisci assumenda repellendus odit architecto beatae deserunt voluptates facere. Labore facilis minima vero tempora totam ipsam similique nobis inventore voluptate exercitationem. Quibusdam, enim. Magni amet saepe distinctio labore excepturi sed, laboriosam inventore rerum, vel quam quaerat repellendus veniam ipsa. Aut iusto illo sapiente iure suscipit a assumenda beatae, doloremque sunt quae, amet, reprehenderit sint voluptatum recusandae eaque. Dolores laborum ipsam ea ad animi, aliquam officiis laudantium quas aut. Quidem deserunt vitae ipsum magni non mollitia error atque libero dolores doloribus officia unde reprehenderit, nulla veniam eaque suscipit earum nemo doloremque! Dolorum non deleniti quam et ab. Ducimus quos et, animi aliquid adipisci iste aut vitae ut repellat architecto eligendi ullam, optio ex! Temporibus corporis beatae tenetur, atque provident voluptates autem sed aliquam excepturi id non quidem est culpa eveniet rerum vero expedita eligendi iusto.
    </div>
    <div ref={containerRef} className="relative w-full  bg-black h-[400vh]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* <div className="absolute bottom-0 h-[80px] left-0 right-0 bg-linear-to-b from-[#16251c] to-[#000000] z-50 pointer-events-none"></div> */}

        <div className="logo animation w-full h-full relative" ref={imgRef}>
          <canvas ref={canvasRef} className="w-full h-full object-cover" />
        </div>
        
        {/* Hidden div just to bind textRef for avoiding GSAP warnings */}
        <div ref={textRef} className="hidden">hello dear</div>
      </div>
    </div>
    </>
  );
}
