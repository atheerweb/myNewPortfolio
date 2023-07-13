import { navLinks } from "../../utils/constants";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./SideMenu.scss";

const SideMenu = ({ isActive, toggleSideMenu }) => {
  const checkActiveState = () => {
    return isActive ? "visible" : "hidden";
  };

  return (
    <ul
      className={`fixed bg-primaryColor text-white top-0 p-10  h-screen w-screen z ${checkActiveState()}`}
    >
      <div
        className="w-full flex flex-row-reverse py-10"
        onClick={toggleSideMenu}
      >
      <div>
        <div className="w-16 h-1 relative rotate-45 bg-white rounded top-1"></div>
        <div className="w-16 h-1 bg-white rounded negative-rotate-45"></div>
      </div>
      </div>
      <div className="">
        <div className="flex flex-col gap-10">
          {navLinks.map((link, linkIndex) => (
            <Link
              to={link.route}
              key={linkIndex}
              className="text-3xl font-semibold"
              onClick={toggleSideMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </ul>
  );
};

export default SideMenu;
