import React from "react";
import Image from "next/image";
import ExploreMenu from "./ExploreMenuButton";

const HomePageHero = () => {
  return (
    <div className="relative w-full bg-black">
      
      <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
        <Image
          src="/assets/homehero.png"
          alt="Delicious Food"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        
        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <p className="text-yellow text-4xl md:text-4xl font-extrabold">
            Fresh, Fast & Delicious!
          </p>
          <h1 className="text-4xl md:text-4xl font-bold leading-tight font-helvetica mt-4">
            Experience <span className="text-primary">Speed & Quality</span> Like Never Before
          </h1>
          <p className="text-gray-300 text-lg font-inter mt-4">
            Taste the best flavors crafted with love and delivered with speed. Satisfy your cravings today!
          </p>
           <ExploreMenu />
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
