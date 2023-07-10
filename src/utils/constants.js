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
    name: "Meta Store",
    date: "july 2022 ~ ",
    techs: [sass, nuxt],
    key: 0,
    link: "https://metacode.store/",
    data: "e-commerce",
  },
  {
    category: "Learning management systems",
    name: "Alroaa Academy",
    date: "November 2021 ~ March 2022",
    techs: [firebaseImg, sass, nuxt],
    key: 1,
    link: "https://rq22-21e1e.web.app/",
    data: "lms",
  },
  {
    category: "Blogs",
    name: "Alroaa Blog demo",
    date: "August 2020 ~ Jan 2021",
    techs: [firebaseImg, sass, vue],
    key: 2,
    link: "https://alroaaacademyblog.web.app/",
    data: "blogs",
  },
  {
    category: "Learning management systems",
    name: "Alamini Platform",
    date: "March 2022 ~ May 2022",
    techs: [firebaseImg, react],
    key: 3,
    link: "https://alaminilms.web.app/",
    data: "lms",
  },
  {
    category: "E-Commerce",
    name: "Witty stores demo",
    date: "March 2022 ~ March 2022",
    techs: [react, firebaseImg, sass],
    key: 4,
    link: "https://wittystore.netlify.app/",
    data: "e-commerce",
  },
  {
    category: "Other",
    name: "Calculator",
    date: "March 2021 ~ May 2021",
    techs: [vanillajs],
    key: 5,
    link: "https://atheerweb.github.io/Calculator/",
    data: "other",
  },
  {
    category: "E-Commerce",
    name: "Stabraq",
    date: "Apirl 2020 ~ Apirl 2020",
    techs: [vanillajs],
    key: 6,
    link: "https://atheerweb.github.io/stabraq/",
    data: "e-commerce",
  },
  {
    category: "Other",
    name: "Todo-list",
    date: "March 2021 ~ May 2021",
    techs: [vanillajs],
    key: 7,
    link: "https://atheerweb.github.io/todolistproject/",
    data: "other",
  },
];
for (let i = 0; i < projects.length; i++) {
  projects[i]["img"] = `${process.env.PUBLIC_URL}/images/${i}.png`;
}

const navLinks = [
  { name: "About Me", route: "/" },
  { name: "Testimonials", route: "testimonials" },
  { name: "Projects", route: "recent-projects" },
  { name: "Contact Me", route: "contact-me" },
];

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
    link: "wa.link/eqt8qd",
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

const projectTypes = ["all", "lms", "blogs", "e-commerce", "other"];

export {
  sections,
  companies,
  projects,
  navLinks,
  animationConfiguration,
  socialMedia,
  projectTypes,
};
