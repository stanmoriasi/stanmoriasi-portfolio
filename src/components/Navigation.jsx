import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="list-none flex border w-[60vw]">
        <li>
          <NavLink className="nav-link me-3" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link me-3" to="/profile">
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link me-3" to="/aboutme">
            About me
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link me-3" to="/resume">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link me-3" to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link me-3" to="/contactme">
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
