import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const MyLottiAnimation = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    let anim;

    import('../Lotti/Animation - 1747542074470 (1).json').then((data) => {
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'canvas', // ← much faster than SVG
        loop: true,
        autoplay: true,
        animationData: data.default,
      });
    });

    return () => {
      if (anim) anim.destroy();
    };
  }, []);

  if (isMobile) return null;

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
