import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPhone, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import HeroPages from "../components/HeroPages";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/register", formData) // Send the form data to the server
      .then((response) => {
        console.log("Registration successful");
        // Reset form fields
        setFormData({
          name: "",
          surname: "",
          phoneNumber: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.error("Error registering user", error);
        // Handle registration error
      });
  };
  return (
    <>
      <HeroPages name="Register" />
      <section className="register-page ">
        <div className="container-register">
          <h1 className="text">Sign Up</h1>
          <div className="signUpGoogle">
            <Link className="signUpGoogle" to="/">
              Sign Up using Google
            </Link>
          </div>
          <h2 className="signup-head">or Sign Up With your email</h2>
          <div className="name">
            <div className="input-group">
              <h3>Name</h3>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <h3>Surname</h3>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                placeholder="Surname"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-group">
            <h3>Phone Number</h3>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <h3>Email Address</h3>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <h3>Password</h3>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
              />
              <button onClick={togglePasswordVisibility} type="button">
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </div>

          <div className="input-group">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By Signing Up I agree with <a href="/">Terms & Conditions</a>
            </label>
          </div>
          <div className="signUp">
            <button className="signUpButton" onClick={handleSubmit}>
              Sign Up
            </button>
          </div>
          <h3 className="already">
            Already have an Account? &nbsp;
            <a href="/#/sign-in">Sign In</a>
          </h3>
        </div>
      </section>
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
    </>
  );
}

export default Register;
