import { ChangeTitle } from "../../utils/ChangeTitle";
import { linkedIn, github, profilepicture } from "../../assets/index";
import { titleAnimation } from "../../utils/animations";

import { motion } from "framer-motion";



const Home = () => {
  ChangeTitle("Yousouf Mustafa | Home");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="flex flex-col sm:flex-row-reverse items-center justify-between">
    {/* 👉 PROFILE PICTURE */}
        <img
          src={profilepicture}
          className="w-full h-full   sm:w-2/5 sm:h-2/5 rounded-lg"
          alt="profile"
        />
        <motion.div
          initial="initial"
          animate="animate"
          className="flex flex-col gap-5 sm:gap-14"
        >
        {/* 👉 JOB TITLE */}
          <motion.div
            variants={titleAnimation}
            className="flex mt-5 sm:mt-0  sm:gap-6 flex-col"
          >
            <h1 className="text-3xl sm:text-5xl font-black text-center sm:text-start uppercase sm:leading-10">
              full-stack developer
            </h1>
            <h1 className="text-3xl sm:text-5xl font-black text-center sm:text-start uppercase sm:leading-10">
              front end heavy
            </h1>
          </motion.div>
          {/* 👉 ABOUT ME */}
          <motion.p
            variants={titleAnimation}
            className="sm:w-9/12 text-base sm:text-lg  leading-7 sm:leading-9 text-gray-500 text-center sm:text-start"
          >
            Making Web software solutions for more than 4 years from scratch
            mainly Blogs,LMS,E-commerce with the latest technologies need more
            info?
            <a
              href="https://drive.google.com/file/d/1N9Rb-kGZds8RPsSCjGpVBcuT256BFMkK/view?usp=sharing"
              className="text-blue-600 underline"
            >
              download resume
            </a>
          </motion.p>
          {/* 👉 BUTTONS */}
          <div className="flex items-center sm:items-start justify-center sm:justify-start gap-6">
            <a
              href="https://www.linkedin.com/in/yousouf-essa-7029531b7/"
              target="_blank"
              rel="noreferrer"
              className="btn__link"
            >
              <button className="bg-linkedin rounded-md flex gap-2 items-center justify-center w-40 sm:w-48 h-14  text-white">
                <img src={linkedIn} alt="" />
                LinkedIn
              </button>
            </a>
            <a
              href="https://github.com/atheerweb"
              target="_blank"
              rel="noreferrer"
              className="btn__link"
            >
              <button className="bg-black rounded-md  text-white flex items-center justify-center gap-2  w-40 sm:w-48 h-14">
                <img src={github} alt="" />
                Github
              </button>
            </a>
          </div>
        </motion.div>
      </header>
    </motion.div>
  );
};

export default Home;
