import React, { useEffect, useRef, useState, useMemo } from 'react';
import Lottie from 'lottie-react';
import lottie from 'lottie-web';
import animationData from '../Lotti/Animation - 1747542074470 (1).json';

const MyLottiAnimation = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Memoize animation data for react-lottie on mobile
  const memoizedAnimation = useMemo(() => animationData, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    let anim;

    anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'canvas', // faster on desktop
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      if (anim) anim.destroy();
    };
  }, []);

  if (isMobile) {
    // Use react-lottie on mobile for better compatibility
    return (
      <div
        className="fixed top-0 left-0 w-full h-full min-w-0 -z-10 bg-black overflow-hidden"
      >
        <div
          className="
            w-full h-full
            scale-[2.3]
            sm:scale-[1.2]
            md:scale-[1.4]
            lg:scale-[1.6]
            xl:scale-[1.8]
            2xl:scale-[2]
            transform origin-center
          "
        >
          <Lottie
            animationData={memoizedAnimation}
            loop
            autoplay
            className="w-full h-full object-contain pointer-events-none"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    );
  }

  // Desktop with lottie-web canvas renderer
  return (
    <div
      className="fixed top-0 left-0 w-full h-full min-w-0 -z-10 bg-black overflow-hidden"
    >
      <div
        ref={containerRef}
        className="
          w-full h-full
          scale-[2.3]
          sm:scale-[1.2]
          md:scale-[1.4]
          lg:scale-[1.6]
          xl:scale-[1.8]
          2xl:scale-[2]
          transform origin-center
        "
      />
    </div>
  );
};

export default MyLottiAnimation;
