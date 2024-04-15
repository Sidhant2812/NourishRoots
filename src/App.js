import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';
import Vision from './Components/Vision/vision'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/signup'

import Delievery from './Components/Delievery/Delievery'
import Testimonial from './Components/Testimonial/Testimonial'

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="Navbar" element={<Navbar/>}/>
        <Route path="Vision" element={<Vision/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
       
        <Route path="Delievery" element={<Delievery/>}/>
        <Route path="Testimonial" element={<Testimonial/>}/>
      </Routes>
    </Router>
  );
}

export default App;
