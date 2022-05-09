import "./Home.scss";
import linkedIn from "./../../imgs/linkedin.svg";
import github from "./../../imgs/github.svg";
import { ChangeTitle } from "../../utils/ChangeTitle";
import profilepicture from "./../../imgs/profilepicture.png";
const Home = () => {
  ChangeTitle("Yosuof Mustafa | Home");
  const sections = ["testimonials", "recent projects", "contact me"];
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
      {sections.map((section , index) => {
        return (
          <section id="sections__container" key={index}>
            <div id="title__wrapper">
              <div className="title__bar__wrapper">
                <div className="title__bar"></div>
              </div>
              <h1 className="home__titles">{section}</h1>
              <div className="title__bar__wrapper" id="bottom__right">
                <div className="title__bar"></div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Home;
