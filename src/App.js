import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Courses from '././pages/Courses';
import History from '././pages/History';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './component/Navbar';
import Preference from '././pages/Preference'
import DomainPreference from '././pages/DomainPreference'
function App() {
  return (
    <div className="App">    
     <BrowserRouter>
     {/* <Navbar/> */}
      <Routes>
        {/* <Route path="/" element={<Layout />}> </Route> */}
        <Route path="/" element={<Home />}> </Route>
        <Route path="/About" element={<About />}> </Route>
        <Route path="/Preference" element={<Preference />}> </Route>
        <Route path="/Courses" element={<Courses />}> </Route>
        <Route path="/History" element={<History />}> </Route> 
        <Route path="/Login" element={<Login />}> </Route> 
        <Route path="/Domain" element={<DomainPreference />}> </Route> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
