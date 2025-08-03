import React, { Fragment, Suspense } from "react";
import AboutSection from "@/Components/Portfolio/Sections/AboutSection";
// import SkillSection from "@/Components/Portfolio/Sections/SkillSection";
// import ExperienceSection from "@/Components/Portfolio/Sections/ExperienceSection";
import ProjectSection from "@/Components/Portfolio/Sections/ProjectSection";
import ContactSection from "@/Components/Portfolio/Sections/ContactSection";
import HeroSection from "@/Components/Portfolio/Sections/HeroSection";
import FooterSection from "@/Components/Portfolio/Sections/FooterSection";
import HeaderSection from "./Sections/HeaderSection";

const SkillSection = React.lazy(
  () => import("@/Components/Portfolio/Sections/SkillSection")
);
const ExperienceSection = React.lazy(
  () => import("@/Components/Portfolio/Sections/ExperienceSection")
);
const PortfolioWrapper = () => {
  return (
    <Fragment>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <Suspense fallback="loading">
        <SkillSection />
        <ExperienceSection />
      </Suspense>

      <ContactSection />
      <FooterSection />
    </Fragment>
  );
};

export default PortfolioWrapper;
