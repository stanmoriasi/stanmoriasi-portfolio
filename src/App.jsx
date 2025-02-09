import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900">
    <Header></Header>
    <Home/>
    <Footer/>
    </div>
  );
}

export default App;
