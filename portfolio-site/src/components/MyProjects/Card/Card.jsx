import React from 'react'
import './style.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Card({ img, githubLink, demoLink, descrip, title }) {
  return (
    <div className='cards'>
      <img src={img} alt="Project Image" />
      <div class="card-content">
        <h3>{title}</h3>
        <p>{descrip}</p>
      </div>
      <div className="card-icons">
        <a href={githubLink} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
      </div>
    </div>
  )
}

export default Card