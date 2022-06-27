import React, { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const closeDropdown = () => {
    setClicked(!clicked);
  };

  return (
    <div className="header">
      <div className="header-left">
        <a href="#home" className="portfolio-logo">
          CynthiaI.
        </a>
      </div>

      <input type="checkbox" id="nav-check" />
      <div className="header-dropdown" style={{ display: clicked && "none" }}>
        <a href="#about" className="header-link-1" onClick={closeDropdown}>
          About Me
        </a>
        <a
          href="https://docs.google.com/document/d/1dq8b98hyF07QekDUl42JlFOx3eKrs1o1fnLr_7SOs0A/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="header-link-1"
        >
          Resume
        </a>
        <a href="#portfolio" className="header-link-1" onClick={closeDropdown}>
          Portfolio
        </a>
        <a href="#contact" className="header-link-1" onClick={closeDropdown}>
          Contact
        </a>
      </div>

      <div className="header-right">
        <a href="#about" className="header-link-1">
          About Me
        </a>
        <a
          href="https://docs.google.com/document/d/1dq8b98hyF07QekDUl42JlFOx3eKrs1o1fnLr_7SOs0A/edit?usp=sharing"
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

      <div className="header-mid" onClick={() => setClicked(false)}>
        <label htmlFor="nav-check">
          <div className="header-mid-item1"></div>
          <div className="header-mid-item2"></div>
          <div className="header-mid-item3"></div>
        </label>
      </div>
    </div>
  );
};

export default Header;
