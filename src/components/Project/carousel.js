import { useEffect, useState } from "react";
const Carousel = ({ data }) => {
  const [currentIndex, setCurrentInsex] = useState(0);
  const [fade, setFade] = useState(false);
  const [pauseAutoPlay, setPauseAutoPlay] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      !pauseAutoPlay &&
        setCurrentInsex((prevIndex) => (prevIndex + 1) % data.length);
      setFade(true);
    }, 2500);
    return () => clearInterval(interval);
  });

  //next and prev func
  const handleNext = () => {
    setCurrentInsex((prevIndex) => (prevIndex + 1) % data.length);
    setPauseAutoPlay(false);
  };
  const handlePrev = () => {
    setCurrentInsex((prevIndex) => (prevIndex - 1) % data.length);
    setPauseAutoPlay(false);
  };
  return (
    <div className="carousel">
      <img
        src={data?.[currentIndex]?.img} // use optional chaining here alt=“dGame”
        className={"carousel-img " + (fade && "fade")}
      />
      <div className="carousel-details">
        <h2 className="carousel-title">
          {" "}
          {data?.[currentIndex]?.title ? data[currentIndex].title : "Title"}
        </h2>
        <p className="carousel-text">
          {" "}
          {data?.[currentIndex]?.text ? data[currentIndex].text : "Text"}
        </p>
        <a
          className="start-button"
          target=" _blank"
          href={data?.[currentIndex]?.link}
        >
          {" "}
          Konw more{" "}
        </a>
      </div>
      <button className="carousel-button prev-button" onClick={handlePrev}>
        {" "}
        Prev{" "}
      </button>
      <button className="carousel-button next-button" onClick={handleNext}>
        {" "}
        Next{" "}
      </button>
    </div>
  );
};
export default Carousel;
