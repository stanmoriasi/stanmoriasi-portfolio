import Profile from "./pages/profile.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contactme.jsx";
import About from "./pages/aboutme.jsx";
import Header from "./components/Header.jsx"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
