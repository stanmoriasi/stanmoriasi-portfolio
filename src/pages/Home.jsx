import { useEffect } from 'react';
import Projects from '../pages/Projects';
import About from '../pages/Aboutme';
import Contact from '../pages/Contactme';
import Resume from './Resume';

function Home() {
  useEffect(() => {
    document.title = "Stan Moriasi | Home";
  }, []);
  return (
    <div className="flex flex-col items-center justify-start relative pt-[5%] border border-red-500 h-[max-content]">
      <section className='h-[100vh]'>
      <img src='/src/assets/images/avatar-new.png' alt="Avatar" className="absolute w-[400px] h-[500px] top-[5%] right-0" />
   
   <div className="text-center max-w-[60vw]">
     <h1 className="text-4xl font-bold text-white">Hello, my name is Stan Moriasi</h1>
     <p className="mt-4 text-lg text-gray-400">A passionate fullstack developer well versed in ReactJS, Typescript, Javascript, NodeJS and different web development techonologies</p>

       
      </div>
      </section>

      <section><Projects/></section>
      <section><About/></section>
      <section><Contact/></section>
      <section><Resume/></section>
    </div>
  );
}

export default Home;