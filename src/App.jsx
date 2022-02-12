import React, { Fragment } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Layout/NavBar/NavBar";
import Resume from "./components/Resume/Resume";

const App = () => {
  return (
    <Fragment>
      <Router basename="/">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
