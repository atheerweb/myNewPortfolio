import { NavLink } from "../index";
import { navLinks } from "../../utils/constants";
const DesktopNavLinks = () => {
  return (
    <ul className="hidden sm:flex gap-10 items-center justify-center">
      {navLinks.map((link, linkIndex) => (
        <NavLink key={linkIndex} link={link} />
      ))}
    </ul>
  );
};

export default DesktopNavLinks;
