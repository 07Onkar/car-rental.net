import React, { Component } from "react";
import BgShape from "../images/cars-big/hero/bg-hero.png";
import HeroCar from "../images/cars-big/hero/main-car.png";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";

export class Hero extends Component {
  static displayName = Hero.name;

  render() {
    const bookBtn = () => {
      document
        .querySelector("#booking-section")
        .scrollIntoView({ behavior: "smooth" });
    };

    return (
      <>
        <section id="home" className="hero-section">
          <div className="container">
            <img src={BgShape} alt="background-shape" className="bg-shape" />
            <div className="hero-content">
              <div className="hero-content_text">
                <h4>Plan Your Trip now</h4>
                <h1>
                  Save <span>big</span> with our car Rental
                </h1>
                <p>
                  Rent the Car of your dreams. Unbeatable prices, unlimited
                  miles, flexible pick-up options and much more.
                </p>
                <div className="hero-content_text_btns">
                  <Link
                    onClick={bookBtn}
                    className="hero-content_text_btns_book-ride"
                    to="/"
                  >
                    Book Ride &nbsp;{" "}
                    <i className="fa-solid fa-circle-check"></i>
                  </Link>
                  <Link className="hero-content_text_btns_learn-more" to="/about">
                    Learn More &nbsp;{" "}
                    <i className="fa-solid fa-angle-right"></i>
                  </Link>
                </div>
              </div>
              {/* Images */}

              <img
                src={HeroCar}
                alt="car-img"
                className="hero-content_car-img"
              />
            </div>
          </div>

          {/* Page Up */}

          <ScrollTop />
        </section>
      </>
    );
  }
}
