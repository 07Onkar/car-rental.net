import React, { Component } from "react";
import { Footer } from "../components/Footer";
import { HeroPages } from "../components/HeroPages";
import { PlanTrip } from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ScrollTop from "../components/ScrollTop";
import { NavMenu } from "../components/NavMenu";

export class About extends Component {
  render() {
    return (
      <>
        <section className="about-page">
        <NavMenu/>
          <HeroPages name="About" />
          <div className="container">
            <div className="about-main">
              <img
                className="about-main_img"
                src={AboutMain}
                alt="car-renting"
              />
              <div className="about-main_text">
                <h3>About Company</h3>
                <h2>You start the engine and your adventure begins</h2>
                <p>
                  Certain but she but shyness why cottage. Guy the put
                  instrument sir entreaties affronting. Pretended exquisite see
                  cordially the you. Weeks quiet do vexed or whose. Motionless
                  if no to affronting imprudence no precaution. My indulged as
                  disposal strongly attended.
                </p>
                <div className="about-main_text_icons">
                  <div className="about-main_text_icons_box">
                    <img src={Box1} alt="car-icon" />
                    <span>
                      <h4>20+</h4>
                      <p>Car Types</p>
                    </span>
                  </div>
                  <div className="about-main_text_icons_box">
                    <img src={Box2} alt="car-icon" />
                    <span>
                      <h4>85+</h4>
                      <p>Rental Outlets</p>
                    </span>
                  </div>
                  <div className="about-main_text_icons_box">
                    <img src={Box3} alt="car-icon" className="last-fk" />
                    <span>
                      <h4>75+</h4>
                      <p>Repair Shop</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <PlanTrip />
            <ScrollTop />
          </div>
        </section>
        <div className="book-banner">
          <div className="book-banner_overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <FontAwesomeIcon icon={faPhone} />
                <h3>(0) 123-456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
