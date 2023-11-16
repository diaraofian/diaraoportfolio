import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters";
import "./index.css";
import { useEffect, useState } from "react";
import {
  faCss3,
  faHtml5,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []); // increase the delay to 5 seconds }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>
          I am very ambitious Front-end developer looking for a role in
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p>
          I may be a bit witty but confident ,naturally curious, and perpetually
          working on improving my chops one design problem at a time.
        </p>
        <p>
          if I need to define myself in one sentence that would be a family
          person,a sports fanatic, photography enthusiast,tech-obsessed ,and a
          person who loves football and Cristiano Ronaldo is her pattern of
          life.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#F065291" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJava} color="#F89820" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
