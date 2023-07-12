import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    top: "100%",
    transition: {
      duration: 1,
      when: "afterChildren",
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

function InitialTransition() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="relative z-50 w-full bg-primaryColor flex items-center justify-center"
        initial="initial"
        animate="animate"
        variants={blackBox}
      >
        <motion.svg className="absolute z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={text}
              className="w-full h-full text-primaryColor fill-current"
            />
          </pattern>
          <text
            className="text-5xl font-bold font-serif"
            text-anchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            YOUSOUF
          </text>
          <motion.svg
            variants={textContainer}
            className="absolute z-50 flex"
          ></motion.svg>
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default InitialTransition;
