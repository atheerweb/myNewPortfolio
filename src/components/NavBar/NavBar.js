import "./NavBar.scss";
import { useState, useEffect } from "react";
const NavBar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [activeNavMobile, setActiveNavMobile] = useState(false);
  const activate = () => {
    if (window.scrollY > 0) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", activate);
  });
  return (
    <nav id={activeNav ? "nav__scroll" : ""}>
      <h1 className="logo">YOUSOUF</h1>
      <div id="nav__button" onClick={() => setActiveNavMobile(true)}>
        <div className="button__bar"></div>
        <div className="button__bar"></div>
        <div className="button__bar"></div>
      </div>
      <ul id="nav__pc">
        <li className="nav__link nav__active">
          <div className="nav__bar__wrapper nav__bar__active">
            <div className="nav__bar"></div>
          </div>
          About Me
          <div
            className="nav__bar__wrapper nav__right nav__bar__active"
            id="bottom__right"
          >
            <div className="nav__bar"></div>
          </div>
        </li>
        <li className="nav__link">
          <div className="nav__bar__wrapper">
            <div className="nav__bar"></div>
          </div>
          Testimonials
          <div className="nav__bar__wrapper nav__right" id="bottom__right">
            <div className="nav__bar"></div>
          </div>
        </li>
        <li className="nav__link">
          <div className="nav__bar__wrapper">
            <div className="nav__bar"></div>
          </div>
          Projects
          <div className="nav__bar__wrapper nav__right" id="bottom__right">
            <div className="nav__bar"></div>
          </div>
        </li>
      </ul>
      <ul
        id="nav__links__mobile"
        className={activeNavMobile ? "nav__bar__active" : ""}
      >
        <div className="nav__mobile__exit" onClick={() => setActiveNavMobile(false)}>
          <div className="cross"></div>
          <div className="cross cross__reverse"></div>
        </div>
        <div className="nav__links__container">
          <div className="nav__links__mobile__wrapper">
            <li>About Me</li>
            <li>Testimonials</li>
            <li>Recent Projects</li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
