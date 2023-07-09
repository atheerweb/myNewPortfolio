import "./NavBar.scss";
import { useState, useEffect } from "react";
import { navLinks } from "../../utils/constants";
import { SideMenu, NavLink } from "../index";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleSideMenu = () => {
    return setIsActive(!isActive);
  };
  useEffect(() => {
    // window.addEventListener("scroll", activate);
  });
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">YOUSOUF</h1>
      </Link>
      <div id="nav__button" onClick={toggleSideMenu}>
        <div className="button__bar"></div>
        <div className="button__bar"></div>
        <div className="button__bar"></div>
      </div>
      <ul id="nav__pc">
        {navLinks.map((link, linkIndex) => (
          <NavLink key={linkIndex} link={link} />
        ))}
      </ul>
      <SideMenu isActive={isActive} toggleSideMenu={toggleSideMenu} />
    </nav>
  );
};

export default NavBar;
