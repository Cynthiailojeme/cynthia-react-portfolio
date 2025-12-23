import React from "react";
import Cynthia from "../assets/cynthia.jpeg";
import { resumeLink } from "../utils/data";

const About = () => {
  return (
    <div className="about" id="about" style={{ overflowX: "hidden" }}>
      <div className="about-left" data-aos="fade-right">
        <img src={Cynthia} alt="cyn" />
      </div>

      <div className="about-right" data-aos="fade-left">
        <p>About Me</p>
        <h3>
          I’m Cynthia Ilojeme, a professional and highly skilled frontend
          engineer. I am passionate about leveraging my diverse backgrounds to
          decipher challenging problems and create delightful experiences. I
          honed my skills at web development, and sometimes I dabble into
          technical writing as well as open source contribution.
          <br />
          <br />
          I develop websites with HTML, CSS Javascript and TypeScript. I have top skills in
          using Javascript libraries like React JS, SvelteKit and Vue JS to convert
          wireframes and designs into pixel perfect user interfaces.
          <br />
          <br />
          Being a diligent, hardworking and result oriented lady, I always work
          towards achieving best result on each project I lay my hands on.
        </h3>
        <a href={resumeLink} target="_blank" rel="noreferrer">
          <button className="button-color">View Resume</button>
        </a>
      </div>
    </div>
  );
};

export default About;
