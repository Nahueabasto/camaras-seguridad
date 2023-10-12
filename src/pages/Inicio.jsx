import React from "react";
import Home from "../Component/Home";
import About from "../Component/Abaut";
import Work from "../Component/Work";
import Testimonial from "../Component/Testiminial";
import Contact from "../Component/Contact";
import Footer from "../Component/Footer";
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