import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Navigate from './components/Navigate.js'
import About from './components/About.js';
import Project from './components/Project.js';
import skateIQ from './assets/images/skateIQvisual.png'
import Projects from './components/Projects.js';
import Link from './components/Link.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <>
    <Navigate />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;
