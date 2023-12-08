import "./App.css";
import { Route, Routes } from "react-router-dom";
import "animate.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Education from "./components/education";
import { Item } from "./components/Project/Item";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="education" element={<Education />} />
          <Route path="skill" element={<Skill />} />
          <Route path="project" element={<Project slides={Item} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
