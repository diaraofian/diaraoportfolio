import "./index.css";

import Carousel from "./carousel";
import { data } from "./data";

const Project = () => {
  return (
    <>
      <h1 className="title">My Projects</h1>
      <Carousel data={data} />
    </>
  );
};
export default Project;
