"use client";

import { useState } from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Menu", label: "Menu" },
    { href: "/Blog", label: "Blog" },
    { href: "/OurChefs", label: "Chefs" },
    { href: "/About", label: "About" },
    { href: "/Contact", label: "Contact" },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search query:", searchQuery); 
  };

  return (
    <div className="bg-[#0D0D0D] text-white px-4 lg:px-0 border-b-2 border-gray-700">
      <div className="max-w-[1320px] flex justify-between items-center py-5 px-4 lg:px-0 mx-10">
       
        <div className="text-3xl font-bold text-primary font-helvetica">
          Food<span className="text-white">tuck</span>
        </div>

    
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors duration-300 text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>

      
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <GiHamburgerMenu className="w-6 h-6" />
          </button>
        </div>

     
        <form
          onSubmit={handleSearchSubmit}
          className={`lg:flex items-center relative hidden ${isMenuOpen ? "block" : "hidden"}`}
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="rounded-full bg-transparent border border-primary px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <IoSearch className="w-6 h-6 text-primary" />
          </button>
        </form>

        
        <div className="hidden lg:flex items-center gap-6">
          
          <Link href="/Cart" className="text-white hover:text-primary transition-colors duration-300">
            <IoCartOutline className="w-6 h-6" />
          </Link>

          
          <Link href="/Profile" className="text-white hover:text-primary transition-colors duration-300">
            <AiOutlineUser className="w-6 h-6" />
          </Link>
        </div>
      </div>

  
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} p-4 bg-[#0D0D0D]`}>
       
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-white hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

       
        <form
          onSubmit={handleSearchSubmit}
          className="relative mt-4 flex justify-center"
        >
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="rounded-full bg-transparent border border-primary px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary w-full"
          />
          <button type="submit" className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <IoSearch className="w-6 h-6 text-primary" />
          </button>
        </form>

       
        <div className="flex gap-6 mt-4 justify-center">
          <Link href="/Cart">
            <IoCartOutline className="w-6 h-6 text-white" />
          </Link>
          <Link href="/Profile">
            <AiOutlineUser className="w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
