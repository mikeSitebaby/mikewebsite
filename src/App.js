
import './App.css';
import { AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Biography from './Pages/Biography';
import MyWork from './Pages/MyWork';
import Navbar from './Components/Navbar';
import linkedin from './Images/linkedinIcon.png';
import facebook from './Images/facebookIcon.png';
import instagram from './Images/instaIcon.png';
import ContactForm from './Pages/Contact';


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
      <Route exact path="/MyWork" element=<MyWork/> id='my work' />
      <Route exact path ="/Contact" element=<ContactForm /> id ='contact' />
    </Routes>
    </AnimatePresence>
    </div>
    <p className="footer">
    ©2024 Michael Cobb
    <div className='icons'>
    <a href="https://www.linkedin.com/in/michael-cobb-1488b38a" target="_blank" rel="noopener noreferrer"> <img src={linkedin} alt="linkedin" className="icon1"/></a>
    <a href="https://www.facebook.com/conductorcobb" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" className="icon2"/></a>
    <a href="https://www.instagram.com/michaelcobb_conductor?igsh=MW15bTEyend5ZTRsYQ%3D%3D" target="_blank" rel="noopener noreferrer" ><img src={instagram} alt="instagram" className="icon3"/></a>
    </div>
    </p>
    </>
  );
}

export default App;
