import BoltIcon from '@mui/icons-material/Bolt';
import CodeIcon from '@mui/icons-material/Code';
import CollectionsIcon from '@mui/icons-material/Collections';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import React from 'react';

interface NavSection {
  label: string;
  target: string;
  icon: React.ReactNode;
}
export const NAV_SECTIONS: NavSection[] = [
  { label: 'Home', target: 'hero', icon: <HomeIcon /> },
  { label: 'About', target: 'about', icon: <PersonIcon /> },
  { label: 'Projects', target: 'projects', icon: <CodeIcon /> },
  { label: 'Skills', target: 'skills', icon: <BoltIcon /> },
  { label: 'Experience', target: 'experience', icon: <WorkIcon /> },
  { label: 'Gallery', target: 'gallery', icon: <CollectionsIcon /> },
  { label: 'Contact', target: 'contact', icon: <MailIcon /> },
  //   { label: "Education", target: "education" },
];
