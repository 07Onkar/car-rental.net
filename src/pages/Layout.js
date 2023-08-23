import React, { Component } from "react";
import { Hero } from "../components/Hero";
import BookCar from "../components/BookCar";
import ScrollTop from "../components/ScrollTop";
import { PlanTrip } from "../components/PlanTrip";
import { PickCar } from "../components/PickCar";
import { Banner } from "../components/Banner";
import { Testimonials } from "../components/Testimonials";
import { Faq } from "../components/Faq";
import { Download } from "../components/Download";
import { Footer } from "../components/Footer";
import { NavMenu } from "../components/NavMenu";
export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <>
        <NavMenu/>
        <Hero />
        <BookCar />
        <PlanTrip />
        <PickCar />
        <Banner />
        {/* Add the ChooseUs Component */}
        <Testimonials />
        <Faq />
        <Download />
        <Footer />
        <ScrollTop />
      </>
    );
  }
}
