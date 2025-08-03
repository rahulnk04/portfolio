import { Fragment } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Resume from "@/pages/Resume";
import "@/App.css";

function App() {
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
}

export default App;
