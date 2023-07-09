import { Link } from "react-router-dom";

const NavLink = ({ link }) => {
  return (
    <li className="nav__link nav__active" data="aboutme" id="nav__0">
      <div className="nav__bar__wrapper ">
        <div className="nav__bar nav__bar__active"></div>
      </div>

      <Link to={link.route}>{link.name}</Link>
      <div className="nav__bar__wrapper nav__right" id="bottom__right">
        <div className="nav__bar nav__bar__active"></div>
      </div>
    </li>
  );
};

export default NavLink;
