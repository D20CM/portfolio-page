import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import About from "./About";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
