import React from "react";
import Underlay from "../assets/frontend.svg";
import ColouredDots from "../assets/coloured-dots.svg";
import WhiteDots from "../assets/white-dots.svg";
import Github from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Picture from "../assets/picture.jpeg";

const Landing = () => {
  return (
    <div className="landing" id="home">
      <div className="landing-left">
        <p>Hi There!</p>
        <h1
          className="name"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          I'm <span>Cynthia Ilojeme</span>
        </h1>
        <h3>a Frontend Developer.</h3>
        <div className="landing-left-underlay">
          <img src={Underlay} alt="underlay" />
        </div>
        <h5>
          Experienced Frontend Engineer with a demonstrated <br /> history of
          working in the information technology and <br /> services industry,
          passionate about solving problems <br /> with code.
        </h5>

        <a href="mailto:cynthiaezinne1@gmail.com">
          <button className="button-color">Hire Me</button>
        </a>
      </div>
      <div className="landing-right">
        <div className="social-circle">
          <a href="https://github.com/Cynthiailojeme" target="blank">
            <div className="social-icons github">
              <div className="social-icons-img">
                <img src={Github} alt="github" />
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/cynthia-ilojeme/" target="blank">
            <div className="social-icons linkedin">
              <div className="social-icons-img">
                <img src={LinkedIn} alt="github" />
              </div>
            </div>
          </a>
          <a href="https://twitter.com/CynthiaIlojeme" target="blank">
            <div className="social-icons twitter">
              <div className="social-icons-img">
                <img src={Twitter} alt="twitter" />
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/cynthiailojeme/" target="blank">
            <div className="social-icons instagram">
              <div className="social-icons-img">
                <img src={Instagram} alt="instagram" />
              </div>
            </div>
          </a>

          <div className="white-dots">
            <img src={WhiteDots} alt="dots" />
          </div>

          <div className="image-circle">
            <div className="my-image">
              <img src={Picture} alt="cynthia" />
            </div>
          </div>

          <div className="coloured-dots">
            <img src={ColouredDots} alt="dots" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
