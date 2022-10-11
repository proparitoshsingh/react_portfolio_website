import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/MyProjects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const scrollToSection = (id) => {
    console.log('Scrolling to section:', id);
    const element = document.querySelector(`#${id}`);
    console.log('Element:', element);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <About id="aboutSection" />
      <Projects id="projectsSection" />
      <Skills id="skillsSection" />
      <Contact id="contactSection" />
      <Footer />
    </div>
  );
}

export default App;
