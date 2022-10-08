import React from 'react'
import './style.css'
import Card from './Card/Card'
import codeboard from '../../assets/codeboards.png'
import covid from '../../assets/covid.png'
import mentalaid from '../../assets/mentalaid.png'

function Projects() {
  return (
    <div className='proj'>
      <h1>{"<"}My<span style={{ color: '#fa3939' }}>Projects/{">"}</span></h1>
      <div className='card'>
        <Card img={codeboard} />
        <Card img={covid} />
        <Card img={mentalaid} />
      </div>
    </div>
  )
}

export default Projects