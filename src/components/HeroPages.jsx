import React from 'react'
import { Link } from 'react-router-dom'
function HeroPages({ name }) {
  return (
    <>
        <section className="hero-pages">
            <div className="hero-pages_overlay"></div>
            <div className="container">
                <div className="hero-pages_text">
                    <h3>{ name }</h3>
                    <p>
                        <Link to="/">Home</Link> / {name}
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroPages