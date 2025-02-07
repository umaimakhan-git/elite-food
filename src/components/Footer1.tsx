"use client";
import React from "react";
import Link from "next/link";


const Footer1 = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">
            <span className="text-yellow-500">Still Need Our Support</span>
          </h2>
          <p className="text-sm mt-2">Don&apos;t wait, make a smart &amp; logical quote here. It&apos;s pretty easy.</p>

        </div>
        <div className="flex w-full md:w-auto items-center space-x-2">
             <input 
              type="text" 
              placeholder="Enter Your Email" 
              className="bg-yellow-500 text-black py-3 px-6 rounded-l-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-600"
             />
           <button className="bg-gray-700 text-yellow-500 py-3 px-6 rounded-r-lg hover:bg-yellow-500 hover:text-gray-300 transition-colors duration-300 ease-in-out">
                Subscribe
              </button>
         </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
        <div>
          <h2 className="text-xl font-semibold">About Us</h2>
          <p className="text-sm mt-3 text-gray-400">We provide reliable and professional services worldwide.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Useful Links</h2>
          <ul className="mt-3 space-y-2">
            <li><Link href="#" className="hover:underline">About</Link></li>
            <li><Link href="#" className="hover:underline">News</Link></li>
            <li><Link href="#" className="hover:underline">Partner</Link></li>
            <li><Link href="#" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Help</h2>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        
      </div>

      
    </footer>
  );
};

export default Footer1;
