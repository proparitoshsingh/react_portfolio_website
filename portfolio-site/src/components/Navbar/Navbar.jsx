import React, { useEffect, useState } from 'react';
import './style.css';

const Navbar = ({ scrollToSection }) => {
  const [ham, setHam] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    const handleSize = () => {
      setHam(window.innerWidth < 768);
    };
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const scrollToSectionHandler = (id) => {
    scrollToSection(id);
    if (ham) {
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    const btn = document.querySelector('.hamBtn');
    if (btn.innerHTML === '☰') {
      btn.innerHTML = 'X';
    } else {
      btn.innerHTML = '☰';
    }
  };

  return (
    <div className={`navbar ${isVisible ? '' : 'hidden'}`}>
      <div className="logo">{"<"}Paritosh<span style={{ color: '#fa3939' }}>Singh{"/>"}</span></div>
      {ham ? hambar(scrollToSectionHandler) : chapati(scrollToSectionHandler)}
    </div>
  );
};

export default Navbar;

const chapati = (scrollToSection) => (
  <ul className="nav-list">
    <li><a onClick={() => scrollToSection("aboutSection")}>About</a></li>
    <li><a onClick={() => scrollToSection("projectsSection")}>Projects</a></li>
    <li><a onClick={() => scrollToSection("skillsSection")}>Skills</a></li>
    <li><button onClick={() => scrollToSection("contactSection")}>Contact Me</button></li>
  </ul>
);

const hambar = (scrollToSection) => (
  <div className="hambar">
    <button onClick={() => scrollToSection("aboutSection")} className='hamBtn'>☰</button>
    {/* <ul className='ham-items'>
      <li><a href="#" onClick={() => scrollToSection("aboutSection")}>About</a></li>
      <li><a href="#" onClick={() => scrollToSection("projectsSection")}>Projects</a></li>
      <li><a href="#" onClick={() => scrollToSection("skillsSection")}>Skills</a></li>
      <li><button onClick={() => scrollToSection("contactSection")}>Contact Me</button></li>
    </ul>*/}
  </div>
);
