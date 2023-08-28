import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/globalStyles.css";
export class HeroPages extends Component {
  render() {
    const { name } = this.props;

    return (
      <>
        <section className="hero-pages">
          <div className="hero-pages_overlay"></div>
          <div className="container">
            <div className="hero-pages_text">
              <h3>{name}</h3>
              <p>
                <Link to="/">Home</Link> / {name}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
