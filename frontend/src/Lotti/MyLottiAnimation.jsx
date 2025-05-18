import React, { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../Lotti/Animation - 1747542074470 (1).json';

const MyLottiAnimation = () => {
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full min-w-0 -z-10 bg-black overflow-hidden"
    >
      {isMounted && (
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
            animationData={animationData}
            loop
            autoplay
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default MyLottiAnimation;
