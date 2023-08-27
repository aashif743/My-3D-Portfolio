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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Sourcecode,
  Wordpress,
  ReactJss,
  Reactnative,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "React",
    icon: ReactJss,
    iconBg: "#383E56",
    date: "FEB 2022 - JUN 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Mobile App",
    icon: Reactnative,
    iconBg: "#E6DEDD",
    date: "JUL 2022 - NOV 2022",
    points: [
      "Building and managing mobile apps with React Native and related tools.",
      "Working closely with designers, product managers, and developers to deliver top-notch solutions.",
      "Ensuring responsive design and compatibility across various devices.",
      "Contributing to code reviews and offering valuable feedback to peers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Wordpress",
    icon: Wordpress,
    iconBg: "#383E56",
    date: "JAN 2023 - MAY 2023",
    points: [
      "Crafting and maintaining WordPress websites using expert knowledge in themes and plugins.",
      "Collaborating with diverse teams to deliver high-quality digital solutions.",
      "Implementing responsive design for seamless user experiences across devices.",
      "Participating in code reviews, providing constructive insights to team members.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Developer",
    icon: Sourcecode,
    iconBg: "#E6DEDD",
    date: "JUN 2023 - PRESENT",
    points: [
      "Creating and managing end-to-end applications as a full-stack developer.",
      "Collaborating across teams to deliver comprehensive, high-quality solutions.",
      "Ensuring seamless user experiences with responsive design and cross-device compatibility.",
      "Contributing constructively to code reviews, enhancing team collaboration.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "An absolute pleasure to work with Aashif. Their coding skills are top-notch, delivering our project ahead of schedule without compromising quality. Highly recommended!",
    name: "Emily Brown",
    designation: "CTO",
    company: "Visionary Ventures",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Impressed by Aashif's expertise! They turned our complex requirements into a sleek web app that functions flawlessly. He is a true asset to any development project.",
    name: "John Smith",
    designation: "Founder",
    company: "InnovateTech Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Aashif worked wonders on our outdated website, crafting a modern masterpiece. Their creativity, responsiveness, and attention to detail exceeded expectations.",
    name: "Lisa Wang",
    designation: "Marketing Director",
    company: "Dynamic Media Group",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
