import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: "0",
  },
  animate: {
  
  },
};

function InitialTransition() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <motion.div
        className="relative z-50 w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
      />
    </div>
  );
}

export default InitialTransition;
