import { motion } from "framer-motion";
import { sections, animationConfiguration } from "../../utils/constants";
import { RecentProject, StrippedHeading } from "../../components/index";
import { AlroaaAcademyLogo } from "../../assets/index";

function Testimonials() {
  return (
    <div className="flex justify-between items-center py-20">
      <StrippedHeading title={"testimonials"} />
      <div className="bg-white shadow-md rounded-md w-96 flex flex-col p-5 gap-1  justify-center">
      <div className=" flex items-center justify-center">
        <img src={AlroaaAcademyLogo} alt="alroaa academy logo" className="w-20" />
      </div>
        <b className="italic text-center">
        “Yousouf is a very creative programmer at our company Yousouf is a very creative programmer at our company”
        </b>
        <p className="text-sm mt-3">~Muhammad Mangod,CEO</p>
      </div>
    </div>
  );
}

export default Testimonials;
