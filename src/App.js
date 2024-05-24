
import './App.css';
import { AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Biography from './Pages/Biography';
import Navbar from './Components/Navbar';
import linkedin from './Images/linkedinIcon.png';
import facebook from './Images/facebookIcon.png';
import instagram from './Images/instaIcon.png';

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
    <p className="footer">
    ©2024 Michael Cobb
    <div className='icons'>
    <img src={linkedin} alt="linkedin" className="icon1"/>
    <img src={facebook} alt="facebook" className="icon2"/>
    <img src={instagram} alt="instagram" className="icon3"/>
    </div>
    </p>
    </>
  );
}

export default App;
