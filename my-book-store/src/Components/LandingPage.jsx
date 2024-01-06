import React from 'react';
import NavBar from './NavBar';
import ImageSlider from './ImageSlider';
import About from './About';
import BestSeller from './BestSeller';
import Categories from './Categories';
import GetInTouch from './GetInTouch';
import NewArrivals from './NewArrivals';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div id='slider'><ImageSlider /></div>
      <div id='about'><About /></div>
      <div id='best-seller'><BestSeller /></div>
      <div id='categories'><Categories /></div>
      <div id='get-in-touch'><GetInTouch /></div>
      <div id='new-arrivals'><NewArrivals /></div>
      <div id='testimonial'><Testimonial /></div>
      <div id='contact-us'><ContactUs /></div>
      <div id='footer'><Footer /></div>
    </>
  );
}

export default LandingPage;
