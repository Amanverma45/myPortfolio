import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Myportfolio from './Component/Myportfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Myportfolio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
