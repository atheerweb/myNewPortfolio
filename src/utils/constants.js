import {
  firebaseImg,
  sass,
  nuxt,
  vue,
  react,
  vanillajs,
  linkedIn,
  github,
  facebook,
  whatsapp,
} from "../assets/index";

const sections = ["testimonials", "recentprojects"];

const companies = [
  {
    logo: "alroaa",
    name: "alroaaacademy",
    text: '"I have worked with yousouf he is really an amazing programmer he helped me a lot in designing the new website for our academy and he exerted a lot of effort in translating our needs and one of his excelling charachterstics is sticking to the contract tasks and sticking to the deadline"',
    reviewer: "Muhammad Mangod , CEO",
  },
];
let projects = [
  {
    category: "E-commerce",
    name: "Cashiern",
    date: "july 2023 ~ january 2024",
    techs: [vue],
    link: "https://dev.nqde.net/",
    data: "e-commerce",
    img: `${process.env.PUBLIC_URL}/images/projects/almini-freelance.png`,
  },
  {
    category: "Freelance",
    name: "almini freelance",
    date: "march 2023 ~ june 2023",
    techs: [react],
    link: "https://graduation-project-frontend-ashen.vercel.app/",
    data: "freelance",
    img: `${process.env.PUBLIC_URL}/images/projects/almini-freelance.png`,
  },
  {
    category: "Learning management systems",
    name: "almini courses",
    date: "march 2023 ~ june 2023",
    techs: [react],
    link: "https://graduation-project-courses.vercel.app/",
    data: "lms",
    img: `${process.env.PUBLIC_URL}/images/projects/almini-courses.png`,
  },
  {
    category: "Freelance",
    name: "doworkss web",
    date: "jan 2023 ~ july 2023",
    techs: [sass, nuxt, firebaseImg],
    link: "https://staging.doworkss.com/",
    data: "freelance",
    img: `${process.env.PUBLIC_URL}/images/projects/doworkss.png`,
  },
  {
    category: "E-commerce",
    name: "Meta Store",
    date: "july 2022 ~ ",
    techs: [sass, nuxt],
    link: "https://metacode.store/",
    data: "e-commerce",
    img: `${process.env.PUBLIC_URL}/images/projects/meta-store.png`,
  },
  {
    category: "Learning management systems",
    name: "Alroaa Academy",
    date: "November 2021 ~ March 2022",
    techs: [firebaseImg, sass, nuxt],
    link: "https://rq22-21e1e.web.app/",
    data: "lms",
    img: `${process.env.PUBLIC_URL}/images/projects/alroaa-platform.png`,
  },
  {
    category: "Blogs",
    name: "Alroaa Blog demo",
    date: "August 2020 ~ Jan 2021",
    techs: [firebaseImg, sass, vue],
    link: "https://alroaaacademyblog.web.app/",
    data: "blogs",
    img: `${process.env.PUBLIC_URL}/images/projects/alroaa-blog.png`,
  },
  {
    category: "Learning management systems",
    name: "Alamini Platform(old)",
    date: "March 2022 ~ May 2022",
    techs: [firebaseImg, react],
    link: "https://alaminilms.web.app/",
    data: "lms",
    img: `${process.env.PUBLIC_URL}/images/projects/alimini-old.png`,
  },
  {
    category: "E-Commerce",
    name: "Witty stores demo",
    date: "March 2022 ~ March 2022",
    techs: [react, firebaseImg, sass],
    link: "https://wittystore.netlify.app/",
    data: "e-commerce",
    img: `${process.env.PUBLIC_URL}/images/projects/witty-store.png`,
  },
  {
    category: "Other",
    name: "Calculator",
    date: "March 2021 ~ May 2021",
    techs: [vanillajs],
    link: "https://atheerweb.github.io/Calculator/",
    data: "other",
    img: `${process.env.PUBLIC_URL}/images/projects/calculator.png`,
  },
  {
    category: "E-Commerce",
    name: "Stabraq",
    date: "Apirl 2020 ~ Apirl 2020",
    techs: [vanillajs],
    link: "https://atheerweb.github.io/stabraq/",
    data: "e-commerce",
    img: `${process.env.PUBLIC_URL}/images/projects/stabraq.png`,
  },
  {
    category: "Other",
    name: "Todo-list",
    date: "March 2021 ~ May 2021",
    techs: [vanillajs],
    link: "https://atheerweb.github.io/todolistproject/",
    data: "other",
    img: `${process.env.PUBLIC_URL}/images/projects/todo-app.png`,
  },
];

const navLinks = [
  { name: "About Me", route: "/" },
  { name: "Projects", route: "/recent-projects" },
  { name: "Testimonials", route: "/testimonials" },
];
// { name: "Contact Me", route: "/contact-me" },

const animationConfiguration = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: {
    duration: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
    scale: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      restDelta: 0.001,
    },
  },
};

const socialMedia = [
  {
    name: "facebook",
    img: facebook,
    link: "https://web.facebook.com/yousouf.shehata/",
  },
  {
    name: "Whatsapp",
    img: whatsapp,
    link: "wa.link/r8kvkf",
  },
  {
    name: "LinkedIn",
    img: linkedIn,
    link: "https://www.linkedin.com/in/yousouf-essa-7029531b7/",
  },
  {
    name: "Github",
    img: github,
    link: "https://github.com/atheerweb",
  },
];

const projectTypes = [
  "all",
  "lms",
  "blogs",
  "e-commerce",
  "freelance",
  "other",
];

export {
  sections,
  companies,
  projects,
  navLinks,
  animationConfiguration,
  socialMedia,
  projectTypes,
};
