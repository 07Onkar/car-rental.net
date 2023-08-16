import React from 'react'
import HeroPages from '../components/HeroPages'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import ScrollTop from '../components/ScrollTop'

function Team() {
  return (
    <>
       <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
          {/* Add the team data here  */}
            
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <FontAwesomeIcon icon={faPhone}/>
                <h3>(0) 123-456-6789</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
        <ScrollTop/>
      </section>
    </>
  )
}

export default Team