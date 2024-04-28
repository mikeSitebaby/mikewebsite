
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
    <Routes>
      <Route exact path="/" element=<Home/> />
    </Routes>
    </div>
    </>
  );
}

export default App;
