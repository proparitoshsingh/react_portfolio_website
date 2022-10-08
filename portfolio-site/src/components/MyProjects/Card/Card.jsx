import React from 'react'
import './style.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Card({ img, githubLink, demoLink }) {
  return (
    <div className='cards'>
      <img src={img} alt="Project Image" />
      <div class="card-content">
        <h3>Your Project Title</h3>
        <p>Description of your project. Provide some information about what it does and its key features.</p>
      </div>
      <div className="card-icons">
        <a href={githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
      </div>
    </div>
  )
}

export default Card