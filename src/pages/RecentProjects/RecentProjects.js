import { motion } from "framer-motion";
import { RecentProject, StrippedHeading } from "../../components/index";
import {
  projects,
  projectTypes,
  animationConfiguration,
} from "../../utils/constants";
import { useState } from "react";

function RecentProjects() {
  const [chosenFilter, setChosenFilter] = useState("all");
  return (
    <div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      transition="transition"
    >
      <div>
        <StrippedHeading title={"recent projects"} />

        <div className="flex gap-3 my-5">
          {projectTypes.map((projectType, projectTypeIndex) => (
            <button
              key={projectTypeIndex}
              className={`w-fit p-2 px-5 rounded-md shadow-md capitalize  ${
                chosenFilter === projectType
                  ? "text-primaryColor font-bold bg-white"
                  : "bg-gray-100 text-neutral-400"
              }`}
              onClick={() => {
                setChosenFilter(projectType);
              }}
            >
              {projectType}
            </button>
          ))}
        </div>
        <div className="flex  flex-wrap gap-4">
          {projects.map((project) => {
            if (chosenFilter !== "all" && project.data === chosenFilter) {
              return <RecentProject project={project} />;
            }
            if (chosenFilter === "all") {
              return <RecentProject project={project} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
