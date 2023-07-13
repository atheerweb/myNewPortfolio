import { motion } from "framer-motion";

import { titleAnimation, titleStripes } from "../utils/animations";

const content = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 2.8 },
  },
};

function StrippedHeading({ title }) {
  return (
    <motion.div className="w-fit m-auto sm:m-0" animate="animate" variants={content}>
      <motion.div
        className="h-3 bg-primaryColor rounded-full my-3"
        initial="initial"
        animate="animate"
        variants={titleStripes}
      ></motion.div>
      <motion.h2
        className="text-3xl sm:text-4xl font-black uppercase"
        initial="initial"
        animate="animate"
        variants={titleAnimation}
      >
        {title}
      </motion.h2>
      <div className="flex justify-end">
        <motion.div
          className="h-3 bg-primaryColor rounded-full my-3"
          initial="initial"
          animate="animate"
          variants={titleStripes}
        ></motion.div>
      </div>
    </motion.div>
  );
}

export default StrippedHeading;
