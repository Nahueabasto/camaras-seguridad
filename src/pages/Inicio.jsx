import React from "react";
import Home from "../Components/Home";
import About from "../Components/About"
import Work from "../Components/Work"
import Testimonial from "../Components/Testimonial"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import "../App.css";

export default function Inicio(){
    return(
        <div className="App">
            <Home />
            <About />
            <Work />
            <Testimonial />
            <Contact />
            <Footer />
         </div>
    )
}