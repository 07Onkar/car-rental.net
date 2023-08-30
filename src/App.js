import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import {About} from "./pages/About"
import Models from "./pages/Models";
import Testimonials from "./pages/TestimonialsPage";
import Contact from "./pages/Contact";
import { SignIn } from "./pages/SignIn";
import { Register } from "./pages/Register";
import { Welcome } from "./components/Welcome";
import Team from "./pages/Team";
import Payment from "./components/Payment";
import ErrorPage from "./components/ErrorPage";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        
        <Routes>
        
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/models" element={<Models />} />
                <Route path="/team" element={<Team/>} />
                <Route path="/testimonials" element={<Testimonials/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
                <Route path="/welcome" element={<Welcome/>} />
                <Route path="/payment" element={<Payment/>} />
                <Route path="/error" element={<ErrorPage/>} />
        </Routes>
        </>
    );
  }
}
