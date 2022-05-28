import "./Home.scss";
import linkedIn from "./../../imgs/linkedin.svg";
import github from "./../../imgs/github.svg";
import { ChangeTitle } from "../../utils/ChangeTitle";
import profilepicture from "./../../imgs/profilepicture.jpg";
import firebaseImg from "../../imgs/firebase.svg";
import sass from "../../imgs/sass.svg";
import nuxt from "../../imgs/nuxt.svg";
const Home = () => {
  ChangeTitle("Yosuof Mustafa | Home");
  const sections = ["testimonials", "recent projects", "contact me"];
  const companys = [
    {
      logo: "alroaa",
      name: "alroaaacademy",
      text: '"I have worked with yousouf he is really an amazing programmer he helped me a lot in designing the new website for our academy and he exerted a lot of effort in translating our needs and one of his excelling charachterstics is sticking to the contract tasks and sticking to the deadline"',
      reviewer: "Muhammad Mangod , CEO",
    },
  ];
  const projects = [
    {
      category: "Learning management systems",
      name: "Alroaa Academy",
      date: "November 2021 ~ March 2022",
      techs: [firebaseImg, sass, nuxt],
      key: 0,
      link: "https://rq22-21e1e.web.app/",
    },
  ];
  for (let i = 0; i < projects.length; i++) {
    projects[i]["img"] = `${process.env.PUBLIC_URL}/images/${i}.png`;
  }
  return (
    <div id="home__container">
      <header>
        <img src={profilepicture} alt="profile" id="profile" />
        <h1 className="home__titles">
          full stack developer <br />
          front end heavy
        </h1>
        <p id="home__paragraph">
          Making Web software solutions for more than 4 years from scratch
          mainly Blogs,LMS,E-commerce with the latest technologies need more
          info?
          <a
            href="https://drive.google.com/file/d/1JW4tk-Acxn4LbQss9pK5Nw__PA4GAap0/view?usp=sharing"
            id="resume"
          >
            download resume
          </a>
        </p>
        <div id="btns__wrapper">
          <a
            href="https://www.linkedin.com/in/yousouf-essa-7029531b7/"
            target="_blank"
            rel="noreferrer"
            className="btn__link"
          >
            <button className="btn" id="linkedin__btn">
              <img src={linkedIn} alt="" />
              LinkedIn
            </button>
          </a>
          <a
            href="https://github.com/atheerweb"
            target="_blank"
            rel="noreferrer"
            className="btn__link"
          >
            <button className="btn" id="github__btn">
              <img src={github} alt="" />
              Github
            </button>
          </a>
        </div>
      </header>
      {sections.map((section) => {
        return (
          <section className="sections__container" id={section} key={section}>
            <div className="title__wrapper">
              <div className="title__bar__wrapper">
                <div className="title__bar"></div>
              </div>
              <h1 className="home__titles">{section}</h1>
              <div className="title__bar__wrapper" id="bottom__right">
                <div className="title__bar"></div>
              </div>
            </div>
            {section === "testimonials" ? (
              <div id={`${section}__wrapper`}>
                {companys.map((company, index) => {
                  return (
                    <div className="reviews__wrapper">
                      <img
                        src={require(`./../../imgs/${company.logo}.svg`)}
                        key={index}
                        alt={company.name}
                        id={`${company.name}__img`}
                      />
                      <p id="review__text" key={index}>
                        {company.text}
                      </p>
                      <div className="reviewer__wrapper">
                        <p id="reviewer" key={index}>
                          {company.reviewer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : section === "recent projects" ? (
              <div id="recent__projects">
                <div className="filters">
                  <button className="filter__button">All</button>
                  <button className="filter__button">LMS</button>
                  <button className="filter__button">Blogs</button>
                  <button className="filter__button">Other</button>
                </div>
                {projects.map((project) => {
                  return (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project"
                      key={project.name}
                    >
                      <div className="project__image__container">
                        <img
                          src={project.img}
                          className="project__image"
                          alt=""
                        />
                      </div>
                      <p className="project__category">{project.category}</p>
                      <h4 className="project__name">{project.name}</h4>
                      <p className="project__date">{project.date}</p>
                      <div className="project__techs">
                        {projects[project.key].techs.map((tech, keyy) => {
                          return (
                            <img
                              src={tech}
                              alt=""
                              className="project__tech"
                              key={keyy}
                            />
                          );
                        })}
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <h1>dcdc</h1>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default Home;
