import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import Line from "../assets/portfolio-line.svg";
import Left from "../assets/chevron-left.svg";
import Right from "../assets/chevron-right.svg";
import Tonote from "../assets/tonote.png";
import Whispa from "../assets/whispa-1.png";
import Letshego from "../assets/letshego.png";
import Nibss from "../assets/nibss.png";
import Kafene from "../assets/kafene-1.png";
import "react-slideshow-image/dist/styles.css";

const Portfolio = () => {
  const slideRef = useRef();

  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  const projects = [
    {
      title: "Tonote",
      alt: "tonote",
      image: Tonote,
      info: "An online signing platform that helps you notarise documents and swear affidavits virtually.",
      url: "https://www.gettonote.com/",
    },
    {
      title: "Kafene",
      alt: "kafene",
      image: Kafene,
      info: "A digital web and app-based lease to own platform that underwrites, approves, and enables payment in less than 5 minutes.",
      url: "https://merchant.kafene.com/",
    },
    {
      title: "NIBSS Sandbox",
      alt: "nibss",
      image: Nibss,
      info: "Payment platform that enables users to apply virtually and get certication for NIP and POS applications.",
      url: "https://vi-nibsssandbox.nibss-plc.com.ng/",
    },
    {
      title: "Whispa Health",
      alt: "whispa",
      image: Whispa,
      info: "Admin dashboard for a mobile application that provides young people with private, even anonymous access to Sexual and Reproductive Health (SRH) information.",
      url: "https://dashboard.whispahealth.com/",
    },
    {
      title: "Letshego SMS Hub",
      alt: "letshego",
      image: Letshego,
      info: "Admin dashboard for the managemeent of SMS being sent by providers from various countries.",
      url: null,
    },
  ];

  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    canSwipe: false,
    indicators: false,
    arrows: true,
    prevArrow: (
      <div className="carousel-item" onClick={() => back()}>
        <img src={Left} alt="" />
      </div>
    ),
    nextArrow: (
      <div className="carousel-item" onClick={() => next()}>
        <img src={Right} alt="" />
      </div>
    ),
  };

  return (
    <div className="portfolio" id="portfolio">
      <p>Porfolio</p>
      <h3>Recent Projects</h3>
      <div>
        <img src={Line} alt="" />
      </div>

      <div
        className="portfolio-section"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <Slide ref={slideRef} {...properties}>
          {projects.map((item, index) => (
            <div className="portfolio-section-item" key={index}>
              <div className="portfolio-section-image">
                <div className="image">
                  <img src={item.image} alt={item.alt} />
                </div>
              </div>

              <div className="portfolio-section-info">
                <h1>{item.title}</h1>
                <p>{item.info}</p>
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <button className="button-color">View Site</button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Portfolio;
