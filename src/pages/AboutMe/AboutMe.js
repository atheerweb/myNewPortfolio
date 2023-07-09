
import { ChangeTitle } from "../../utils/ChangeTitle";
import { linkedIn, github, profilepicture } from "../../assets/index";
import { animationConfiguration } from "../../utils/constants";

import { motion } from "framer-motion";

const Home = () => {
  ChangeTitle("Yosuof Mustafa | Home");

  return (
    <div
      id="home__container"
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      transition="transition"
    >
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
    </div>
  );
};

export default Home;
