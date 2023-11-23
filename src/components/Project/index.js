import "./index.css";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []);
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["M", "y", "", "P", "r", "o", "j", "e ", "c", "t", "s"]}
            idx={15}
          />
        </h1>
        <p>here you can see my projects, i will share with you some of them</p>
      </div>
    </div>
  );
};
export default Project;
