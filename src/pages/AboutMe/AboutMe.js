import { ChangeTitle } from "../../utils/ChangeTitle";
import { linkedIn, github, profilepicture } from "../../assets/index";
import { InitialTransition } from "../../components";

import { motion } from "framer-motion";

const Home = () => {
  ChangeTitle("Yousouf Mustafa | Home");

  return (
    <motion.div     
      initial={{ opacity: 0  }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
  
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-14">
          <div className="flex gap-6 flex-col">
            <h1 className="text-5xl font-black uppercase leading-10">
              full-stack developer
            </h1>
            <h1 className="text-5xl font-black uppercase leading-10">
              front end heavy
            </h1>
          </div>

          <p className="w-9/12 text-lg  leading-9 text-gray-500">
            Making Web software solutions for more than 4 years from scratch
            mainly Blogs,LMS,E-commerce with the latest technologies need more
            info?
            <a
              href="https://drive.google.com/file/d/1N9Rb-kGZds8RPsSCjGpVBcuT256BFMkK/view?usp=sharing"
              className="text-blue-600 underline"
            >
              download resume
            </a>
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/yousouf-essa-7029531b7/"
              target="_blank"
              rel="noreferrer"
              className="btn__link"
            >
              <button className="bg-linkedin rounded-md flex gap-2 items-center justify-center w-48 h-14  text-white">
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
              <button className="bg-black rounded-md  text-white flex items-center justify-center gap-2  w-48 h-14">
                <img src={github} alt="" />
                Github
              </button>
            </a>
          </div>
        </div>
        <img
          src={profilepicture}
          className="w-2/5 h-2/5 rounded-lg"
          alt="profile"
        />
      </header>
    </motion.div>
  );
};

export default Home;
