import React from "react";
import Github from "../assets/github-footer.svg";
import LinkedIn from "../assets/linkedin-footer.svg";
import Instagram from "../assets/instagram-footer.svg";
import Twitter from "../assets/twitter-footer.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer" id="footer">
      <div className="footer-logo">
        <a href="#home" className="portfolio-logo white">
          CynthiaI.
        </a>
      </div>
      <div className="social-links">
        <a
          href="https://github.com/Cynthiailojeme"
          target="blank"
          className="social-icons"
        >
          <div className="social-icons-img">
            <img src={Github} alt="github" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/cynthia-ilojeme/"
          target="blank"
          className="social-icons"
        >
          <div className="social-icons-img">
            <img src={LinkedIn} alt="github" />
          </div>
        </a>
        <a
          href="https://twitter.com/CynthiaIlojeme"
          target="blank"
          className="social-icons"
        >
          <div className="social-icons-img">
            <img src={Twitter} alt="twitter" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/cynthiailojeme/"
          target="blank"
          className="social-icons"
        >
          <div className="social-icons-img">
            <img src={Instagram} alt="instagram" />
          </div>
        </a>
      </div>
      <span>© Copyright {currentYear}. All right reserved.</span>
    </div>
  );
};

export default Footer;
