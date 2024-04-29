
import './App.css';
import { AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Biography from './Pages/Biography';
import Navbar from './Components/Navbar';

function App() {

  const [isAnimating, setIsAnimating] = useState(false);


  let location = useLocation();
  return (
    <>
      <Navbar isAnimating={isAnimating} setIsAnimating={setIsAnimating}/>
      <div className="wrapper">
      <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
    <Routes location={location} key={location.pathname}>
      <Route exact path="/" element=<Home/> id='home'/>
      <Route exact path="/Biography" element=<Biography/> id='biography' />
    </Routes>
    </AnimatePresence>
    </div>
    </>
  );
}

export default App;
