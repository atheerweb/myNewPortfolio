import "./SideMenu.scss";

import { navLinks } from "../../utils/constants";

const SideMenu = () => {
  return (
    <ul id="nav__links__mobile">
      <div className="nav__mobile__exit">
        <div className="cross"></div>
        <div className="cross cross__reverse"></div>
      </div>
      <div className="nav__links__container">
        <div className="nav__links__mobile__wrapper">
          {navLinks.map((link) => (
            <li data={link}>{link}</li>
          ))}
        </div>
      </div>
    </ul>
  );
};

export default SideMenu;
