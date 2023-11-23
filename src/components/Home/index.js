import { Link } from "react-router-dom";
import dlogo from "../../assets/Images/dia D.png";
import "./index.css";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import diamm from "../../assets/Images/diamm.png";
//import Logo from "./Logo";
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["i", "a", " ", "R", "a", "o", "f", "i", "a", "n"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 10000);
  }, []); // increase the delay to 10 seconds }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={dlogo} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />{" "}
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / athlete </h2>
        <Link to="/contact" className="flat-button">
          {" "}
          CONTACT ME{" "}
        </Link>
      </div>
      <div className="item">
        <img className="d" src={diamm} alt="Dia" />
        <p className="di" data-text="Hard worker🧑‍💻"></p>
      </div>
    </div>
  );
};

export default Home;
