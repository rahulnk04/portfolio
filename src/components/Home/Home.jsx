import React, { Fragment } from "react";
import Introduction from "../Introduction/Introduction";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Educations from "../Education/Educations";

const Home = () => {
  return (
    <Fragment>
      <div>
        <Introduction />
        <About />
        <Projects />
        <Educations />
      </div>
    </Fragment>
  );
};

export default Home;
