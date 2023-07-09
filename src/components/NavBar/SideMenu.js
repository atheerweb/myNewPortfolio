

import { navLinks } from "../../utils/constants";
import { useRef } from "react";

const SideMenu = ({ isActive, toggleSideMenu }) => {
  const checkActiveState = () => {
    return isActive ? "active" : "";
  };
  const linkRef = useRef(null);

  function handleClick() {
    document.querySelector(".projects").scrollIntoView({
      behavior: "smooth",
    });
    toggleSideMenu();
  }

  return (
    <ul id="nav__links__mobile" className={checkActiveState()}>
      <div className="nav__mobile__exit" onClick={toggleSideMenu}>
        <div className="cross"></div>
        <div className="cross cross__reverse"></div>
      </div>
      <div className="nav__links__container">
        <div className="nav__links__mobile__wrapper">
          {navLinks.map((link, linkIndex) => (
            <li
              data={link.name}
              key={linkIndex}
              onClick={handleClick}
              ref={linkRef}
            >
              {link.name}
            </li>
          ))}
        </div>
      </div>
    </ul>
  );
};

export default SideMenu;
