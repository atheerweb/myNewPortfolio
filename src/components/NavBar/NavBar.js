import "./NavBar.scss";
import { useState, useEffect } from "react";
const NavBar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const [activeNavMobile, setActiveNavMobile] = useState(false);
  const activate = () => {
    console.log(window.scrollY);
    if (window.scrollY < 443) {
      document.querySelectorAll(".nav__link").forEach((link) => {
        link.classList.remove("nav__active");
        link.childNodes[2].childNodes[0].classList.remove("nav__bar__active");
        link.childNodes[0].childNodes[0].classList.remove("nav__bar__active");
      });
      document.querySelector("#nav__0").classList.add("nav__active");
      document
        .querySelector("#nav__0")
        .childNodes[2].childNodes[0].classList.add("nav__bar__active");
      document
        .querySelector("#nav__0")
        .childNodes[0].childNodes[0].classList.add("nav__bar__active");
    } else if (window.scrollY < 800) {
      document.querySelectorAll(".nav__link").forEach((link) => {
        link.classList.remove("nav__active");
        link.childNodes[2].childNodes[0].classList.remove("nav__bar__active");
        link.childNodes[0].childNodes[0].classList.remove("nav__bar__active");
      });
      document.querySelector("#nav__1").classList.add("nav__active");
      document
        .querySelector("#nav__1")
        .childNodes[2].childNodes[0].classList.add("nav__bar__active");
      document
        .querySelector("#nav__1")
        .childNodes[0].childNodes[0].classList.add("nav__bar__active");
    } else {
      document.querySelectorAll(".nav__link").forEach((link) => {
        link.classList.remove("nav__active");
        link.childNodes[2].childNodes[0].classList.remove("nav__bar__active");
        link.childNodes[0].childNodes[0].classList.remove("nav__bar__active");
      });
      document.querySelector("#nav__2").classList.add("nav__active");
      document
        .querySelector("#nav__2")
        .childNodes[2].childNodes[0].classList.add("nav__bar__active");
      document
        .querySelector("#nav")
        .childNodes[0].childNodes[0].classList.add("nav__bar__active");
    }
    if (window.scrollY > 0) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };
  const navPc = (e) => {
    document.querySelectorAll(".nav__link").forEach((link) => {
      link.classList.remove("nav__active");
      link.childNodes[2].childNodes[0].classList.remove("nav__bar__active");
      link.childNodes[0].childNodes[0].classList.remove("nav__bar__active");
    });
    e.target.classList.add("nav__active");
    e.target.childNodes[2].childNodes[0].classList.add("nav__bar__active");
    e.target.childNodes[0].childNodes[0].classList.add("nav__bar__active");
    let section = document.getElementById(e.target.getAttribute("data"));
    section.scrollIntoView({
      behavior: "smooth",
    });
  };
  const navMo = (e) => {
    let section = document.getElementById(e.target.getAttribute("data"));
    setActiveNavMobile(false);
    section.scrollIntoView({
      behavior: "smooth",
    });
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
        <li
          className="nav__link nav__active"
          onClick={navPc}
          data="aboutme"
          id="nav__0"
        >
          <div className="nav__bar__wrapper ">
            <div className="nav__bar nav__bar__active"></div>
          </div>
          About Me
          <div className="nav__bar__wrapper nav__right" id="bottom__right">
            <div className="nav__bar nav__bar__active"></div>
          </div>
        </li>
        <li
          className="nav__link"
          onClick={navPc}
          data="testimonials"
          id="nav__1"
        >
          <div className="nav__bar__wrapper">
            <div className="nav__bar"></div>
          </div>
          Testimonials
          <div className="nav__bar__wrapper nav__right" id="bottom__right">
            <div className="nav__bar"></div>
          </div>
        </li>
        <li
          className="nav__link"
          onClick={navPc}
          data="recentprojects"
          id="nav__2"
        >
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
        className={activeNavMobile ? "nav__bar__mobile__active" : ""}
      >
        <div
          className="nav__mobile__exit"
          onClick={() => setActiveNavMobile(false)}
        >
          <div className="cross"></div>
          <div className="cross cross__reverse"></div>
        </div>
        <div className="nav__links__container">
          <div className="nav__links__mobile__wrapper">
            <li data="aboutme" onClick={navMo}>
              About Me
            </li>
            <li data="testimonials" onClick={navMo}>
              Testimonials
            </li>
            <li data="recentprojects" onClick={navMo}>
              Recent Projects
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
