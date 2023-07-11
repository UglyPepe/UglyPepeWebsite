import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Buy from './components/Buy';
import About from './components/About';
import RoadMap from './components/RoadMap';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Buy/>} ></Route>
        <Route path="/home" element={<Buy/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/roadmap" element={<RoadMap/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
