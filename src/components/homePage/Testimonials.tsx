import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="w-full bg-black mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 items-start text-left py-10">
      <div className="flex flex-col gap-2 w-full max-w-[1273px]">
        <p className="font-extrabold text-4xl sm:text-5xl text-yellow">Testimonials</p>
        <h2 className="font-bold text-3xl sm:text-4xl text-white">What Our Clients Say</h2>
      </div>

      <div className="relative bg-white shadow-lg rounded-xl p-4 sm:p-6 w-full max-w-[90%] sm:max-w-[600px] mx-auto flex flex-col items-center gap-4">
       \
        <div className="absolute -top-10 sm:-top-12 w-20 sm:w-24 h-20 sm:h-24 overflow-hidden rounded-full border-4 border-white">
          <Image src="/assets/Hero8Face.png" alt="Client Face" width={96} height={96} className="object-cover" />
        </div>

        <div className="mt-10 sm:mt-12">
          <Image src="/assets/Quotes.png" alt="Quotes" width={40} height={40} />
        </div>

        <p className="font-helvetica text-sm sm:text-base text-gray-700 leading-relaxed max-w-[90%] sm:max-w-[500px] text-center">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.&quot;
        </p>

        <div className="flex flex-col items-center gap-2">
          
          <p className="font-helvetica font-bold text-lg sm:text-xl text-primary">Alamin Hasan</p>
          <p className="text-xs sm:text-sm text-gray-500">Food Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
