import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavLink = ({ link }) => {
  const location = useLocation();
  const checkActiveRoute = (link) => {
    return link.route === location.pathname
      ? "w-7 h-1 bg-primaryColor rounded-lg my-1"
      : "";
  };
  return (
    <li className="">
      <div className={checkActiveRoute(link)}></div>

      <Link to={link.route}>{link.name}</Link>
      <div className="flex justify-end">
        <div className={checkActiveRoute(link)}></div>
      </div>
    </li>
  );
};

export default NavLink;
