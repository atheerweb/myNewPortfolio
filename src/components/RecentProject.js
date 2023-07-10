function RecentProject({ project }) {
  return (
    <a href={project.link} target="_blank" rel="noreferrer" key={project.name}>
      <div className="bg-gradient-to-t from-primaryColor  to-primaryColorLighter p-10 rounded-2xl h-96 text-white ">
        <div className="w-56 h-56">
          <img src={project.img} className="object-cover rounded-md" alt="" />
        </div>
        <p className="text-sm mt-2">{project.category}</p>
        <h4 className=" text-xl font-bold">{project.name}</h4>
        <p className="text-xs">{project.date}</p>
        <div className="flex gap-2 my-2">
          {project.techs.map((tech) => {
            return <img src={tech} alt="" key={tech} />;
          })}
        </div>
      </div>
    </a>
  );
}

export default RecentProject;
