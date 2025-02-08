import { useEffect} from "react";
import Project from "../components/Project";
function Projects() {
  const projects = [{name:"weatherApp", url:"example.com"}];
  useEffect(() => {
    document.title = "Stan Moriasi | Projects";
  }, []);
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Sample Projects</h1>
          
          {projects.map((project,index) => (
            <Project  project={project} key={index}/>
          ))
          }
        </div>
      </div>
    );
  }
  
  export default Projects;