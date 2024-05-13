import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from './pages/loading'
import Home from './pages/home'
import Game from './pages/game'
import Tutorial from './pages/tutorial'
import About from './pages/about'
import NT from './pages/notfound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/tutorial" element={<Tutorial/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NT/>} />
      </Routes>
    </Router>
  );
}

export default App;