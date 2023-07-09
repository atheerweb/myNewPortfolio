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
    <nav className="flex justify-between align-middle p-10 fixed w-screen bg-white">
      <Link to="/">
        <h1 className="font-serif text-4xl font-bold">YOUSOUF</h1>
      </Link>
      {/* <div className="flex flex-col gap-1" onClick={toggleSideMenu}>
        <div className="bg-primaryColor w-6 h-1"></div>
        <div className="bg-primaryColor w-8 h-1"></div>
        <div className="bg-primaryColor w-10 h-1"></div>
      </div> */}
      <ul className="flex gap-10">
        {navLinks.map((link, linkIndex) => (
          <NavLink key={linkIndex} link={link} />
        ))}
      </ul>
      {/* <SideMenu isActive={isActive} toggleSideMenu={toggleSideMenu} /> */}
    </nav>
  );
};

export default NavBar;
