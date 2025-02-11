import { useEffect} from "react";
import Project from "../components/Project";
function Projects() {
  const projects = [
    { name: "Employee Tracker", url: "https://github.com/stanmoriasi/employee-tracker-using-nodejs", images: ["/assets/images/employeeTrackerCLI.png"], description: "This project is used to perform basic operations on an employee database. The project utilizes Postgres database on the backend, and Inquirer package for generating user prompts on a command line interface.." , stack: [ "Nodejs", "Postgres"] },
    { name: "5 Day Weather Forecast", url: "https://github.com/stanmoriasi/five-day-weather-dashboard", images: ["/assets/images/employeeTrackerCLI.png"], description: "This project is a weather forecast application utilizing the Open API to show a day forecast for a city that is entered.",stack: ["Typescript", "Nodejs", "HTML5"] },
    { name: "Portfolio", url: "example.com", images: ["/assets/images/employeeTrackerCLI.png"], description: "My personal portfolio website." , stack: ["React", "Javascript", "MongoDB"]},
    { name: "E-commerce", url: "example.com", images: ["/assets/images/employeeTrackerCLI.png"], description: "An e-commerce platform.", stack: ["React", "Node.js", "MongoDB"] },
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