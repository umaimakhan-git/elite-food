import React from 'react';
import Image from 'next/image';
const HeroIcon1 = "/assets/Icons/Hero5Icon1.png";
const HeroIcon2 = "/assets/Icons/Icon2.png";
const HeroIcon3 = "/assets/Icons/Hero5Icon3.png";
const HeroIcon4 = "/assets/Icons/Hero5Icon3.png";


const backGround = "/assets/Hero5Background.png";

const IconsBoard = () => {
  return (
    <div className="relative flex items-center h-auto bg-cover bg-center xl:h-[469px]" style={{ backgroundImage: `url(${backGround})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className='max-w-[1320px] mx-auto relative grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-[80px] p-6 z-10 text-center'>
        {[ 
          { icon: HeroIcon1, label: "Professional Chefs", number: "420" },
          { icon: HeroIcon2, label: "Items Of Food", number: "320" },
          { icon: HeroIcon3, label: "Years Of Experience", number: "30+" },
          { icon: HeroIcon4, label: "Happy Customers", number: "220" },
        ].map((item, index) => (
          <div key={index} className='flex flex-col gap-4 items-center'>
            <Image src={item.icon} alt={item.label} className="w-16 h-16" />
            <p className='text-2xl font-bold text-white'>{item.label}</p>
            <p className='text-2xl font-bold  text-white'>{item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsBoard;
