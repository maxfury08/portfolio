import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";




function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Hero/>  
      <About/>    
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
