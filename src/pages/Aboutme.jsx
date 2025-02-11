import { useEffect } from 'react'
function About() {
  useEffect(() => {
    document.title = "Stan Moriasi | About";
  }, []);
    return (
      <div className="flex flex-col items-center justify-center" id="aboutme">
        <div className="text-center max-w-[60vw]">
          <h1 className="text-4xl font-bold text-white">About me</h1>
          <p className="mt-4 text-lg text-gray-400">
          Hello! I’m a passionate Full Stack Developer with a strong background in building dynamic, scalable web applications. With extensive experience in JavaScript, Node.js, React, and TypeScript, I bring a well-rounded approach to both front-end and back-end development. My technical skills enable me to create seamless user experiences and highly efficient server-side solutions.

On the back end, I leverage Node.js and cloud-based technologies like AWS Lambda, ensuring fast, scalable, and serverless applications. I thrive in creating modular, maintainable code, and always prioritize delivering high-quality, efficient solutions.

I’m always up for a challenge and enjoy exploring new technologies to optimize performance and improve user experiences. I take pride in writing clean, maintainable code and collaborating in agile environments to drive innovation and success.
          </p>
        </div>
      </div>
    );
  }
  
  export default About;