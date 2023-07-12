import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { stripes } from "../../utils/animations";

const NavLink = ({ link }) => {
  const location = useLocation();
  const checkActiveRoute = (link) => {
    return link.route === location.pathname
      ? " h-1 w-0 bg-primaryColor rounded-lg my-1"
      : "";
  };
  return (
    <li className="">
      <motion.div
        initial={link.route === location.pathname ? "initial" : ""}
        animate={link.route === location.pathname ? "animate" : ""}
        variants={stripes}
        className={checkActiveRoute(link)}
      ></motion.div>

      <Link to={link.route}>{link.name}</Link>
      <div className="flex justify-end">
        <motion.div
          initial={link.route === location.pathname ? "initial" : ""}
          animate={link.route === location.pathname ? "animate" : ""}
          variants={stripes}
          className={checkActiveRoute(link)}
        ></motion.div>
      </div>
    </li>
  );
};

export default NavLink;
