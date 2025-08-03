import { Fragment } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import "src/App.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Fragment>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </HashRouter>
    </Fragment>
  );
};

export default App;
