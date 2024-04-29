
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Biography from './Pages/Biography';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
    <Routes>
      <Route exact path="/" element=<Home/> />
      <Route exact path="/Biography" element=<Biography/> />
    </Routes>
    </div>
    </>
  );
}

export default App;
