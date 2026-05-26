import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import dxcLogo from 'src/images/DXC-Full-Color.png';
import CssIcon from 'src/images/icons/css.png';
import HtmlIcon from 'src/images/icons/html.webp';
import JavaScriptIcon from 'src/images/icons/javascript.png';
import MaterialUiIcon from 'src/images/icons/mui.png';
import NextJsIcon from 'src/images/icons/nextjs.png';
import NodeJsIcon from 'src/images/icons/nodejs.png';
import ReactJsIcon from 'src/images/icons/reactjs.png';
import tailwindIcon from 'src/images/icons/tailwind.png';
import TypeScriptIcon from 'src/images/icons/typescript.png';
import kiit from 'src/images/kiit.jpeg';
import MyFonts from 'src/images/MyFonts.svg';
import Optum from 'src/images/Optum.svg';
import Me from 'src/images/RahulNew.png';
import sapient from 'src/images/sapientNew.png';
import silicon from 'src/images/silicon.png';
import tcsLogo from 'src/images/tcs.png';
import Telenor from 'src/images/Telenor.png';
// import champ from "../../pdfs/Champ.pdf";
// import COLLABORATING from "../../pdfs/DXC_COL_AWARD.pdf";
// import Oracle from "../../pdfs/oracle-eCertificate.pdf";

export interface SocialLink {
  name: string;
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

export interface Language {
  name: string;
  proficiency: string;
  rate: number;
}

export interface Education {
  degree: string;
  institution: string;
  startDate: Date;
  endDate: Date;
  description: string;
  logo: string;
  highest: boolean;
  cgpa?: string;
}

export interface Certificate {
  name: string;
  link: string;
  param: string;
  date: Date;
  desc: string;
}

export interface Skill {
  name: string;
  percentage: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  color: string;
  rating: number;
  hide?: boolean;
}

export interface Project {
  id: number;
  img: string;
  link: string;
  name: string;
  role: string;
  account: string;
  status: string;
  teamSize: number;
  startDate: Date;
  endDate: Date;
  description: string;
  technologies: string[];
  tools: string[];
  database: string[];
  environment: string[];
  currentOrg: string;
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
  address: string;
  logo: string;
  present: boolean;
  upcoming: boolean;
  jobDescription?: string;
}

export interface ResumeData {
  name: string;
  specialCompany: string;
  jobTitle: string;
  company: string;
  companyStartDate: Date;
  address: string;
  dateOfBirth: Date;
  phone: string;
  email: string;
  website: { name: string; link: string };
  social: SocialLink[];
  profilePicture: string;
  noticePeriod: string;
  servingNotice: boolean;
  lastWorkingDay: Date;
  careerSnapshot: string;
  bioKeyPoints: string[];
  keyAchievements: string[];
  interests: string[];
  professionalJourney: Experience[];
  keyProjects: Project[];
  skills: {
    Frontend: Skill[];
    Backend: Skill[];
    Tooling: Skill[];
    Methodologies: Skill[];
    SoftSkills: Skill[];
  };
  education: Education[];
  certificates: Certificate[];
  languages: Language[];
}

const labels = {
  rahul: 'Rahul Ranjan Nayak',

  optum: 'United Health Group, Optum',
  publicisSapient: 'Publicis Sapient',
  tcs: 'Tata Consultancy Services (TCS)',
  dxc: 'DXC Technology',
  monotypeImaging: 'Monotype Imaging',
  developer: 'Developer',
  telenorGroup: 'Telenor Group',

  seniorLeadEngineer: 'Senior Lead Engineer',
  seniorExperienceEngineer: 'Senior Experience Engineer',
  seniorLeadConsultant: 'Senior Lead Consultant',
  associateTechnologyLevel2: 'Associate Technology Level 2',
  associateProfessional: 'Associate Professional',
  leadDeveloper: 'Lead Developer',

  reactJs: 'React.js',
  nextJs: 'Next.js (SSR/SSG)',
  nodeJs: 'Node.js',
  javaScript: 'JavaScript',
  html5: 'HTML5',
  css3: 'CSS3',
  tailwindCss: 'Tailwind CSS',
  mongoDb: 'MongoDB',
  jest: 'Jest',
  typescript: 'TypeScript',
  javaSpringBoot: 'Java Spring Boot',
  databricks: 'Databricks',
  python: 'Python',
  materialUI: 'Material UI',
  azure: 'Azure',
  githubActions: 'Github Actions',
  github: 'GitHub',
  vsCode: 'VS Code',
  intelliJIDEA: 'IntelliJ IDEA',
  postman: 'Postman',
  gitLab: 'GitLab',
  eclipse: 'Eclipse',
};

export const calculateCurrentExperienceInYears = (): number => {
  const start = new Date('2020-07-02');
  const today = new Date();
  return today.getFullYear() - start.getFullYear();
};
const Data: ResumeData = {
  name: labels.rahul,
  jobTitle: `${labels.seniorLeadConsultant} | React.js & Next.js Specialist`,
  company: labels.tcs,
  specialCompany: labels.optum,
  companyStartDate: new Date('2020-07-02'),
  address: 'Plot 606, Parbati Palace, Bhubaneswar, Odisha, India',
  dateOfBirth: new Date('1996-04-12'),
  phone: '+91 - 7205326146',
  email: 'rahulnk04@gmail.com',
  website: {
    name: 'rahulnk04.github.io/portfolio',
    link: 'https://rahulnk04.github.io/portfolio',
  },
  social: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rahulnk04/',
      icon: LinkedInIcon,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rahulnk04',
      icon: GitHubIcon,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/rahulnk04',
      icon: FacebookIcon,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/rahulnk04',
      icon: TwitterIcon,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rahulnk04/',
      icon: InstagramIcon,
    },
  ],
  profilePicture: Me,
  noticePeriod: '09 Days',
  servingNotice: false,
  lastWorkingDay: new Date('2022-04-30'), // Note: Outdated; confirm if needed
  careerSnapshot: `Senior Engineer with ${calculateCurrentExperienceInYears()} years of experience designing and building scalable, high-performance web apps. Uses React.js and the Next.js full-stack framework to create strong front-end experiences and reliable APIs.  Good at server-side rendering (SSR), integrating APIs without problems, and making user interfaces that are responsive and easy to use.  Dedicated to providing high-quality, maintainable solutions that improve the user experience.  Loves mentoring teams, encouraging new ideas, and making things work in fast-paced, changing tech settings.`,
  bioKeyPoints: [
    '🚀 Next.js expert with SSR, dynamic routing, and API integration',
    '🎨 Clean, responsive UI development with HTML5 & CSS3',
    "🧠 Strong in JavaScript — closures, 'this', and array methods",
    '🛠️ Proficient in ES6+ features for modern, scalable code',
    '⚛️ Built apps with React.js (class & functional components)',
    '🪝 Used React Hooks like useState & useEffect, useContext effectively',
    '🔗 Data fetching and state management with Axios, Fetch, Context API, GraphQL, Apollo Client & Redux',
    '🧭 Routing with React Router & Next.js page navigation',
    '💅 UI libraries: Material UI, Tailwind CSS',
    '🧩 Developed RESTful APIs using Node.js and Express.js',
    '🛠️ Tools: Webpack, Babel, and NPM for build optimization',
    '✅ Tested with Jest, Mocha, and Chai',
    '🔄 Git for version control and team collaboration',
    '🧬 Integrated GraphQL APIs for efficient data handling',
    '📈 Agile & Scrum experience using Jira',
    '💻 Cross-platform dev: Ubuntu, macOS, and Windows',
  ],
  keyAchievements: [
    'Architected Next.js solutions, reducing load times by 20 percent for enterprise applications in 2024.',
    'Mentored 10+ junior developers, improving team productivity by 15 percent in 2023-2024.',
    'Integrated GraphQL APIs, enhancing data retrieval efficiency by 25 percent in 2023.',
    'Developed secure e-commerce platform for MyFonts.com, increasing user engagement by 10 percent in 2022.',
    "Automated storage allocation for Telenor's SARA tool, saving 50+ hours monthly in 2021.",
  ],
  interests: ['Cricket', 'Watching TV', 'Collecting Pens'],
  professionalJourney: [
    {
      title: labels.seniorLeadEngineer,
      company: labels.optum,
      address: 'Hyderabad, India',
      dates: 'Oct 2022 - Present',
      responsibilities: [
        'Architecting high-performance frontend solutions for enterprise-scale platforms, consistently optimizing Core Web Vitals and system scalability.',
        'Automating multi-team delivery pipelines by implementing robust CI/CD workflows and standardizing Next.js development practices.',
        'Bridging the gap between engineering and business by translating complex stakeholder requirements into actionable, long-term technical roadmaps.',
        'Optimizing data orchestration layers through advanced state management and server-side rendering (SSR) to sustain high-concurrency traffic.',
      ],
      logo: Optum, // Updated placeholder for TCS
      present: true,
      upcoming: false,
      jobDescription:
        'Next.js, React.js, Node.js, TypeScript, JavaScript, Tailwind CSS, MongoDB, Jest, System Architecture.',
    },
    {
      title: labels.seniorLeadConsultant,
      company: labels.tcs,
      address: 'Bhubaneswar, India',
      dates: 'Nov 2025 - Present',
      responsibilities: [
        'Spearheading frontend architectural strategy for enterprise-scale platforms, prioritizing high availability and core web vitals.',
        'Establishing robust CI/CD pipelines and coding standards for Next.js applications to streamline multi-team delivery cycles.',
        'Driving digital transformation initiatives by aligning technical roadmaps with business objectives and stakeholder requirements.',
        'Governing complex state management patterns and server-side optimization strategies to handle high-concurrency traffic.',
      ],
      logo: tcsLogo, // Updated placeholder for TCS
      present: true,
      upcoming: false,
      jobDescription:
        'Next.js, React.js, Node.js, TypeScript, JavaScript, Tailwind CSS, MongoDB, Jest, System Architecture.',
    },
    {
      title: labels.seniorExperienceEngineer,
      company: labels.publicisSapient,
      address: 'Hyderabad, India',
      dates: 'Apr 2024 - Oct 2025',
      responsibilities: [
        'Led frontend development for enterprise applications using Next.js 13 and React.js, ensuring scalability and performance.',
        'Architected reusable component libraries and SSR solutions, improving page load speed by 20 percent.',
        'Mentored junior developers on industry best practices, boosting team efficiency by 15 percent.',
      ],
      logo: sapient,
      present: false, // Updated to false as current role is TCS
      upcoming: false,
      jobDescription:
        'Next.js, React.js, Node.js, JavaScript, HTML5, CSS3, Tailwind CSS, MongoDB, Jest.',
    },
    {
      title: labels.associateTechnologyLevel2,
      company: labels.publicisSapient,
      address: 'Bangalore, India',
      dates: 'Apr 2022 - Mar 2024',
      responsibilities: [
        'Built scalable web platforms with Next.js and Node.js, supporting 100K+ concurrent users.',
        'Integrated complex RESTful and GraphQL APIs, enhancing data retrieval efficiency by 25 percent.',
        'Optimized user experience and accessibility, reducing bounce rates by 10 percent through responsive design patterns.',
      ],
      logo: sapient,
      present: false,
      upcoming: false,
      jobDescription:
        'Next.js, React.js, Node.js, GraphQL, JavaScript, HTML5, CSS3, Tailwind CSS, MongoDB.',
    },
    {
      title: labels.associateProfessional,
      company: labels.dxc,
      address: 'Chennai, India',
      dates: 'Jul 2020 - Apr 2022',
      responsibilities: [
        'Developed modular React.js components for enterprise applications, significantly improving code maintainability.',
        'Collaborated closely with product owners to translate functional requirements into high-performance technical solutions.',
        'Achieved 15 percent faster load times by optimizing frontend assets and implementing responsive layouts.',
      ],
      logo: dxcLogo,
      present: false,
      upcoming: false,
      jobDescription: 'React.js, Node.js, MongoDB, MySQL, JavaScript, HTML5, CSS3, Tailwind CSS.',
    },
  ],
  keyProjects: [
    {
      id: 1,
      img: Optum, // Reusing the Optum logo constant
      currentOrg: labels.tcs,
      link: 'https://www.optum.com/en/',
      name: 'Rebate Projection Tool (RPT)',
      account: labels.optum,
      role: labels.seniorLeadConsultant,
      status: 'In Progress',
      teamSize: 20,
      startDate: new Date('2025-07-01'), // Adjust based on your actual start date
      endDate: new Date(),
      description:
        'The Rebate Projection Tool (RPT) is a sophisticated automation engine developed for the Actuarial Hub within UnitedHealth Group (Optum). It streamlines the complex rebate calculation process for underwriters by integrating multi-dimensional variables including drug classifications, formulary tiers, specialty definitions, and BG (Benefit Group) definitions. The tool provides a comprehensive solution for weight-loss and diabetic medication projections, notably handling Wegovy adjustments and custom rate overrides. RPT generates mission-critical actuarial outputs such as RA (Risk Adjustment) output rates per quantity, ensuring precision in financial forecasting and competitive pricing strategies.',
      technologies: [
        'NextJs 14',
        'TypeScript',
        'NodeJS',
        'ReactJS',
        'Java Spring Boot',
        'Databricks',
        'Python',
        'Material UI',
        'Azure',
        'Github Actions',
      ],
      tools: ['VS-Code', 'IntelliJ IDEA', 'Postman', 'GitLab'],
      database: ['MongoDB'],
      environment: ['MacOS'],
    },
    {
      id: 2,
      img: Optum,
      currentOrg: labels.publicisSapient,
      account: labels.optum,
      link: 'https://www.optum.com/en/',
      name: 'Underwriters Case Management System (UWCMS)',
      role: labels.leadDeveloper,
      status: 'Completed',
      teamSize: 12,
      startDate: new Date('2023-05-01'),
      endDate: new Date(2025, 6, 30), // Adjust based on your actual end date
      description:
        'The Underwriters Case Management System (UWCMS) is an advanced platform designed to simplify and optimize the client onboarding and order fulfillment processes for underwriters. It brings together Workflow Coordinators, Business Segment Leaders, and Underwriters in a collaborative ecosystem. Coordinators kick-start the process by initiating new cases, segment leaders assign cases, and underwriters manage critical tasks such as client evaluations, generating quotes, and rate releases. Key features include tailored dashboards, role-based access controls, real-time task notifications, and advanced reporting capabilities. UWCMS ensures a seamless workflow, efficient resource allocation, and enhanced client service by centralizing operations and offering the right tools to each role.',
      technologies: [
        'NextJs 13',
        'NodeJS',
        'Java',
        'Camunda',
        'Rest API',
        'MongoDB',
        'Kafka',
        'Azure',
        'Github Actions',
        'Jenkins',
      ],
      tools: ['VS-Code', 'IntelliJ IDEA', 'Postman'],
      database: ['MongoDB'],
      environment: ['MacOS'],
    },
    {
      id: 3,
      img: MyFonts,
      currentOrg: labels.publicisSapient,
      account: labels.monotypeImaging,
      link: 'https://www.myfonts.com/',
      name: 'MyFonts.com E-commerce (Monotype Imaging)',
      role: labels.developer,
      status: 'Completed',
      teamSize: 10,
      startDate: new Date('2022-04-12'),
      endDate: new Date('2023-04-24'),
      description:
        'MyFonts.com is a dynamic, user-friendly e-commerce platform designed for digital fonts, offering both a consumer-facing marketplace and a robust management system for administrators. Customers browse a rich catalog of fonts, exploring detailed product pages, adding selections to their shopping cart, and managing their accounts. On the admin side, the team efficiently manages product details, including images, prices, and brand names. The platform’s intuitive interface provides a smooth shopping experience, while the back-end ensures the effortless integration of new products and up-to-date information. A seamless fusion of design and functionality, MyFonts offers an impeccable digital font shopping experience.',
      technologies: ['NextJs 12', 'ReactJS', 'NodeJS', 'Mongoose', 'JWT', 'JavaScript'],
      tools: ['VS-Code', 'MongoDB Compass', 'Postman'],
      database: ['MongoDB'],
      environment: ['MacOS'],
    },
    {
      id: 4,
      img: Telenor,
      currentOrg: labels.dxc,
      account: labels.telenorGroup,
      link: 'https://iot.telenor.com/',
      name: 'Storage Allocation & Reallocation APP (Telenor Group)',
      role: labels.developer,
      status: 'Completed',
      teamSize: 4,
      startDate: new Date('2020-11-01'),
      endDate: new Date('2021-05-01'),
      description:
        'SARA (Storage Allocation and Expansion) is an all-in-one automation tool designed to manage and expand storage seamlessly. Whether it’s for a new storage request or expanding existing storage (LUN), SARA handles it all, simplifying complex operations. Supporting various storage types like EMC-Unity and 3PAR, SARA automates the process of data transfer, import/export, and format processing, offering a hassle-free experience for IT administrators. With SARA’s end-to-end solution, users can request new storage, manage storage expansion, and transfer data with minimal effort, ensuring smooth operations across all storage systems.',
      technologies: ['ReactJS', 'NodeJS', 'Sequelize ORM', 'JWT', 'JavaScript', 'ExpressJS'],
      tools: ['VS-Code', 'MySQL Workbench', 'Postman'],
      database: ['MySQL'],
      environment: ['Windows 10'],
    },
  ],
  skills: {
    Frontend: [
      {
        name: 'React.js',
        percentage: '95%',
        icon: ReactJsIcon,
        color: '#61DBFB',
        rating: 4,
      },
      {
        name: 'Next.js (SSR/SSG)',
        percentage: '95%',
        icon: NextJsIcon,
        color: '#61DBFB',
        rating: 4,
      },
      {
        name: 'Micro Frontend Architecture',
        percentage: '80%',
        icon: MaterialUiIcon,
        color: '#0081CB',
        rating: 3,
      },
      {
        name: 'Redux.js',
        percentage: '80%',
        icon: ReactJsIcon,
        color: '#764ABC',
        rating: 3.5,
      },
      {
        name: 'JavaScript (ES6+)',
        percentage: '95%',
        icon: JavaScriptIcon,
        color: '#F0DB4F',
        rating: 4,
      },
      {
        name: 'TypeScript',
        percentage: '75%',
        icon: TypeScriptIcon,
        color: '#3178C6',
        rating: 3,
      },
      {
        name: 'HTML5',
        percentage: '75%',
        icon: HtmlIcon,
        color: '#E34C26',
        rating: 3.5,
      },
      {
        name: 'CSS3',
        percentage: '50%',
        icon: CssIcon,
        color: '#264DE4',
        rating: 3,
      },
      {
        name: 'Tailwind CSS',
        percentage: '50%',
        icon: tailwindIcon,
        color: '#38B2AC',
        rating: 3,
      },
      {
        name: 'Material UI',
        percentage: '80%',
        icon: MaterialUiIcon,
        color: '#0081CB',
        rating: 3,
      },
    ],
    Backend: [
      {
        name: 'Node.js',
        percentage: '90%',
        icon: NodeJsIcon,
        color: '#68A063',
        rating: 3,
      },
      {
        name: 'Nest.js',
        percentage: '90%',
        icon: NodeJsIcon,
        color: '#68A063',
        rating: 3,
        hide: true,
      },
      {
        name: 'Express.js',
        percentage: '80%',
        icon: NodeJsIcon,
        color: '#68A063',
        rating: 3,
      },
      {
        name: 'REST APIs',
        percentage: '80%',
        icon: NodeJsIcon,
        color: '#68A063',
        rating: 3,
      },
      {
        name: 'GraphQL',
        percentage: '75%',
        icon: NodeJsIcon,
        color: '#E10098',
        rating: 3,
      },
      {
        name: 'MongoDB',
        percentage: '70%',
        icon: NodeJsIcon,
        color: '#4DB33D',
        rating: 3,
      },
      {
        name: 'Java Spring Boot',
        percentage: '70%',
        icon: NodeJsIcon,
        color: '#4DB33D',
        rating: 3,
        hide: true,
      },
      {
        name: 'Python 3 (Flask/Django)',
        percentage: '70%',
        icon: NodeJsIcon,
        color: '#4DB33D',
        rating: 3,
        hide: true,
      },
    ],
    Tooling: [
      {
        name: 'Git',
        percentage: '80%',
        icon: ReactJsIcon,
        color: '#211F1F',
        rating: 3.5,
      },
      {
        name: 'VS Code',
        percentage: '85%',
        icon: ReactJsIcon,
        color: '#007ACC',
        rating: 3.5,
      },
      {
        name: 'Eclipse',
        percentage: '70%',
        icon: ReactJsIcon,
        color: '#2C2255',
        rating: 3,
      },
      {
        name: 'Jest',
        percentage: '70%',
        icon: ReactJsIcon,
        color: '#C21325',
        rating: 3,
      },
      {
        name: 'Postman',
        percentage: '75%',
        icon: ReactJsIcon,
        color: '#FF6C37',
        rating: 3,
      },
      {
        name: 'IntelliJ IDEA',
        percentage: '75%',
        icon: ReactJsIcon,
        color: '#FF6C37',
        rating: 3,
      },
      {
        name: 'Sublime Text',
        percentage: '75%',
        icon: ReactJsIcon,
        color: '#FF6C37',
        rating: 3,
      },
      {
        name: 'Jupyter Notebook',
        percentage: '75%',
        icon: ReactJsIcon,
        color: '#FF6C37',
        rating: 3,
      },
    ],
    Methodologies: [
      {
        name: 'Agile',
        percentage: '80%',
        icon: ReactJsIcon,
        color: '#000000',
        rating: 3.5,
      },
      {
        name: 'Scrum',
        percentage: '80%',
        icon: ReactJsIcon,
        color: '#000000',
        rating: 3.5,
      },
      {
        name: 'CI/CD',
        percentage: '75%',
        icon: ReactJsIcon,
        color: '#000000',
        rating: 3,
      },
      {
        name: 'Rally',
        percentage: '75%',
        icon: ReactJsIcon,
        color: '#000000',
        rating: 3,
      },
      {
        name: 'Jira',
        percentage: '75%',
        icon: ReactJsIcon,
        color: '#000000',
        rating: 3,
      },
    ],
    SoftSkills: [
      {
        name: 'Mentorship',
        percentage: '85%',
        icon: ReactJsIcon,
        color: '#000000',
        rating: 3.5,
      },
      {
        name: 'Teamwork',
        percentage: '80%',
        icon: ReactJsIcon,
        color: '#000000',
        rating: 3.5,
      },
      {
        name: 'Problem-Solving',
        percentage: '85%',
        icon: ReactJsIcon,
        color: '#000000',
        rating: 3.5,
      },
    ],
  },
  education: [
    {
      degree: 'B.Tech in Electrical & Electronics Engineering',
      institution: 'Silicon Institute of Technology, Bhubaneswar, Odisha',
      startDate: new Date('2017-05-01'),
      endDate: new Date('2020-06-12'),
      description:
        'BTech in Electrical & Electronics Engineering (7.8 CGPA) from Silicon Institute of Technology Bhubaneswar, Odisha. Batch of 2020.',
      logo: silicon,
      highest: true,
      cgpa: '7.8',
    },
    {
      degree: 'Senior Secondary Education',
      institution: 'Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha',
      startDate: new Date('2014-05-01'),
      endDate: new Date('2017-05-01'),
      description:
        'Senior Secondary Education in Electrical Engineering (8.3 CGPA) from Kalinga Institute of Industrial Technology (KIIT University), Bhubaneswar, Odisha. Batch of 2017.',
      logo: kiit,
      highest: false,
      cgpa: '8.3',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Venkateswar English Medium School, Bhubaneswar, Odisha',
      startDate: new Date('2011-04-01'),
      endDate: new Date('2012-05-01'),
      description:
        'Higher Secondary Education in PCMB with (6.3 CGPA) from Venkateswar English Medium School (CISCE Board affiliated Delhi), Bhubaneswar, Odisha. Batch of 2012.',
      logo: 'data:image/jpeg;base64,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',
      highest: false,
      cgpa: '6.3',
    },
  ],
  certificates: [
    {
      name: 'Sapient Snap Engineer Award',
      link: '',
      param: '',
      date: new Date('2024-01-01'),
      desc: 'Received in 2024 from Publicis Sapient',
    },
    {
      name: 'Publicis Slingshot Award',
      link: '',
      param: '',
      date: new Date('2024-01-01'),
      desc: 'Received in 2024 from Publicis Sapient',
    },
    {
      name: 'Oracle Cloud Certified',
      link: 'Oracle',
      param: 'oracle-eCertificate.pdf',
      date: new Date('2023-01-01'),
      desc: 'Certified by Oracle in 2023',
    },
    {
      name: 'DXC Champ Award',
      link: 'champ',
      param: 'Champ.pdf',
      date: new Date('2021-10-01'),
      desc: 'Received in Q4 FY2021 from DXC Technology',
    },
    {
      name: 'DXC Collaborator Award',
      link: 'COLLABORATING',
      param: 'DXC_COL_AWARD.pdf',
      date: new Date('2021-10-01'),
      desc: 'Received in Q4 FY2021 from DXC Technology',
    },
  ],
  languages: [
    { name: 'English', proficiency: 'Fluent', rate: 4.5 },
    { name: 'Hindi', proficiency: 'Intermediate', rate: 4 },
    { name: 'Odia', proficiency: 'Native', rate: 4.5 },
  ],
};
export default Data;

interface PortfolioConfig {
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  projectImages: { [key: number]: string };
}

export const portfolioConfig: PortfolioConfig = {
  theme: {
    primary: '#ffffff',
    secondary: '#1a202c',
    accent: '#4a90e2',
  },
  projectImages: {
    1: 'https://via.placeholder.com/400x200?text=Optum+UWCMS', // Fallback for invalid Optum image
    2: 'https://via.placeholder.com/400x200?text=MyFonts.com', // Fallback for invalid MyFonts image
    3: 'https://via.placeholder.com/400x200?text=SARA+Telenor', // Fallback for invalid SARA image
  },
};
