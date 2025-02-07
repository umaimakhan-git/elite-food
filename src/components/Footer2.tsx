"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
       
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} Good Food Good Mood..</p>
        </div>
        
     
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-gray-400 transition"><FaFacebookF size={20} /></Link>
          <Link href="#" className="hover:text-gray-400 transition"><FaTwitter size={20} /></Link>
          <Link href="#" className="hover:text-gray-400 transition"><FaInstagram size={20} /></Link>
          <Link href="#" className="hover:text-gray-400 transition"><FaYoutube size={20} /></Link>
          <Link href="#" className="hover:text-gray-400 transition"><FaPinterest size={20} /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
