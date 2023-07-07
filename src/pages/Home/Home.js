import "./Home.scss";
import { ChangeTitle } from "../../utils/ChangeTitle";
import {
  linkedIn,
  github,
  profilepicture,
} from "../../assets/index";

import { sections, companies, projects } from "../../utils/constants";

const Home = () => {
  ChangeTitle("Yosuof Mustafa | Home");

  const filter = (e) => {
    document.querySelectorAll(".filter__button").forEach((button) => {
      button.classList.remove("filter__active");
      e.target.classList.add("filter__active");
    });

    const filter = e.target.getAttribute("data");

    if (filter === "lms") {
      document.querySelectorAll(".project").forEach((project) => {
        if (project.classList[1] === "lms") {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    } else if (filter === "blogs") {
      document.querySelectorAll(".project").forEach((project) => {
        if (project.classList[1] === "blogs") {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    } else if (filter === "e-commerce") {
      document.querySelectorAll(".project").forEach((project) => {
        if (project.classList[1] === "e-commerce") {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    } else if (filter === "other") {
      document.querySelectorAll(".project").forEach((project) => {
        if (project.classList[1] === "other") {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    } else {
      document.querySelectorAll(".project").forEach((project) => {
        project.style.display = "block";
      });
    }
  };

  return (
    <div id="home__container">
      <header id="aboutme">
        <img src={profilepicture} alt="profile" id="profile" />
        <div id="profile__text">
          <h1 className="home__titles">
            full stack developer <br />
            front end heavy
          </h1>
          <p id="home__paragraph">
            Making Web software solutions for more than 4 years from scratch
            mainly Blogs,LMS,E-commerce with the latest technologies need more
            info?
            <a
              href="https://drive.google.com/file/d/1N9Rb-kGZds8RPsSCjGpVBcuT256BFMkK/view?usp=sharing"
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
                {companies.map((company) => {
                  return (
                    <div className="reviews__wrapper" key={company.name}>
                      <img
                        src={require(`./../../assets/images/${company.logo}.svg`)}
                        key={company.name}
                        alt={company.name}
                        id={`${company.name}__img`}
                      />
                      <p id="review__text">{company.text}</p>
                      <div className="reviewer__wrapper">
                        <p id="reviewer">{company.reviewer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div id="recent__projects">
                <div className="filters">
                  <button
                    className="filter__button filter__active"
                    onClick={filter}
                    data="all"
                  >
                    All
                  </button>
                  <button
                    className="filter__button"
                    onClick={filter}
                    data="lms"
                  >
                    LMS
                  </button>
                  <button
                    className="filter__button"
                    onClick={filter}
                    data="blogs"
                  >
                    Blogs
                  </button>
                  <button
                    className="filter__button"
                    onClick={filter}
                    data="e-commerce"
                  >
                    e-commerce
                  </button>
                  <button
                    className="filter__button"
                    onClick={filter}
                    data="other"
                  >
                    other
                  </button>
                </div>
                <div className="projects">
                  {projects.map((project) => {
                    return (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        key={project.name}
                      >
                        <div className={`project ${project.data}`}>
                          <div className="project__image__container">
                            <img
                              src={project.img}
                              className="project__image"
                              alt=""
                            />
                          </div>
                          <p className="project__category">
                            {project.category}
                          </p>
                          <h4 className="project__name">{project.name}</h4>
                          <p className="project__date">{project.date}</p>
                          <div className="project__techs">
                            {projects[project.key].techs.map((tech) => {
                              return (
                                <img
                                  src={tech}
                                  alt=""
                                  className="project__tech"
                                  key={tech}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default Home;
