import AboutUs from '@/components/homePage/AboutUs';
import HomePageHero from '@/components/homePage/HomePageHero';

import Testimonials from '@/components/homePage/Testimonials';
import React from 'react';


const Home = () => {
  return (
    <main>
      <HomePageHero />
      <AboutUs />
   
      <Testimonials />
    </main>
  )
}

export default Home;
