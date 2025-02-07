"use client";
import React from 'react';
import Link from 'next/link';



import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";



const TopHeader = () => {
  return (
    <div className='bg-yellow border-b-2 border-black'>
      <div className='container py-2'>
        <div className='flex justify-between items-center'>
            <div className='gap-2 hidden lg:flex'>
                <Link href="#" className="hover:text-black transition"><FaFacebookF size={20} /></Link>
                <Link href="#" className="hover:text-black transition"><FaTwitter size={20} /></Link>
                <Link href="#" className="hover:text-black transition"><FaInstagram size={20} /></Link>
                <Link href="#" className="hover:text-black transition"><FaYoutube size={20} /></Link>
                <Link href="#" className="hover:text-black transition"><FaPinterest size={20} /></Link>
            </div>

            <div className='text-black text-2xl'>
                <p className='font-bold'>Food that makes you say WOW</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
