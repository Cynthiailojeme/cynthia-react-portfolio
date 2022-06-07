import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Portfolio from "../components/Portfolio";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Landing />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
