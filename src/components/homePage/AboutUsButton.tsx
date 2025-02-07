"use client";
import Link from "next/link";

const AboutExplore = () => {
    return (
      <div>
        <button className="mt-6 bg-primary text-white font-semibold text-lg px-8 py-3 rounded-full transition duration-300 hover:bg-orange">
             <Link href="/About">Read More</Link>
       </button>
      </div>
    );
  };
  
  export default AboutExplore;