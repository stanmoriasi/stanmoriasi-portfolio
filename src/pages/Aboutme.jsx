import { useEffect } from 'react'
function About() {
  useEffect(() => {
    document.title = "Stan Moriasi | About";
  }, []);
    return (
      <div className="flex flex-col items-center justify-center" id="aboutme">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">About me</h1>
        </div>
      </div>
    );
  }
  
  export default About;