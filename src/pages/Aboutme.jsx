import { useEffect } from 'react'
function About() {
  useEffect(() => {
    document.title = "Stan Moriasi | About";
  }, []);
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">About me</h1>
        </div>
      </div>
    );
  }
  
  export default About;