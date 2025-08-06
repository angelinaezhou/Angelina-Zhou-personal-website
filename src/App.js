import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Navigate from './components/Navigate.js'

function App() {
  return (
    <>
    <Navigate />
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
