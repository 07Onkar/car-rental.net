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
import ChooseUs from "../components/ChooseUs";
import { NavMenu } from "../components/NavMenu";
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <NavMenu/>
        <Hero />
        <BookCar />
        <PlanTrip />
        <PickCar />
        <Banner />
        <ChooseUs/>
        <Testimonials />
        <Faq />
        <Download />
        <Footer />
        <ScrollTop />
      </div>
    );
  }
}
