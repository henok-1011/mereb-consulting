import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Service from './pages/Service';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
