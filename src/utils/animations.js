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

const stripes = {
  initial: {
    width: 0,
  },
  animate: {
    width: "1.75em",
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const titleStripes = {
  initial: {
    width: 0,
  },
  animate: {
    width: "6em",
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export { titleAnimation, stripes, titleStripes };
