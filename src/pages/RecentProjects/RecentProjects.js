import { motion } from "framer-motion";
import { animationConfiguration } from "../../utils/constants";

function RecentProjects() {
  return (
    <div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      transition="transition"
    >
      <h1>hi</h1>;
    </div>
  );
}

export default RecentProjects;
