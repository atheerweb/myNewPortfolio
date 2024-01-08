import { useState } from "react";
import { SideMenu, DesktopNavLinks, HamBurgerMenu } from "../index";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleSideMenu = () => {
    return setIsActive(!isActive);
  };
  return (
    <div className="sticky top-0">
      <nav className="flex justify-between items-center w-full bg-white py-10 px-5 sm:py-14">
        {/* 👉 LOGO */}
        <Link to="/">
          <h1 className="font-serif text-4xl font-bold">YOUSOUF</h1>
        </Link>
        <HamBurgerMenu toggleSideMenu={toggleSideMenu} />
        <DesktopNavLinks />
      </nav>
      <SideMenu isActive={isActive} toggleSideMenu={toggleSideMenu} />
    </div>
  );
};

export default NavBar;
