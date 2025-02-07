import React from "react";
import { FaCheck } from "react-icons/fa";
import card1 from "../../../public/assets/Hero2 card1.png";
import card2 from "../../../public/assets/Hero2 card2.png";
import card3 from "../../../public/assets/Hero2 Card3.png";
import Image from "next/image";
import AboutUsButton from "./AboutUsButton";

const HeroSection2 = () => {
  return (
    <section className="bg-black text-white border-b py-24 px-6 xl:px-12">
      <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section - Text */}
        <div className="lg:w-1/2 w-full text-left space-y-6">
          <p className="text-yellow text-5xl font-extrabold">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            We <span className="text-yellow-500">Create the Best Foody Products</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Discover the art of culinary excellence with our team of professional chefs.
            We craft exquisite flavors and unforgettable dining experiences using the finest ingredients.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-lg text-gray-300">
              <FaCheck className="text-green-400 mr-3" /> Fresh & Organic Ingredients
            </li>
            <li className="flex items-center text-lg text-gray-300">
              <FaCheck className="text-green-400 mr-3" /> Expertly Crafted Dishes
            </li>
            <li className="flex items-center text-lg text-gray-300">
              <FaCheck className="text-green-400 mr-3" /> Unparalleled Dining Experience
            </li>
          </ul>
          <AboutUsButton />
        </div>

        
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image src={card1} alt="Culinary Art" className="w-full object-cover rounded-xl" />
          </div>
          <div className="flex gap-6 flex-col lg:flex-row">
            <div className="overflow-hidden rounded-xl shadow-lg w-full">
              <Image src={card2} alt="Exquisite Dishes" className="w-full object-cover rounded-xl" />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg w-full">
              <Image src={card3} alt="Fine Dining" className="w-full object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;