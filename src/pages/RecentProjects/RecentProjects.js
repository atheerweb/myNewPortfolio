import { motion } from "framer-motion";
import { RecentProject } from "../../components/index";
import { projects , projectTypes , animationConfiguration } from "../../utils/constants";
import { useState } from "react";

function RecentProjects() {

const [chosenFilter, setChosenFilter] = useState('all')
  return (
    <div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      transition="transition"
    >
      <div>
      <div className="w-fit">
          <div className="w-24 h-3 bg-primaryColor rounded-full my-3"></div>
          <h2 className="text-4xl font-black uppercase">recent projects</h2>
          <div className="flex justify-end">
            <div className="w-24 h-3 bg-primaryColor rounded-full my-3"></div>
          </div>
      </div>
  
        <div className="flex gap-3 my-5">
         {projectTypes.map((projectType , projectTypeIndex)=>(
          <button key={projectTypeIndex} className={`w-fit p-2 px-5 rounded-md shadow-md capitalize  text-gray-500' ${chosenFilter === projectType ? "text-primaryColor font-bold" : ''}`} onClick={()=> {setChosenFilter(projectType)}}>
          {projectType}
          </button>
         ))}
        </div>
        <div className="flex  flex-wrap gap-4">
          {projects.map((project) => {
              if(chosenFilter !== 'all' && project.data === chosenFilter){
                return <RecentProject project={project}/> 
              }
             if(chosenFilter === 'all'){
              return <RecentProject project={project}/> 
             }
            
          })}
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
