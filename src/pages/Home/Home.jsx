import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Service from '../../components/Service/Service';
import Banner from '../../components/Banner/Banner';
import AppStore from '../../components/AppStore/AppStore';
import Testimonial from '../../components/Testimonial/Testimonial';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <AppStore />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;