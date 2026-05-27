import { Fragment } from 'react';
import AboutSection from 'src/components/portfolio/sections/AboutSection';
import ContactSection from 'src/components/portfolio/sections/ContactSection';
import ExperienceSection from 'src/components/portfolio/sections/ExperienceSection';
import FloatingNavSpeedDial from 'src/components/portfolio/sections/FloatingNavSpeedDial';
import FooterSection from 'src/components/portfolio/sections/FooterSection';
import HeaderSection from 'src/components/portfolio/sections/HeaderSection';
import HeroSection from 'src/components/portfolio/sections/HeroSection';
import PortfolioGallery from 'src/components/portfolio/sections/PortfolioGallery';
import ProjectSection from 'src/components/portfolio/sections/ProjectSection';
import SkillSection from 'src/components/portfolio/sections/SkillSection';

const PortfolioWrapper = () => {
  return (
    <Fragment>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <PortfolioGallery />
      <ContactSection />
      <FooterSection />

      <FloatingNavSpeedDial />
    </Fragment>
  );
};

export default PortfolioWrapper;
