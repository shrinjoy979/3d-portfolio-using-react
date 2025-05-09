import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  laravel,
  sql,
  git,
  nextjs,
  figma,
  php,
  rust,
  solana,
  prisma,
  tRPC,
  tetriqSolutions,
  think201,
  betalogics,
  ultimateBlogApp,
  chatbot,
  portfolio,
  snakeWin,
  SOLi,
  aiObjectDetector
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Aspiring SOLANA Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "SOLANA",
    icon: solana,
  },
];

const experiences = [
  {
    title: "Software Engineer Full Time",
    company_name: "TetriQ Solutions PVT LTD - REMOTE",
    icon: tetriqSolutions,
    iconBg: "#383E56",
    date: "November 2023 - Currently Working",
    points: [
      "Maintained full-stack web applications using ReactJS, Node.js, MUI, CSS, JavaScript, TypeScript, MongoDB and GraphQL",
      "Developed new features and maintained existing ones",
      "Optimized web application performance and scalability"
    ],
  },
  {
    title: "Software Engineer Full Time",
    company_name: "THINK201",
    icon: think201,
    iconBg: "#383E56",
    date: "December 2019 - September 2023",
    points: [
      "Developed and maintained full-stack web applications using Next.js, ReactJS, Angular, MUI, CSS, JavaScript, jQuery, TypeScript, PHP, Laravel, Node.js, SQL, and Ionic Framework.",
      "Implemented and maintained integration with third-party services and libraries.",
      "Developed new features and maintained existing ones.",
      "Developed and maintained client-side and server-side APIs for mobile and web applications.",
      "Optimized web application performance and scalability.",
      "Participated in code reviews to ensure adherence to best practices and standards.",
      "Provided technical guidance and mentorship to junior developers.",
    ],
  },
  {
    title: "Software Engineer Internship",
    company_name: "THINK201",
    icon: think201,
    iconBg: "#E6DEDD",
    date: "August 2019 - December 2019",
    points: [
      "The main work that I have done in the organization is related to front-end and back-end development using  WordPress, HTML, SASS, JavaScript,  jQuery, Bootstrap, PHP, Laravel, and SQL. Apart from this, I have exposure to working in mobile App development using Ionic Framework. ",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Internship",
    company_name: "Betalogics Consultancy Services",
    icon: betalogics,
    iconBg: "#383E56",
    date: "January 2019 - August 2019",
    points: [
      "Within this position, I used to build mobile responsive web pages, build APIs, and handle databases using HTML, CSS, JavaScript, jQuery, PHP, SQL, Ajax, and WordPress.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SnakeWin",
    description: "A real-time multiplayer Snake and Ladder game where players place bets using Solana. The winner takes double the bet amount of Solana rewards, classic gameplay.",
    tags: [
      {
        name: "Solana",
        color: "blue-text-gradient",
      },
      {
        name: "Web3.js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
    ],
    image: snakeWin,
    source_code_link: "https://github.com/shrinjoy979/multiplayer-snake-and-ladder-game-frontend",
    live_link: "https://snake-win.vercel.app/"
  },
  {
    name: "SOLi",
    description: "Developed a robust feature enabling users to create custom tokens, request airdrops, transfer Solana among accounts, sign messages, and swap tokens.",
    tags: [
      {
        name: "Solana",
        color: "blue-text-gradient",
      },
      {
        name: "Web3.js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: SOLi,
    source_code_link: "https://github.com/shrinjoy979/SOLi",
    live_link: "https://sol-i.vercel.app/"
  },
  {
    name: "AI - Thief Detection",
    description: "AI Theft Detection Alarm system instantly triggers a loud security alert when a camera detects unauthorized human presence or intrusion.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      }
    ],
    image: aiObjectDetector,
    source_code_link: "https://github.com/shrinjoy979/ai-object-detector-nextjs",
    live_link: "https://ai-object-detector.vercel.app/"
  },
  {
    name: "Ultimate Blog App",
    description: "A web platform where users can publish blogs, follow others, share posts, and engage through comments and discussions.",
    tags: [
      {
        name: "tRPC",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
    ],
    image: ultimateBlogApp,
    source_code_link: "https://github.com/shrinjoy979/ultimate-blog-app-using-t3-stack",
  },
  {
    name: "ChatGPT Chatbot",
    description: "An interacting Node.js chatbot using ChatGPT.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link:
      "https://github.com/shrinjoy979/chatgpt-chatbot-using-nodejs",
  },
  {
    name: "3D Portfolio",
    description: "A 3D portfolio using React.js, Three.js, and tailwind.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/shrinjoy979/3d-portfolio-using-react",
  },
];

export { services, technologies, experiences, testimonials, projects };
