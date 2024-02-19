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
    const hammenu = document.getElementById('hamburger');
    if (btn.innerHTML === '☰') {
      hammenu.style.display = "block";
      btn.innerHTML = 'X';
    } else {
      hammenu.style.display = "none";
      btn.innerHTML = '☰';
    }
  };
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
      <button onClick={toggleMenu} className='hamBtn'>☰</button>
      <div id='hamburger' className='hamnav'>
        <a href="#" onClick={() => scrollToSection("aboutSection")}>About</a>
        <a href="#" onClick={() => scrollToSection("projectsSection")}>Projects</a>
        <a href="#" onClick={() => scrollToSection("skillsSection")}>Skills</a>
        <a href="#" onClick={() => scrollToSection("contactSection")}>Contact Me</a>
      </div>
    </div>
  );

  return (
    <div id="navbar" className={`navbar ${isVisible ? '' : 'hidden'}`}>
      <div className="logo">{"<"}Paritosh<span style={{ color: '#fa3939' }}>Singh{"/>"}</span></div>
      {ham ? hambar(scrollToSectionHandler) : chapati(scrollToSectionHandler)}
    </div>
  );
};

export default Navbar;

