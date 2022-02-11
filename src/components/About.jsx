import React from "react";
import Download from "../assets/download.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left"></div>

      <div className="about-right">
        <p>About Me</p>
        <h3>
          I’m Cynthia Ilojeme, a professional and talented Product Designer with
          front end development skills.I am passionate about leveraging my
          diverse backgrounds to decipher challenging problems and create
          delightful experiences. I honed my skills at web development,
          technical writing, product design and SEO analytics.
          <br />
          <br />
          I develop websites with HTML, CSS and JavaScript. I have top skills in
          using design softwares like Figma, Adobe XD, Invision and PhotoShop;
          with prototype tools like Framer and Protopie.
          <br />
          <br />
          Being a diligent, hardworking and result oriented lady, I always work
          towards achieving best result on each project I lay my hands on.
        </h3>
        <a href="www.cv.com">
          <button className="button-color">
            <div className="button-img">
              <img src={Download} alt="download" />
            </div>
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;