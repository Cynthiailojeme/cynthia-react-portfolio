import React, { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const closeDropdown = () => {
    setClicked(false);
  };

  return (
    <div
      className="header"
      style={{ background: clicked && "#4169E1" }}
    >
      <div className="header-left">
        <a
          href="#home"
          className="portfolio-logo"
          style={{ color: clicked ? "#FFFFFF" : "#4169E1" }}
        >
          CynthiaI.
        </a>
      </div>

      {clicked && (
        <div className="header-dropdown">
          <a href="#about" className="header-link-1" onClick={closeDropdown}>
            About Me
          </a>
          <a
            href="https://docs.google.com/document/d/1cbkJ-Ip-wZZdt1SfxNdyAIJBnfxphFtY2bTn3S-r-kI/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="header-link-1"
          >
            Resume
          </a>
          <a
            href="#portfolio"
            className="header-link-1"
            onClick={closeDropdown}
          >
            Portfolio
          </a>
          <a href="#contact" className="header-link-1" onClick={closeDropdown}>
            Contact
          </a>
        </div>
      )}

      <div className="header-right">
        <a href="#about" className="header-link-1">
          About Me
        </a>
        <a
          href="https://docs.google.com/document/d/1cbkJ-Ip-wZZdt1SfxNdyAIJBnfxphFtY2bTn3S-r-kI/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="header-link-1"
        >
          Resume
        </a>
        <a href="#portfolio" className="header-link-2">
          Portfolio
        </a>
        <a href="#contact" className="header-link-2">
          Contact
        </a>
      </div>

      {clicked ? (
        <div className="header-mid" onClick={() => setClicked(!clicked)}>
          <div className="header-mid-item2"></div>
          <div className="header-mid-item2"></div>
          <div className="header-mid-item2"></div>
        </div>
      ) : (
        <div className="header-mid" onClick={() => setClicked(!clicked)}>
          <div className="header-mid-item"></div>
          <div className="header-mid-item"></div>
          <div className="header-mid-item"></div>
        </div>
      )}
    </div>
  );
};

export default Header;
