import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Navigate from './components/Navigate.js'
import About from './components/About.js';
import Project from './components/Project.js';
import skateIQ from './assets/images/skateIQvisual.png'

function App() {
  return (
    <>
    <Navigate />
    <Routes>
      <Route path="/" element={<Project image={skateIQ} title="skateIQ - Full Stack ML Web App" description="Figure skating jump classifier utilizing pose data, computer vision, live playback and analysis."/>}>
      </Route>
    </Routes>
    </>
  )
}

export default App;
