import React, { Component } from 'react';
import {HeroPages} from "../components/HeroPages";
import {Footer }from "../components/Footer"
import {Testimonials} from "../components/Testimonials"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import ScrollTop from '../components/ScrollTop';
import { NavMenu } from '../components/NavMenu';

class TestimonialsPage extends Component {
  render() {
    return (
      <>
        <section className="testimonial-page">
          <HeroPages name="Testimonials" />
          <NavMenu/>
          <Testimonials />
          <div className="book-banner">
            <div className="book-banner__overlay"></div>
            <div className="container">
              <div className="text-content">
                <h2>Book a car by getting in touch with us</h2>
                <span>
                  <FontAwesomeIcon icon={faPhone}/>
                  <h3>(0) 123-456-7869</h3>
                </span>
              </div>
            </div>
          </div>
          <Footer />
          <ScrollTop/>
        </section>
      </>
    );
  }
}

export default TestimonialsPage;
