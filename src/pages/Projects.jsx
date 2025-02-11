import { useEffect} from "react";
import Project from "../components/Project";
function Projects() {
  const projects = [
    { name: "Weather App", url: "example.com", images: ["./src/assets/images/employeeTrackerCLI.png"], description: "A weather forecasting app." , stack: ["React", "Node.js", "MongoDB"] },
    { name: "Todo List", url: "example.com", images: ["./src/assets/images/employeeTrackerCLI.png"], description: "A simple todo list app.",stack: ["React", "Node.js", "MongoDB"] },
    { name: "Portfolio", url: "example.com", images: ["./src/assets/images/employeeTrackerCLI.png"], description: "My personal portfolio website." , stack: ["React", "Node.js", "MongoDB"]},
    { name: "E-commerce", url: "example.com", images: ["./src/assets/images/employeeTrackerCLI.png"], description: "An e-commerce platform.", stack: ["React", "Node.js", "MongoDB"] },
  ];

  useEffect(() => {
    document.title = "Stan Moriasi | Projects";
  }, []);

  return (
    <div className="projects-container h-[100vh]" id="projects">
      <h1 className="title text-center text-[35px]">Sample Projects</h1>
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;