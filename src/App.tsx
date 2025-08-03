import { Fragment } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "src/App.css";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Data from "./data/Data";

const App = () => {
  const { name, company, jobTitle, careerSnapshot, social } = Data;
  const socialLinks = social.map((d) => `${d.name}: ${d.url}`).join(", ");
  const metaDescription = `${name} - ${jobTitle} at ${company}. ${careerSnapshot}. Connect: ${socialLinks}`;
  return (
    <Fragment>
      <Helmet>
        <title>{`${name} | ${jobTitle}`}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
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
