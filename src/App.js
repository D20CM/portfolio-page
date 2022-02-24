import "./App.css";
import FeaturedProject from "./components/FeaturedProject/FeaturedProject";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <h2>Projects</h2>
      <FeaturedProject />
      <FeaturedProject />
    </div>
  );
}

export default App;
