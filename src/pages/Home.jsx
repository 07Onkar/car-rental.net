import React from 'react'
import BookCar from "../components/BookCar";
import Hero from "../components/Hero";
import PlanTrip from '../components/PlanTrip';
import PickCar from '../components/PickCar';
import Banner from "../components/Banner"
import Testimonial from "../components/Testimonials"
import Faq from "../components/Faq"
import ChooseUs from '../components/ChooseUs';
import Download from '../components/Download';
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Hero/>
      <BookCar/>
      <PlanTrip/>
      <PickCar/>
      <Banner/>
      <ChooseUs/>
      <Testimonial/>
      <Faq/>
      <Download/>
      <Footer/>
    </>
  )
}

export default Home