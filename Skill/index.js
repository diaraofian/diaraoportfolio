import "./index.css";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import d from "../../assets/Images/diam.jpg";

const Skill = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []);
  return (
    <div className="container skill-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["M", "y", " ", "S", "k", "i", "l", "l ", "s"]}
            idx={15}
          />
        </h1>
        <p>Here you can see all of Dia skills.</p>
        <p>
          Dia is proficient in HTML, CSS, and JS. She can create responsive and
          interactive web pages using these technologies. she also has
          experience with React, a popular front-end framework for building user
          interfaces.
        </p>

        <p>
          This is an example of Dia's portfolio, where he showcases his projects
          and skills. You can see how he uses different colors, fonts, and
          animations to create a stunning website.
        </p>
      </div>
      <section className="skill-section">
        <div className="cont">
          <div className="section-title center">
            <p>Why Choose Me</p>
            <h2>My Skills Area</h2>
          </div>
          <div className="skill-items">
            <div className="skill-item">
              <div className="skill-info">
                <p>HTML</p>
                <p>99%</p>
              </div>
              <div className="progress-line" data-percent="99%">
                <span style={{ width: "99%" }}></span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>CSS</p>
                <p>95%</p>
              </div>
              <div className="progress-line" data-percent="95%">
                <span style={{ width: "95%" }}></span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>JAVA SCRIPT</p>
                <p>85%</p>
              </div>
              <div className="progress-line" data-percent="85%">
                <span style={{ width: "85%" }}></span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>BOOTSTRAP</p>
                <p>93%</p>
              </div>
              <div className="progress-line" data-percent="93%">
                <span style={{ width: "93%" }}></span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>REACT JS</p>
                <p>70%</p>
              </div>
              <div className="progress-line" data-percent="70%">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <p>JAVA</p>
                <p>50%</p>
              </div>
              <div className="progress-line" data-percent="50%">
                <span style={{ width: "50%" }}></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Skill;
