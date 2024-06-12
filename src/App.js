import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Loading from './pages/loading';
import Home from './pages/home';
import Game from './pages/game';
import Tutorial from './pages/tutorial';
import About from './pages/about';
import NT from './pages/notfound';

// Initialize Google Analytics
const TRACKING_ID = "G-FLNMFT2FES"; // Your Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

const usePageViews = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
}

const App = () => {
  usePageViews();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NT />} />
      </Routes>
    </Router>
  );
}

export default App;
