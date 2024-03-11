import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import back from './Components/assets/back.jpg';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin} from 'react-icons/fa'
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>  
      <About/>    
      <Projects/>
    </div>
  );
}

export default App;
