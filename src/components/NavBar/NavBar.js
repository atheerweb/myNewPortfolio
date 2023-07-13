import { useState, useEffect } from "react";
import { navLinks } from "../../utils/constants";
import { SideMenu, NavLink } from "../index";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleSideMenu = () => {
    return setIsActive(!isActive);
  };
  return (
    <div>
    <nav className="flex justify-between items-center w-full bg-white sticky top-0 py-10 px-5 sm:py-14">
      <Link to="/">
        <h1 className="font-serif text-4xl font-bold">YOUSOUF</h1>
      </Link>
      <div
        className="sm:hidden flex flex-col justify-end items-end gap-1"
        onClick={toggleSideMenu}
      >
        <div className="bg-primaryColor w-7 h-1 rounded"></div>
        <div className="bg-primaryColor w-9 h-1 rounded"></div>
        <div className="bg-primaryColor w-11 h-1 rounded"></div>
      </div>
      <ul className="hidden sm:flex gap-10 items-center justify-center">
        {navLinks.map((link, linkIndex) => (
          <NavLink key={linkIndex} link={link} />
        ))}
      </ul>
    </nav>
    <SideMenu isActive={isActive} toggleSideMenu={toggleSideMenu} />
    </div>
  );
};

export default NavBar;
