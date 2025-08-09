import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
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
import Me from 'src/images/Me.png';
import MyFonts from 'src/images/MyFonts.svg';
import Optum from 'src/images/Optum.svg';
import sapient from 'src/images/sapient.jpeg';
import silicon from 'src/images/silicon.png';
import Telenor from 'src/images/Telenor.png';
// import champ from "../../pdfs/Champ.pdf";
// import COLLABORATING from "../../pdfs/DXC_COL_AWARD.pdf";
// import Oracle from "../../pdfs/oracle-eCertificate.pdf";

export interface SocialLink {
  name: string;
  url: string;
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
  icon: any;
  color: string;
  rating: number;
}

export interface Project {
  id: number;
  img: string;
  link: string;
  name: string;
  role: string;
  status: string;
  teamSize: number;
  startDate: Date;
  endDate: Date;
  description: string;
  technologies: string[];
  tools: string[];
  database: string[];
  environment: string[];
}

export interface Experience {
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
  logo: string;
  present: boolean;
  upcoming: boolean;
  jobDescription?: string;
}

export interface ResumeData {
  name: string;

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

export const calculateCurrentExperienceInYears = (): number => {
  const start = new Date('2020-07-02');
  const today = new Date();
  return today.getFullYear() - start.getFullYear();
};
const Data: ResumeData = {
  name: 'Rahul Ranjan Nayak',

  jobTitle: 'Senior Experience Engineer | React.js & Next.js Specialist',
  company: 'Publicis Sapient',
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
  noticePeriod: '60 Days',
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
      title: 'Senior Experience Engineer',
      company: 'Publicis Sapient, Bangalore, India',
      dates: 'Apr 2024 - Present',
      responsibilities: [
        'Led frontend development for enterprise applications using Next.js 13 and React.js, ensuring scalability and performance.',
        'Architected reusable components and SSR solutions, improving page load speed by 20 percent.',
        'Mentored junior developers on best practices, boosting team efficiency by 15 percent.',
      ],
      logo: sapient,
      present: true,
      upcoming: false,
      jobDescription:
        'NextJS, React.JS, Node.JS, JavaScript, HTML5, CSS3, Tailwind CSS, MongoDB, Jest.',
    },
    {
      title: 'Associate Technology Level 2',
      company: 'Publicis Sapient, Bangalore, India',
      dates: 'Apr 2022 - Mar 2024',
      responsibilities: [
        'Built scalable web platforms with Next.js and Node.js, supporting 100K+ users.',
        'Integrated RESTful and GraphQL APIs, enhancing data retrieval by 25 percent.',
        'Optimized user experience, reducing bounce rates by 10 percent through responsive designs.',
      ],
      logo: sapient,
      present: false,
      upcoming: false,
      jobDescription:
        'NextJS, React.JS, Node.JS, JavaScript, HTML5, CSS3, Tailwind CSS, MongoDB, Jest.',
    },
    {
      title: 'Associate Professional',
      company: 'DXC Technology, Bangalore, India',
      dates: 'Jul 2020 - Apr 2022',
      responsibilities: [
        'Developed modular React.js components for enterprise applications, improving maintainability.',
        'Collaborated with product owners to translate requirements into technical solutions.',
        'Optimized frontend performance, achieving 15 percent faster load times with responsive designs.',
      ],
      logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAACBCAMAAAB6ve/eAAAAY1BMVEX///9fJJ8AAACHWre/v7/XyOevkc9/f38/Pz/18floMaV8TLHh1u3DrdubdsPv7+8PDw9yP6tfX1+5n9Wlg8nr5PMvLy/f39/NuuGfn58fHx/Pz89vb2+RaL2vr69PT0+Pj49agTMiAAAH60lEQVR4nO1baZfqIAzVsa6j01pnXOr6/3/lK0spkEBoxfo8h/tlHMqSC0kI22iUkJCQkJCQkJCQ0BFjDyaTyWw3dRScIAV2YW3+IEV/8azL6ey3FsMnZB9mEt+/GLvlFsm6DiG2C5Xv+PtNS/cMsxqrHyjzGsu3pIlNkXJbWO6IjWx8ZjW+N3bRDZaLJPa3QjrE7rflDNOIFzGrO9bmhvXqD0FsiSmYVfFyhrB/JbN6RCyDC5DSRoD32HTgFYtZPSSGQSwxGbxeBNNgU7Y/nyN8IbPx1hi2rl6Ezt9twGIysyatbl6EHONloEPUEJGZ6SQ6eRHKLlH3QiAms/FV158OXoTqhT7E4jIbf2vUMA0D8xMHpbm9iEVmNr5qNQTGFKT36EcsNjNDicLiQMp79CQWnZnhIYNid8oeu3tFASezqRubegHhnl2o7ra8yC+ShRp4ge1kNju6pQxaXmBY7xyxqW5KdJRLeQ/MCHme3V9fyQMwxeMdXd8oL7LGqOsy40b280paQnC0YT3O8nsRdJVKFR9fX86LYYa0bERRXi9C7Sygc+JxCF41pkjjZGAkhaO8B9Yt3709Q2cgprLVv7u9COo99Kn8j/j+BmqGZz86CJDeAxmyQYlhfW+uVzBbvNLeA7EyPO58IaC9mLsHV4TDjN6XhI5xKOfRAngJcyUWGvpdzVrBoFrfhwCYkFfmd8ykICwjAuFHyKZldAB9s/QG8yJAcMuIgI7PhuPTAvhnO6THvIi/M4CKv2XIYDQBdnMwL+IdkeV/MWSI57czoE5eA/AOwHYHiRYhQA+DYxq/F4FTsO3z6ZOBF2FtLfygUWDBVANkCv6LtZIcAFgALDH8FBwXzp35NzmHeHB5EedmzOcA9yLYJuTHAV39/8++IRiopTmuD3wUHN6ROA79ALhmtMEXlLHhjkI+3If4Isc3rCmDcZ2YgArmPUGHc/XGqvBdfgYsgEFk7omtGEB8ZS9WV3aGgWDLDeTwxcO8gD3IYDH7ntgSbKDZhkPvhIB1jF3iPTEYGBHr3l/I7pXdGWAV7rp3+ErAPU/LzMi9AgbLi4Deeseggf2bb+I7DtOSwDL9DZYGDyZNZUR39ulLFWBbf/DdKzgFmyKgRxNr10FGC3hgOvSEDqdgY/PbdYKGqai5aw4LDrv4Ro7vDP+BnlewD+SZBTIHDrksQIgZPY+fMTHQ50xIhsGoYapmHO9htwsacyLPBrHC1LXdSDhioYVuDP4bIeR5LqawQ5xU4xdCttRtME2hqDN45KR6/PrrIBvHskS3FPLmFeVFHHP8z6sm7eV054yXdMHp23KkF3EFnKufTc84cuKG/+hBqyPkhiPqRYirW1ptbimdK1VffR7ori3o1QR5pwzrnhBEvt+46ngHkIG6RUytWR2IzEw37OA3V1QP9KMWl5kuT/CbK/q2fi9qMZkZNoRduXRtK5IvLPpQi8hsazyK6PQyhnyR0fntSExmE2NAOr5mIl9krDvfAI/FbGWuoju/QCN7YknsV76K2cSM5Lq/GgzQ3mnwc8F4zLZWFNfnpWeIx+nyZDAGM/AYsvu7OoaQWaLLc8inmV1h1N3jLSRD2My+CXUlzzG77hAd6/N+lSE0GvvbBZHrzWw7meGriH5vjrnIwe+6lkff+xWC2cyN3XTqWRrtkBKBO6BrpKhHjWsxPFJ+/uF3QkJCQkJCQkLChyDPahz6lmaFz2SuA8uWoy3ThS18GeAy6AlzJdlCJFQn+X/7sSk4GrE88vu8/pkpgcuCFy7mSmrju8RpL9pYGB9Uy6Lwhf2WHczyL55kVrZJ+9zLrDgDyU+FKlw0XQ+Z5Yu2jbJN1VquWOG8UnQerEKnFoUxK0Gak5lkrkl+MprIHMzyvZ5LjYSRemMpt6aWvNC6HmLOwOVlaGRezCUyJcZXccmyS13ZfuRnJjq8lfwsEk/Zg38ucpzZnY/KPLtdCq1LVcvzSqWxnJXs7r2TmC2bKXPTnYUairwUf33MuKm1knMVFT8frabZzLimlLzuAx8nrmWHVglG80ZF5VjxEpRfIZiddH3OQS7AjLWnJD8oNRoJ8y9QZqUcCF6Eif5ouqIAvlLYF+N/IYhBZgtDGe9fuk2DXCYzJlWVt5I/NJFHubI0m1nxpdyq6IBFUyEiPUuuRDtdmTWYq4puVhHDz+jMHkzGeyv53BBOVWUzY5XkeuX7hm+mtSZLHMx/n2NmV+JklnFX+DCYtcq9aP7DmJmVN6kIM+FYgB71Y3ayiriZiSnirjNrRdi7tJGVUVPTrdHGysGM1wMNMICZ6UFKrl+QWZlx2MzUzMTlOOkycDU6Y8wqvVXV4EJ2y6E2Z0NzbkDIXsxOWnflGchlMxudC40ZdxqNoTVTEWTGvaYcND4DciV5qJ6wSkAhezHjHSqmpPNe6qWPmQgTGjlKRU1ESieUGR9NHj6NskLx51OXaDm/R2FWLSREZwtJ90IjhGheZiJslXLw2emrKuciLJZRA2O21xuZN20IXb612fj0Igo/z0xBxm8XPS2AmQj3pBznQissAwopst6IEZsqh2WktuFvNGZauF4EaKMcqKaHz21Ye298CWSmJRXa7KllvLdxfSgzphLqn/NCg5pjD5eKd3mzwmK5TnbpS/1L2vut/ck6hse7Rdla1glppGnjYbhzmVqVeoyoNR8Dh4AJxI2wRTHeRv5UywkJCQkJCQkJL8U/4/RqnK9Vfo8AAAAASUVORK5CYII=',
      present: false,
      upcoming: false,
      jobDescription: 'React.JS, Node.JS, MongoDB, MySQL, JavaScript, HTML5, CSS3, Tailwind CSS.',
    },
  ],
  keyProjects: [
    {
      id: 1,
      img: Optum,
      link: 'https://www.optum.com/en/',
      name: 'Underwriters Case Management System (Optum)',
      role: 'Developer',
      status: 'In Progress',
      teamSize: 12,
      startDate: new Date('2023-05-01'),
      endDate: new Date(),
      description:
        'The Underwriters Case Management System (UWCMS) is an advanced platform designed to simplify and optimize the client onboarding and order fulfillment processes for underwriters. It brings together Workflow Coordinators, Business Segment Leaders, and Underwriters in a collaborative ecosystem. Coordinators kick-start the process by initiating new cases, segment leaders assign cases, and underwriters manage critical tasks such as client evaluations, generating quotes, and rate releases. Key features include tailored dashboards, role-based access controls, real-time task notifications, and advanced reporting capabilities. UWCMS ensures a seamless workflow, efficient resource allocation, and enhanced client service by centralizing operations and offering the right tools to each role.',
      technologies: [
        'NextJs 13',
        'NodeJS',
        'Java',
        'Camunda',
        'Rest API',
        'MongoDB',
        'Tailwind CSS',
      ],
      tools: ['VS-Code', 'IntelliJ IDEA', 'Postman'],
      database: ['MongoDB'],
      environment: ['MacOS'],
    },
    {
      id: 2,
      img: MyFonts,
      link: 'https://www.myfonts.com/',
      name: 'MyFonts.com E-commerce Web Application (Monotype Imaging)',
      role: 'Developer',
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
      id: 3,
      img: Telenor,
      link: 'https://iot.telenor.com/',
      name: 'Storage Allocation & Reallocation APP (Telenor Group)',
      role: 'Developer',
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
