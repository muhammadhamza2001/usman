import About from "components/About";
import Calendly from "components/Calendly";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Hero from "components/Hero";
import MyWorks from "components/MyWorks";
import Reviews from "components/Reviews";
import Services from "components/Services";
import Skills from "components/Skills";
import React from "react";

const App = () => {
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  return (
    <>
      <Hero />
      <About />
      <Skills/>
      <Services/>
      <Calendly/>
      <MyWorks/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
