import React, { useState } from "react";
import { Item } from "./Item";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./index.css";

const Project = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {Item.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="slide-content">
                <img src={slide.image} alt="Watches" className="image" />
                <div className="slide-text">
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                  <a href={slide.link}>See project</a>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};
export default Project;
