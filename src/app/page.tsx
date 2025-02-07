import AboutUs from '@/components/homePage/AboutUs';
import HomePageHero from '@/components/homePage/HomePageHero';
import IconsBoard from '@/components/homePage/IconsBoard';
import Testimonials from '@/components/homePage/Testimonials';
import React from 'react';


const Home = () => {
  return (
    <main>
      <HomePageHero />
      <AboutUs />
      <IconsBoard />
      <Testimonials />
    </main>
  )
}

export default Home;
