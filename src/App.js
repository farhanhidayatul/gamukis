import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Loading from './pages/loading';
import Home from './pages/home';
import Game from './pages/game';
import Tutorial from './pages/tutorial';
import About from './pages/about';
import NT from './pages/notfound';
import InGame from "./component/component_game/inGame";

const TRACKING_ID = "G-FLNMFT2FES"; // Your Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

const App = () => {
  useEffect(() => {
    const sendPageView = () => {
      ReactGA.send({
        hitType: "pageview",
        page_location: window.location.href,
        page_title: document.title
      });
    };

    sendPageView(); // Initial page view

    // Listen for route changes
    const handleRouteChange = () => {
      sendPageView();
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/about" element={<About />} />
        <Route path="/inGame" element={<InGame/>} />
        <Route path="*" element={<NT />} />
      </Routes>
    </Router>
  );
}

export default App;
