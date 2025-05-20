import React from 'react';
import Lottie from 'lottie-react';
import animationData from './react-lottie.json';

const MyLottiAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black z-[-1] overflow-hidden">
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-[300px] md:w-[400px] lg:w-[500px] aspect-square">
          <Lottie 
            animationData={animationData} 
            loop={true} 
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MyLottiAnimation;
