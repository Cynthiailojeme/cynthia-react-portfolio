import React from "react";
import Download from "../assets/download.svg";
import Cynthia from "../assets/cynthia.jpeg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={Cynthia} alt="cyn" />
      </div>

      <div className="about-right">
        <p>About Me</p>
        <h3>
          I’m Cynthia Ilojeme, a professional and highly skilled frontend
          developer. I am passionate about leveraging my diverse backgrounds to
          decipher challenging problems and create delightful experiences. I
          honed my skills at web development, and sometimes I dabble into
          technical writing as well as open source contribution.
          <br />
          <br />
          I develop websites with HTML, CSS and JavaScript. I have top skills in
          using Javascript libraries like React JS and Vue JS to convert
          wireframes and designs into pixel perfect user interfaces.
          <br />
          <br />
          Being a diligent, hardworking and result oriented lady, I always work
          towards achieving best result on each project I lay my hands on.
        </h3>
        <a
          href="https://docs.google.com/document/d/1dq8b98hyF07QekDUl42JlFOx3eKrs1o1fnLr_7SOs0A/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button-color">
            <div className="button-img">
              <img src={Download} alt="download" />
            </div>
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
