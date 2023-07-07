import "./NavBar.scss";
import NavLink from "./NavLink";
import SideMenu from "../SideMenu/SideMenu";
import { useState, useEffect } from "react";
import { navLinks } from "../../utils/constants";

const NavBar = () => {
  useEffect(() => {
    // window.addEventListener("scroll", activate);
  });
  return (
    <nav>
      <h1 className="logo">YOUSOUF</h1>
      <div id="nav__button">
        <div className="button__bar"></div>
        <div className="button__bar"></div>
        <div className="button__bar"></div>
      </div>
      <ul id="nav__pc">
        {navLinks.map((link, linkIndex) => (
          <NavLink key={linkIndex} link={link} />
        ))}
      </ul>

      
    </nav>
  );
};

export default NavBar;
