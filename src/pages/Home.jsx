import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <div className="container">
      <div className="container-about">
        <Header />
        <Landing />
        <About/>
        <div className="container-body">
        </div>
      </div>
    </div>
  );
};

export default Home;
