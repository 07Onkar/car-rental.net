import React, { Component } from "react";
import { SigninC } from "../components/SigninC";
import {Footer} from "../components/Footer";
import  ScrollTop  from "../components/ScrollTop";
import { HeroPages } from "../components/HeroPages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavMenu } from "../components/NavMenu";

export class SignIn extends Component {
    render() {
        return (
            <section className="signin">
            <NavMenu/>
                <HeroPages name="Sign In" />

                <div className="container">
                    <SigninC />
                </div>

                <div className="book-banner">
                    <div className="book-banner__overlay"></div>
                    <div className="container">
                        <div className="text-content">
                            <h2>Book a car by getting in touch with us</h2>
                            <span>
                                <FontAwesomeIcon icon={faPhone} />
                                <h3>(0) 123-456-6789</h3>
                            </span>
                        </div>
                    </div>
                </div>
                <Footer />
                <ScrollTop />
            </section>
        );
    }
}


