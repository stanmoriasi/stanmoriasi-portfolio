

const Navigation = () => {
  return (
    <nav>
      <ul className="list-none flex items-center justify-end p-[20px]  w-[60vw] ">
        <li>
          <a className="text-white me-3" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="text-white me-3" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="text-white me-3" href="#aboutme">
            About me
          </a>
        </li>
        <li>
          <a className="text-white me-3" href="#contactme">
            Contact Me
          </a>
        </li>
        <li>
          <a className="text-white me-3" href="#resume">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
