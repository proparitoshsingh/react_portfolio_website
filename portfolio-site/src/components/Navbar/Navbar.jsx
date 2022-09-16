import React from 'react'
import './style.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">{"<"}Paritosh<span style={{color:'red'}}>Singh{"/>"}</span></div>
      <ul className="nav-list">
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Skills</a></li>
        <li><button>Contact Me</button></li>
      </ul>
    </div>
  )
}

export default Navbar