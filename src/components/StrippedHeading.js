import { motion } from "framer-motion";

const content = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 2.8 },
  },
};

const titleAnimation = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

function StrippedHeading({ title }) {
  return (
    <motion.div className="w-fit" variants={content}>
      <div className="w-24 h-3 bg-primaryColor rounded-full my-3"></div>
      <h2 className="text-4xl font-black uppercase" variants={titleAnimation}>
        {title}
      </h2>
      <div className="flex justify-end">
        <div className="w-24 h-3 bg-primaryColor rounded-full my-3"></div>
      </div>
    </motion.div>
  );
}

export default StrippedHeading;
