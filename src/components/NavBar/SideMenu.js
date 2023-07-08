import "./SideMenu.scss";

import { navLinks } from "../../utils/constants";

const SideMenu = ({ isActive, toggleSideMenu }) => {
  const checkActiveState = () => {
    return isActive ? "active" : "";
  };

  return (
    <ul id="nav__links__mobile" className={checkActiveState()}>
      <div className="nav__mobile__exit" onClick={toggleSideMenu}>
        <div className="cross"></div>
        <div className="cross cross__reverse"></div>
      </div>
      <div className="nav__links__container">
        <div className="nav__links__mobile__wrapper">
          {navLinks.map((link, linkIndex) => (
            <li data={link} key={linkIndex}>
              {link}
            </li>
          ))}
        </div>
      </div>
    </ul>
  );
};

export default SideMenu;
