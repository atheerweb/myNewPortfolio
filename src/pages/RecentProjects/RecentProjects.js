import { motion } from "framer-motion";
import { animationConfiguration } from "../../utils/constants";
import { projects } from "../../utils/constants";

function RecentProjects() {
  const filter = (e) => {
    document.querySelectorAll(".filter__button").forEach((button) => {
      button.classList.remove("filter__active");
      e.target.classList.add("filter__active");
    });

    const filter = e.target.getAttribute("data");

    if (filter === "lms") {
      document.querySelectorAll(".project").forEach((project) => {
        if (project.classList[1] === "lms") {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    } else if (filter === "blogs") {
      document.querySelectorAll(".project").forEach((project) => {
        if (project.classList[1] === "blogs") {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    } else if (filter === "e-commerce") {
      document.querySelectorAll(".project").forEach((project) => {
        if (project.classList[1] === "e-commerce") {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    } else if (filter === "other") {
      document.querySelectorAll(".project").forEach((project) => {
        if (project.classList[1] === "other") {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    } else {
      document.querySelectorAll(".project").forEach((project) => {
        project.style.display = "block";
      });
    }
  };
  const projectTypes = ["all" , 'lms' ,'blogs' , 'e-commerce' , 'other'];
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
          <button key={projectTypeIndex} className="w-fit p-2 px-5 rounded-md shadow-md capitalize font-medium text-gray-500">{projectType}
          </button>
         ))}
        </div>
        <div className="flex  flex-wrap gap-4">
          {projects.map((project) => {
            return (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.name}
              >
                <div className='bg-gradient-to-t from-primaryColor  to-primaryColorLighter p-10 rounded-2xl h-96 text-white '>
                  <div className="w-56 h-56">
                    <img src={project.img} className="object-cover rounded-md" alt="" />
                  </div>
                  <p className="text-sm mt-2">{project.category}</p>
                  <h4 className=" text-xl font-bold">{project.name}</h4>
                  <p className="text-xs">{project.date}</p>
                  <div className="flex gap-2 my-2">
                    {projects[project.key].techs.map((tech) => {
                      return (
                        <img
                          src={tech}
                          alt=""
                          key={tech}
                        />
                      );
                    })}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RecentProjects;
